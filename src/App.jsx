import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/*----------------------Public Pages / Unprotected------------------------------*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/*------------------Protected User---------------------------*/}
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
