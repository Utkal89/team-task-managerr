import { useState } from "react";
import API from "../api";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    await API.post("/auth/signup", form);
    alert("Signup successful");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input onChange={e => setForm({...form, email:e.target.value})} />
      <input onChange={e => setForm({...form, password:e.target.value})} />
      <button onClick={submit}>Signup</button>
    </div>
  );
}