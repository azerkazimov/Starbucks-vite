import type { AuthUser } from "@/types/middleware";

import { useSidebar } from "@/store/use-sidebar";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "@/components/sidebar/sidebar";
import "./navbar.css";
import { useProducts } from "@/store/use-products";

interface NavbarProps {
  isAuthenticated: boolean;
  user: AuthUser | null;
  onLogout: () => void;
}

export default function Navbar({
  isAuthenticated,
  user,
  onLogout,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { openSidebar, isSidebarOpen } = useSidebar();
  const { products } = useProducts();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".avatar-container")) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-menu">
          <Link to="/" className="nav-logo">
            StarBucks
          </Link>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/todo-list">Todo</Link>
            </li>
          </ul>
          <div className="navbar-actions">
            <button
              className="basket-icon"
              onClick={openSidebar}
              aria-label="Open cart"
            >
              <ShoppingCart />
              {products.length > 0 ? (
                <span className="basket-count">{products.length}</span>
              ) : (
                <></>
              )}
            </button>

            {isSidebarOpen && <Sidebar />}

            {isAuthenticated ? (
              <div className="avatar-container">
                <div className="avatar" onClick={toggleDropdown}></div>
                <span>{user?.name}</span>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/dashboard" className="dropdown-item">
                      Dashboard
                    </Link>

                    <button className="dropdown-item" onClick={onLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="last">
                <span className="nav-item ">
                  <Link to="/auth/login">Login</Link>
                </span>
                <span className="nav-item ">
                  <Link to="/auth/register">Register</Link>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
