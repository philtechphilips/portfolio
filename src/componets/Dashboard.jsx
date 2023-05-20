import { useState } from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import useAuthContext from "../context/AuthContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "../api/axios";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [project, setProJect] = useState("");
  const [link, setLink] = useState("");
  const [files, setFiles] = useState("");
  const [message, setMessgae] = useState("")
  const { isSubmitting, setIsSubmitting, errors, setErrors } = useAuthContext();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData();
    data.set("title", title);
    data.set("brief", brief);
    data.set("project", project);
    data.set("link", link);
    data.set("file", files[0]);

    try {
      const response = await axios.post("/post-project",  data, {headers});
      setIsSubmitting(false);
      setErrors([])
      setTitle("")
      setBrief("")
      setLink("")
      setProJect("")
      setFiles("")
      setMessgae("Project Added Sucessfully!")
    } catch (e) {
      setIsSubmitting(false);
    //   console.log(e);
      if(e.response.status === 422){
        setErrors(e.response.data.errors)
      }
      
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1 className="login-heading">Upload Project</h1>
          {message && (
            <div>
              <p style={{ color: 'green' }}>{message}</p>
            </div>
          )}
          <div className="login-input-container">
            <input
              type="text"
              className="login-input"
              placeholder="Project Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
             {errors.title && (
              <div className="flex">
                <span style={{ color: "red" }}>{errors.title[0]}</span>
              </div>
            )}
          </div>

          
          <div className="login-input-container">
            <input
              type="text"
              className="login-input"
              placeholder="Project URL"
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
             {errors.link && (
              <div className="flex">
                <span style={{ color: "red" }}>{errors.link[0]}</span>
              </div>
            )}
          </div>

          <div className="login-input-container">
            <input
              type="text"
              className="login-input"
              placeholder="Project Brief"
              value={brief}
              onChange={(event) => setBrief(event.target.value)}
            />
             {errors.brief && (
              <div className="flex">
                <span style={{ color: "red" }}>{errors.brief[0]}</span>
              </div>
            )}
          </div>

          <div className="login-input-container">
            <input
              type="file"
              className="login-input"
              onChange={(event) => setFiles(event.target.files)}
            />
             {errors.file && (
              <div className="flex">
                <span style={{ color: "red" }}>{errors.file[0]}</span>
              </div>
            )}
          </div>

          <div className="login-input-container">
            <ReactQuill
              value={project}
              modules={modules}
              onChange={setProJect}
              style={{ height: "200px", marginBottom: "80px", width: "500px" }}
            />
             {errors.project && (
              <div className="flex">
                <span style={{ color: "red" }}>{errors.project[0]}</span>
              </div>
            )}
          </div>

          <div className="login-input-container">
            <button
              disabled={isSubmitting}
              type="submit"
              className={`login-button ${isSubmitting && "submitting"}`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <Contact />
    </>
  );
};

export default Dashboard;
