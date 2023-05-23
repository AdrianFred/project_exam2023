import { useState } from "react";

const useLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const login = (email, password) => {
    setIsLoggingIn(true);
    setLoginError(null);

    const data = {
      email,
      password,
    };

    fetch("https://api.noroff.dev/api/v1/holidaze/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("token", data.accessToken);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoginError("Login failed. Please check your credentials and try again.");
      })
      .finally(() => {
        setIsLoggingIn(false);
      });
  };

  return {
    isLoggingIn,
    loginError,
    login,
  };
};

export default useLogin;
