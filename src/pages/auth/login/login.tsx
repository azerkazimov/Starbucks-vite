import LoginForm from "@/components/auth/login-form/login-form";
import "./login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="login-page">
        <LoginForm />
      </div>
    </div>
  );
}
