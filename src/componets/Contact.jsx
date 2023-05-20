import { Link } from "react-router-dom";
import "./Contact.css";
import 'remixicon/fonts/remixicon.css'

const Contact = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <p className="btn">Contact</p>
        <p className="heading">Let&apos;s work!</p>

        <div className="contact-body">
          <div className="contact">
            <p>+234 7063 623 3539</p>
          </div>
          <div className="contact">
            <p>pelumiisola87@gmail.com</p>
          </div>
        </div>

        <div className="footer">
            <Link to='/' style={{ color: '#111111' }} className="footer-logo">Isola Pelumi</Link>
            <div className="footer-social">
                <a href="https://twitter.com/philipsdcoda"><i className="ri-twitter-fill"></i></a>
                <a href="https://github.com/philtechphilips"><i className="ri-github-fill"></i></a>
                <a href="https://www.linkedin.com/in/isola-pelumi-84661821a/"><i className="ri-linkedin-box-fill"></i></a>
            </div>
        </div>
        <div className="line"></div>
        <div className="line-2"></div>
        <p style={{ marginBottom: '50px' }}>© {currentYear} Isola Pelumi</p>
      </div>
    </div>
  );
};

export default Contact;
