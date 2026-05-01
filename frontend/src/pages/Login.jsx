import { useState } from "react";
import API from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Login success");
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={e => setForm({...form, email:e.target.value})} />
      <input onChange={e => setForm({...form, password:e.target.value})} />
      <button onClick={submit}>Login</button>
    </div>
  );
}