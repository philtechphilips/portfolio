import { useState } from "react";
import useAuthContext from "../context/AuthContext";
import Navbar from "./Navbar";
import Contact from "./Contact";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors, isSubmitting } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password, device_name: "Philtech" });
  };

  return (
    <>
    <Navbar />
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h1 className="login-heading">Login to your account</h1>
          <div className="login-input-container">
            <input
              type="email"
              className="login-input"
              placeholder="E-mail Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && (
              <div className="flex">
                <span style={{ color: "red" }}>{errors.email[0]}</span>
              </div>
            )}
          </div>
          <div className="login-input-container">
            <input
              type="password"
              className="login-input"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.email && (
              <div className="flex">
                <span style={{ color: "red" }}>{errors.password[0]}</span>
              </div>
            )}
          </div>
          <div className="login-input-container">
            <button
              disabled={isSubmitting}
              type="submit"
              className={`login-button ${isSubmitting && "submitting"}`}
            >
              {isSubmitting ? "Submitting..." : "Login"}
            </button>
          </div>
        </form>
      </div>
      <Contact />
    </>
  );
};

export default SignIn;
