import { useState } from "react";
import { useForm } from "react-hook-form";
import "./login-form.css";
import { useNavigate } from "react-router-dom";
import type { LoginData, LoginFormData, UserData } from "@/types/auth";



export default function LoginForm() {
  const navigate = useNavigate();
  
  // show error and success message
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>();

  const onSubmit = (formData: LoginFormData) => {

    const storedData = localStorage.getItem("userdata");

    if (!storedData) {
      setError("Пользователь не найден. Пожалуйста зарегистрируйтесь");
      setSuccessMessage("");
      setTimeout(() => {
        navigate("/auth/register");
      }, 2000);
      return;
    }

    const userData: UserData = JSON.parse(storedData);

    if (
      userData.email === formData.email &&
      userData.password === formData.password
    ) {
      const loginData: LoginData = {
        isLoggedIn: true,
        name: userData.name,
        email: userData.email,
        loginTime: new Date().toISOString(),
      };

      localStorage.setItem("logindata", JSON.stringify(loginData));
      setSuccessMessage("Вы успешно авторизовались");
      setError("");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setError("Вы ввели неверные данные");
      setSuccessMessage("");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      {error && <div className="form-error-message">{error}</div>}
      {successMessage && (
        <div className="form-success-message">{successMessage}</div>
      )}
      
      <input
        type="email"
        placeholder="Your email"
        className="form-control"
        {...register("email", {
          required: "Email обязателен",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email некорректен"
          }
        })}
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
      
      <input
        type="password"
        placeholder="********"
        className="form-control"
        {...register("password", {
          required: "Пароль обязателен",
          minLength: {
            value: 6,
            message: "Пароль должен содержать минимум 6 символов"
          }
        })}
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      )}

      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}
