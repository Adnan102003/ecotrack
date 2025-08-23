import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login    from "./pages/Login";
import Register from "./pages/Register";
import Home     from "./pages/Home";
import Upload   from "./pages/Upload";

export default function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login"   element={<Login />} />
        <Route path="/register"element={<Register />} />
        <Route path="/upload"  element={<Upload />} />
        <Route path="*"        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
