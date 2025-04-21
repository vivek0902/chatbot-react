import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { setUserRole, credential } = useContext(AuthContext);
  const [formData, setFormData] = useState({ userId: "", currentPassword: "" });

  const handleChanges = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credential.userId === formData.userId &&
      credential.currentPassword === formData.currentPassword
    ) {
      setUserRole("user");
      navigate("/user");
    } else {
      alert("Please Enter Valid User Id and PassWord");
    }
    setFormData({ userId: "", currentPassword: "" });
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
        />
        <br />
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChanges}
          placeholder="Enter Your Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
