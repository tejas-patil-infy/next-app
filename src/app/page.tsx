"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    if (email != "tejas@gmail.com" || password != "1234") {
      alert("Please enter registered email and password");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1, // take remaining vertical space
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 400,
            width: "100%",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        >
          <h1 style={{ textAlign: "center", color: "#171717" }}>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block", marginBottom: 4, color: "#171717" }}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "1rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />

            <label htmlFor="password" style={{ display: "block", marginBottom: 4, color: "#171717" }}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "1rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 4,
                border: "none",
                color: "white",
                backgroundColor: "#0070f3",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
