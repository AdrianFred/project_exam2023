import { useState } from "react";

const useRegistration = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const register = (data) => {
    setIsRegistering(true);
    setRegistrationError(null);

    fetch("https://api.noroff.dev/api/v1/holidaze/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Registration successful! You can now log in.");
        setIsRegistering(false);
        // Perform any success actions or set state
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsRegistering(false);
        setRegistrationError(error.message || "Registration failed.");
      });
  };

  return { register, isRegistering, registrationError };
};

export default useRegistration;
