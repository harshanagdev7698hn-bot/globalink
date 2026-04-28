se client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const saved = localStorage.getItem("globalink_registered_user");

    if (!saved) {
      alert("No account found. Please create account first.");
      router.push("/join");
      return;
    }

    const user = JSON.parse(saved);

    if (user.email !== email || user.password !== password) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("globalink_user", JSON.stringify(user));
    localStorage.setItem("globalink_logged_in", "true");

    alert("Login successful");
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#FBE4D8] p-6">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#190019]">Login</h1>
        <p className="mt-2 text-[#854F6C]">
          Login with your registered email and password.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full rounded-xl bg-[#2B124C] py-3 font-bold text-white">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}