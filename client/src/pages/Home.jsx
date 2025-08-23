import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function Home() {
  const [msg, setMsg] = useState("Loading…");
  const nav = useNavigate();

  useEffect(() => {
    api.get("/private/hello")
       .then(res => setMsg(res.data.message))
       .catch(() => {
         localStorage.removeItem("token");
         nav("/login");
       });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <header className="space-x-3">
        <Link to="/upload" className="text-blue-600 underline">
          Upload Receipt
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            nav("/login");
          }}
          className="text-red-600 underline"
        >
          Log out
        </button>
      </header>
      <div className="text-2xl">{msg}</div>
    </div>
  );
}
