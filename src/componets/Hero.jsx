import "./Hero.css";
import image from "../assets/image3.jpeg";
import { Link } from "react-router-dom";

const Hero = ({ heading, body, info }) => {
  return (
    <>
      <div className="hero-container">
        <div
          className="left"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="btn">{info}</p>
          <p className="motto">{heading}</p>
          <p className="hero-body">{body}</p>
          <div style={{ display: "flex" }}>
            <div>
              <Link
                to="mailto:pelumiisola87@gmail.com"
                target="_blank"
                className="hero-button"
              >
                Get In Touch
              </Link>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <Link
                to="https://drive.google.com/file/d/17Vcqz6UdtPdC-MqxNXmAg5oxsG72Q-Hg/view?usp=share_link"
                target="_blank"
                className="hero-button"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img
            className="my-image"
            src={image}
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
