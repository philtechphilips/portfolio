import Contact from "./Contact";
import Hero from "./Hero";
import Work from "./Work";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "../api/axios";
import { useState } from "react";

const HomePage = () => {
  const [projects, setProJects] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("/get-projects", { headers });
      setProJects(response.data);
      // console.log(response.data)
    };
    getPosts();
  }, []);
  return (
    <>
      <Navbar />
      <Hero
        heading="Coding Your Imaginations to Life."
        body="As a fullstack web developer, my goal is to turn people's imaginative designs into functional and user-friendly web applications. I bring together my technical skills and creativity to build responsive and dynamic websites that meet your project requirements. Let's work together to bring your digital vision to life!"
        info="Fullstack Website Developer"
      />
      <Work projects={projects} />
      <Contact />
    </>
  );
};

export default HomePage;
