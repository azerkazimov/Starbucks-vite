import { Outlet } from "react-router-dom";
import { useAuthMiddleware } from "../middleware/use-auth-middleware";



import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Loading from "@/components/loading/loading";

export function MainLayout() {
  const { isAuthenticated, user, loading, logout } = useAuthMiddleware();

  if (loading) {
    return <Loading />;
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




