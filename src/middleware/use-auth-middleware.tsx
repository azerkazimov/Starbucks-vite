import type { AuthUser } from "@/types/middleware";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useAuthMiddleware() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkAuthStatus();
    //eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [location.pathname]);

  const checkAuthStatus = () => {
    try {
      const loginData = localStorage.getItem("logindata");
      const userData = localStorage.getItem("userdata");

      if (loginData && userData) {
        const parseLoginData = JSON.parse(loginData);

        const user: AuthUser = {
          name: parseLoginData.name || "",
          email: parseLoginData.email || "",
          loginTime: parseLoginData.loginTime || "",
        }

        if (parseLoginData.isLoggedIn) {
          setIsAuthenticated(true);
          setUser(user);
        } else {
          clearAuthData();
        }
      } else {
        clearAuthData();
      }
    } catch (error) {
      console.error("Auth check error: ", error);
      clearAuthData();
    } finally {
      setLoading(false);
    }
  };

  const clearAuthData = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("logindata");
  };

  const logout = () => {
    clearAuthData();
    navigate("/auth/login");
  };

  return {
    isAuthenticated,
    user,
    loading,
    logout,
    checkAuthStatus,
    clearAuthData,
  };
}

export function useRouterProtection(
  requireAuth = false,
  redirectTo = "/auth/login"
) {
  const { isAuthenticated, loading } = useAuthMiddleware();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !isAuthenticated) {
        navigate(redirectTo, {
          state: { from: location },
          replace: true,
        });
      }
    }
  }, [isAuthenticated, requireAuth, loading, redirectTo, navigate, location]);

  return { isAuthenticated, loading };
}
