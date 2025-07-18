import { AlertCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./error.css"

interface ErrorProps{
  error: string
}

export default function Errors({ error }:ErrorProps) {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <AlertCircle size={48} className="error-icon" />
      <h2>Error</h2>
      <p>{error}</p>

      <button onClick={() => navigate("/")}>
        <ArrowLeft />
        Return
      </button>
    </div>
  );
}
