import { useNavigate } from "react-router-dom";
import "./Work.css";
import PropTypes from "prop-types";
import axios from "../api/axios";

const Work = ({ projects }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchDetails = async (id) => {
    try {
      const response = await axios.get(`/get-projects/${id}`, { headers });
      navigate("/project-details", { state: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="work-container">
      <div className="">
        <div data-aos="fade-down" data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
        <p className="btn">Projects</p>
        <p className="heading">Fullstack Projects.</p>
        <p className="work-body">
          Check out my portfolio of full-stack web development projects for a
          glimpse into my coding process, problem-solving skills, and attention
          to detail.
        </p>
</div>
        {projects.length < 1 ? (
          <div style={{ marginTop: "20px", color: "red" }} >
            No ProJect Uploaded Yet!
          </div>
        ) : (
          projects.map((item) => (
            <div key={item.id} className="projects-container" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
              <p className="project-heading">{item.title}</p>
              <p className="project-body">{item.brief}</p>
              <div style={{ margin: "10px 0" }}>
                <a
                  href={`${item.link}`}
                  style={{ fontWeight: 600, margin: "20px 0" }}
                >
                  Visit Website{" "}
                </a>
              </div>
              <img
                className="project-image"
                src={`http://localhost:8000/uploads/${item.file}`}
              ></img>
              <div
                onClick={() => {
                  fetchDetails(item.id);
                }}
              >
                <p className="btn">View Details</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

Work.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Work;
