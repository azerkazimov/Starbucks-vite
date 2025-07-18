import { AuthLayout } from "@/layout/auth-layout";
import { MainLayout } from "@/layout/main-layout";
import { ProtectedLayout } from "@/layout/protected-layout";
import Login from "@/pages/auth/login/login";
import Register from "@/pages/auth/register/register";
import Dashboard from "@/pages/dashboard/dashboard";
import Main from "@/pages/main/main";
import PATH from "./constant";
import UsersApp from "@/pages/users/users-app";
import About from "@/pages/about/about";
import TodoApp from "@/pages/todo-list/todo-app";

export const Routes = [
  {
    path: PATH.main,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/users",
        element: <UsersApp />,
      },
      {
        path: "/about",
        element: <About user="John Doe" />,
      },
      {
        path: "/todo-list",
        element: <TodoApp />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
];
