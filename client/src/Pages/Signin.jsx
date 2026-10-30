import React, { useState } from "react";

const Signin = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isSignUp ? "/api/users/register" : "/api/users/login";
    const payload = isSignUp ? { name, email, password } : { email, password };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        onLogin();
      } else {
        setError(data.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-white">
      {/* Container */}
      <div className="flex w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
        
        {/* Left Side: Branding Panel */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-pink-950 via-gray-900 to-black p-10 flex-col justify-between relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">
              Exclusive Beauty
            </span>
            <h1 className="text-4xl font-extrabold tracking-wider mt-2 text-white">
              MAKEUP <span className="text-pink-500">STORE</span>
            </h1>
          </div>
          <div className="relative z-10 space-y-3">
            <p className="text-gray-300 text-sm">
              Discover premium cosmetics and makeup collections tailored just for you.
            </p>
            <div className="flex items-center space-x-2 text-pink-400 text-xs">
              <span>✨ 100% Original Products</span>
              <span>•</span>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center bg-gray-950">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold tracking-wide text-pink-500 md:hidden mb-1">
              MAKEUP STORE
            </h2>
            <p className="text-gray-400 text-sm">
              {isSignUp ? "Create a new account" : "Sign in to your account"}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-xs rounded-lg text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-pink-500 text-sm text-white transition"
                />
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@domain.com"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-pink-500 text-sm text-white transition"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-pink-500 text-sm text-white transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition duration-200 text-sm tracking-wide shadow-lg shadow-pink-600/20 mt-2"
            >
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-400">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-pink-400 hover:text-pink-300 font-semibold ml-1 transition"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signin;