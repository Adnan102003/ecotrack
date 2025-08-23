import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [resp, setResp] = useState(null);
  const nav = useNavigate();

  if (!localStorage.getItem("token")) {
    nav("/login");
    return null;
  }

  async function submit(e) {
    e.preventDefault();
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    const res = await api.post("/receipts/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setResp(res.data);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <form onSubmit={submit} className="space-y-4">
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="bg-green-600 text-white px-4 py-2">Upload</button>
      </form>

      {resp && (
        <div className="space-y-2 text-center">
          <p className="text-green-700">Upload successful!</p>
          <a
            href={`http://localhost:4000${resp.url}`}
            target="_blank"
            className="text-blue-600 underline"
          >
            View file
          </a>
        </div>
      )}
    </div>
  );
}
