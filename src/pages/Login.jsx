import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { setUserRole, credential } = useContext(AuthContext);
  const [formData, setFormData] = useState({ userId: "", password: "" });

  const handleChanges = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credential.userId === formData.userId &&
      credential.password === formData.password
    ) {
      setUserRole("user");
      navigate("/user");
    } else {
      alert("Please Enter Valid User Id and PassWord");
    }
    setFormData({ userId: "", password: "" });
    return null;
  };

  return (
    <div>
      <h1>Login</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChanges}
          placeholder="Enter Your User Id"
          autoComplete="username"
        />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChanges}
          placeholder="Enter Your Password"
          autoComplete="current-password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
