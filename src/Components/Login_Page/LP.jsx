import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SignUpcss from "./LP.module.css";

import axios from "axios";

export default function LP() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userError, setError] = useState("");

  // Show/hide password
  const [showUserPassword, setShowUserPassword] = useState(false);

 const handleLoginInfo = async (e) => {

    e.preventDefault();

    try {
      
      const response = await axios.post(
      
          `${import.meta.env.VITE_API_URL}/user/login`,
          {
                name: user,
                password: pass
            }
          );

        console.log(response.data);

        navigate("/webdata");

    } catch (error) {
        console.log(`Error Login User... ${error}`);
        setError("Invalid credentials");
        setUser("");
        setPass("");
    }
};

  return (
    <div className={SignUpcss.outercon}>
      <div className={SignUpcss.innercon}>

        {/* Login Form */}
        <div className={SignUpcss.innerconContent}>
          <h1>Login</h1>

          <form onSubmit={handleLoginInfo}>

            {/* Username */}
            <div className={SignUpcss.inputWrapper}>
              <input
                type="text"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <i className="fa-regular fa-user"></i>
            </div>

            {/* Password */}
            <div className={SignUpcss.inputWrapper}>
              <input
                type={showUserPassword ? "text" : "password"}
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
              <i
                className={`fa-solid ${showUserPassword ? "fa-lock-open" : "fa-lock"} ${SignUpcss.passwordIcon}`}
                onClick={() => setShowUserPassword(!showUserPassword)}
              ></i>
            </div>

            {/* Submit */}
            <button type="submit">Login</button>

              <p>Don't have an account?</p>
              <p onClick={() => navigate("/")}>Sign Up</p>

            {userError && <p className={SignUpcss.error}>{userError}</p>}
          </form>
        </div>

        {/* Side Text */}
        <div className={SignUpcss.inner_con_Content_Text}>
          <h1>Welcome Back!</h1>
        </div>

      </div>
    </div>
  );
}
