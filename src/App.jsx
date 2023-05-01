import { useEffect, useState } from "react";
import HomePage from "./componets/HomePage";
import { Route, Routes } from "react-router-dom";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Contact from "./componets/Contact";

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  return (
    <>
      {load ? (
        <div className="page-loader">
          <h2>Isola Pelumi</h2>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
