import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="h-screen flex items-center justify-center text-2xl">
      {msg}
    </div>
  );
}
