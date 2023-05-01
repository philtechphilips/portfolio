import image from "../assets/image.jpeg";

const About = () => {
  return (
    <>
      <div className="hero-container">
        <div className="left">
          <p className="btn">About</p>
          <p className="motto">My Profile.</p>
          <p className="hero-body">Welcome to my profile page!</p>
          <a href="mailto:pelumiisola87@gmail.com" className="hero-button">
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/17Vcqz6UdtPdC-MqxNXmAg5oxsG72Q-Hg/view?usp=sharing"
            className="hero-button"
            style={{
              marginLeft: "10px",
              backgroundColor: "#f2f2f2",
              color: "#111111",
            }}
          >
            Read Resume
          </a>
        </div>

        <div>
          <img className="my-image" src={image} />
        </div>
      </div>

      <div className="container" style={{ marginBottom: "60px", flexDirection: 'column', alignItems: 'flex-start', fontWeight: '500', lineHeight: '30px' }}>
        <p style={{ fontSize: '18px' }}>
          I am a full-stack web developer currently based in Nigeria, ready to
          offer my services to clients all around the world.
        </p>
        <p style={{ marginTop: '20px' }}>
          I am a full stack developer with a proven track record of delivering
          high-quality web applications. I have extensive experience working on
          real-world projects, utilizing a range of skills and technologies
          including HTML, CSS, Bootstrap, JavaScript, PHP, Laravel, ReactJS,
          NodeJS, and React Native. I am passionate about creating user-friendly
          and efficient web applications that meet the unique needs of each
          client. I have a keen eye for detail, a strong sense of design, and a
          deep understanding of the latest web development trends and
          technologies. I take pride in my ability to work collaboratively with
          clients and team members, ensuring that each project is delivered on
          time, within budget, and to the highest standards. Whether you are
          looking for a custom web application, a mobile app, or a complete
          website redesign, I have the skills and expertise to help bring your
          vision to life. I am based in Nigeria, but I have worked with clients
          from around the world. I am always eager to take on new challenges and
          opportunities, so if you&apos;re looking for a talented and experienced
          full stack developer, please don&apos;t hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default About;
