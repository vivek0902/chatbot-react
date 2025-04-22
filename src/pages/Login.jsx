import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // const { setUserRole, credential } = useContext(AuthContext);
  const [formData, setFormData] = useState({ userId: "", password: "" });

  const handleChanges = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ userId: formData.userId, pass: formData.password }));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
    }
  }, [isAuth, navigate]);

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
