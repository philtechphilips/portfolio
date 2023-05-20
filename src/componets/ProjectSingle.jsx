import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";
import he from "he";
import React from "react";

const ProjectSingle = () => {
  const location = useLocation();
  const project = location.state;
  const decodedHtml = he.decode(project.project);
  return (
    <>
      <Navbar />
      <div className="project-single">
        <div className="project-single-body">
          <img src={`http://localhost:8000/uploads/${project.file}`} />
          <div style={{ margin: "20px 0" }}>
            <a
              href={`${project.link}`}
              style={{ fontWeight: 600, margin: "20px 0" }}
            >
              Visit Website{" "}
            </a>
          </div>
          <p className="heading-text" style={{ marginTop: "20px" }}>
            {project.title}
          </p>
          <div className="text-body">
            {React.createElement("div", {
              dangerouslySetInnerHTML: { __html: decodedHtml },
            })}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ProjectSingle;
