import { useState } from "react";
import { addAccount } from "../services/api";

export default function AddAccount() {
  const [phone, setPhone] = useState("");
  const [personality, setPersonality] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAccount(phone, personality).then(() => {
      alert("Аккаунт добавлен");
      setPhone("");
      setPersonality("");
    });
  };

  return (
    <div>
      <h1>Добавить аккаунт</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Личность"
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
        ></textarea>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
