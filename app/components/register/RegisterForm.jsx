"use client";

import React, { useState } from "react";
import useRegistration from "./hook/useRegistration";

const RegisterForm = () => {
  const [venueManager, setVenueManager] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, isRegistering, registrationError } = useRegistration();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
    if (!email.match(emailRegex)) {
      alert("Invalid email format. Please use an email ending with @stud.noroff.no.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Validate avatar URL
    try {
      new URL(avatar);
    } catch (error) {
      alert("Invalid avatar URL. Please enter a valid URL.");
      return;
    }

    // Registration logic goes here

    const data = {
      venueManager,
      name,
      email,
      avatar,
      password,
    };

    register(data);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleVenueManagerChange = (e) => {
    const checked = e.target.checked;
    setVenueManager(checked);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded shadow min-w-[450px]">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Register</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-gray-900"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-gray-900"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-900 font-semibold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-gray-900"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="avatarUrl" className="block text-gray-900 font-semibold mb-2">
          Avatar URL
        </label>
        <input
          type="text"
          id="avatarUrl"
          value={avatar}
          onChange={handleAvatarChange}
          className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-gray-900"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="isVenueManager" className="flex items-center cursor-pointer">
          <input type="checkbox" id="isVenueManager" className="mr-2 cursor-pointer" onChange={handleVenueManagerChange} />
          <span className="text-gray-900 font-semibold">I am a Venue Manager</span>
        </label>
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded font-semibold hover:bg-indigo-600 transition duration-300">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
