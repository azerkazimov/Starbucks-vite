import { Link, useNavigate, useParams } from "react-router-dom";
import "./user-details.css";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Building,
  Globe,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Loading from "@/components/loading/loading";
import Errors from "@/components/errors/errors";
import type { UserProps } from "@/types/user";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !user) {
    return <Errors error={error ? error : "Not found user"} />;
  }

  return (
    <div className="user-page">
      <div className="container">
        <div className="user-wrapper">
          <div className="user-details-card">
            <div className="user-details-header">
              <button
                className="back-to-prev"
                onClick={() => navigate("/users")}
              >
                <ArrowLeft size={22} />
                Back to users
              </button>
              <h2 className="user-details-header">User profile</h2>
            </div>

            <div className="user-profile">
              <div className="user-avatar">
                <User size={64} />
              </div>
              <div className="user-main-info">
                <div className="user-full-name">{user.name}</div>
                <div className="user-username">@{user.username}</div>
              </div>
            </div>

            <div className="info-section">
              <div className="section-title">Contact Information</div>
              <div className="info-grid">
                <div className="info-item">
                  <Mail size={20} className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Email</span>
                    <Link
                      to={`mailto:${user.email}`}
                      className="info-value link"
                    >
                      {user.email}
                    </Link>
                  </div>
                </div>

                <div className="info-item">
                  <Phone size={20} className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Phone</span>
                    <a href={`tel:${user.phone}`} className="info-value link">
                      {user.phone}
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <Globe size={20} className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Web page</span>
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-value link"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3 className="section-title">Adress</h3>
              <div className="info-grid">
                <div className="info-item">
                  <MapPin size={20} className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Adress</span>
                    <span className="info-value">
                      {user.address.street}, {user.address.suite}
                    </span>
                  </div>
                </div>

                <div className="info-item">
                  <Building size={20} className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">City</span>
                    <span className="info-value">
                      {user.address.city}, {user.address.zipcode}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3 className="section-title">Company</h3>
              <div className="company-info">
                <div className="company-header">
                  <h4 className="company-name">{user.company.name}</h4>
                  <span className="company-bs">{user.company.bs}</span>
                </div>
                <p className="company-phrase">"{user.company.catchPhrase}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
