import './Work.css'
const Work = () => {
  return (
    <div className="work-container">
      <div className="">
        <p className="btn">Projects</p>
        <p className="heading">Fullstack Projects.</p>
        <p className="work-body">
          Check out my portfolio of full-stack web development projects for a
          glimpse into my coding process, problem-solving skills, and attention
          to detail.
        </p>

        <div className="projects-container">
          <a href="/#">
            <p className="project-heading">Learning Management System</p>
            <p className="project-body">
              Kindly explore the learning management system built for the word
              of his power bible college using HTML, CSS, BootStrap, PHP/Laravel
            </p>
            <img
              className="project-image"
              src="https://www.templateshub.net/uploads/1537592003plusthumb.jpg"
            ></img>
          </a>
        </div>

        <div className="projects-container">
          <a href="/#">
            <p className="project-heading">Learning Management System</p>
            <p className="project-body">
              Kindly explore the learning management system built for the word
              of his power bible college using HTML, CSS, BootStrap, PHP/Laravel
            </p>
            <img
              className="project-image"
              src="https://www.templateshub.net/uploads/1537592003plusthumb.jpg"
            ></img>
          </a>
        </div>

        <div className="projects-container">
          <a href="/#">
            <p className="project-heading">Learning Management System</p>
            <p className="project-body">
              Kindly explore the learning management system built for the word
              of his power bible college using HTML, CSS, BootStrap, PHP/Laravel
            </p>
            <img
              className="project-image"
              src="https://www.templateshub.net/uploads/1537592003plusthumb.jpg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work