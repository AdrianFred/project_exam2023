"use client";

import { useState } from "react";
import useLogin from "./hook/useLogin";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggingIn, loginError } = useLogin();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    router.refresh();
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded shadow min-w-[450px]">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Login</h2>
      {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-gray-900"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-900 font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-gray-900"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoggingIn}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded font-semibold hover:bg-indigo-600 transition duration-300"
      >
        {isLoggingIn ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
