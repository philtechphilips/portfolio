import { useEffect, useState } from "react";
import HomePage from "./componets/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./componets/About";
import Login from "./componets/Login";
import Dashboard from "./componets/Dashboard";
import ProjectSingle from "./componets/ProjectSingle";

const App = () => {
  const [load, setLoad] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return (
    <>
      {load ? (
        <div className="page-loader">
          <h2
            data-aos="zoom-out-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Isola Pelumi
          </h2>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : navigate("/login")}
            />
            <Route path="/project-details" element={<ProjectSingle />}></Route>
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
