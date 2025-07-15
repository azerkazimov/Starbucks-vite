import { Loader } from "lucide-react";
import "./loading.css"

export default function Loading() {
    return (
        <div className="loader-wrapper">
        <Loader className="spinner" />
        <span>Loading...</span>
      </div>
    );
}