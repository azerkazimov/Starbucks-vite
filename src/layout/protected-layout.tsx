import { Outlet } from "react-router-dom";

import { useAuthMiddleware } from "../middleware/use-auth-middleware";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Loading from "@/components/loading/loading";

interface ProtectedLayoutProps {
  requiredAuth?: boolean;
  fallbackComponent?: React.ReactNode;
}

export function ProtectedLayout({
  requiredAuth = true,
  fallbackComponent = null,
}: ProtectedLayoutProps) {
  const { isAuthenticated, loading, user, logout } = useAuthMiddleware();

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated && requiredAuth) {
    return (
      fallbackComponent || (
        <div className="access">
          <h2>Access Denied</h2>
          <span>
            Please <a href="/auth/login">log in</a> to access this page
          </span>
        </div>
      )
    );
  }

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={logout}
      />
      <Outlet />
      <Footer/>
    </>
  );
}
