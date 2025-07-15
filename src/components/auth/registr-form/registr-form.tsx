import { useForm } from "react-hook-form";
import "./regisrt-form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterUser } from "@/types/auth";

export default function RegistrForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterUser>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      theme: "dark",
      notifications: false,
      newsletter: false,
    },
  });

  const password = watch("password");

  const [successMessage, setSuccessMessage] = useState("");

  const validatePassword = (value: string) => {
    if (value.length < 8) return "Минимум 8 символов";
    if (!/(?=.*[a-z])/.test(value)) return "Нужна строчная буква";
    if (!/(?=.*[A-Z])/.test(value)) return "Нужна заглавная буква";
    if (!/(?=.*\d)/.test(value)) return "Нужна цифра";
    return true;
  };

  const onSubmit = (data: RegisterUser) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      age: data.age,
      theme: data.theme,
      notifications: data.notifications,
      newsletter: data.newsletter,
    };

    localStorage.setItem("userdata", JSON.stringify(userData));

    console.log(data);
    setSuccessMessage("Вы зарегались. Пройдите авторизацию");

    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);

    reset();
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      {successMessage && (
        <div className="form-success-message">{successMessage}</div>
      )}
      <input
        type="text"
        placeholder="Your name"
        className="form-control"
        {...register("name", {
          required: "Имя обязательно",
          minLength: {
            value: 3,
            message: "Минимум 3 символа",
          },
          validate: {
            noSpaces: (value) => !/\s/.test(value) || "Пробелы не разрешены",
            notAdmin: (value) => value !== "admin" || 'Имя "admin" запрещено',
          },
        })}
      />
      {errors.name && (
        <span style={{ color: "red" }}>{errors.name.message}</span>
      )}
      <input
        type="email"
        placeholder="Your email"
        className="form-control"
        {...register("email", { required: "Email обязательно" })}
      />
      {errors.email && (
        <span style={{ color: "red" }}>{errors.email.message}</span>
      )}
      <input
        type="password"
        placeholder="********"
        className="form-control"
        {...register("password", {
          required: "Пароль обязательно",
          validate: validatePassword,
        })}
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      )}
      <input
        type="password"
        placeholder="********"
        className="form-control"
        {...register("confirmPassword", {
          required: "Пароль обязательно",
          validate: (value) => value === password || "Пароли не совпадают",
        })}
      />
      {errors.confirmPassword && (
        <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>
      )}

      <input
        type="text"
        placeholder="Your age"
        className="form-control"
        {...register("age")}
      />

      <div className="check-theme">
        <label>
          <input
            className="radio-btn"
            type="radio"
            value="light"
            {...register("theme")}
          />
          Light
        </label>
        <label>
          <input
            className="radio-btn"
            type="radio"
            value="dark"
            {...register("theme")}
          />
          Dark
        </label>
      </div>

      <div className="check-theme">
        <label>
          <input type="checkbox" {...register("newsletter")} />
          Subscribe
        </label>

        <label>
          <input type="checkbox" {...register("notifications")} />
          Notification
        </label>
      </div>

      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}
