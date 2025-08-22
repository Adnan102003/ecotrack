import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [form, set] = useState({ email: "", password: "" });
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const { data } = await api.post("/auth/login", form);
    localStorage.setItem("token", data.token);
    nav("/");
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={submit} className="w-80 space-y-4">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <input className="border p-2 w-full" placeholder="Email"
               value={form.email}
               onChange={e => set({ ...form, email: e.target.value })}/>
        <input className="border p-2 w-full" type="password" placeholder="Password"
               value={form.password}
               onChange={e => set({ ...form, password: e.target.value })}/>
        <button className="bg-green-600 text-white w-full py-2">Sign In</button>
        <Link to="/register" className="block text-center text-blue-600 text-sm">
          Need an account?
        </Link>
      </form>
    </div>
  );
}
