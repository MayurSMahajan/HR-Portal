import React, { useContext, useState } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import "./add_posting.css";
import skillList from "../../mock_data/skillList";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const AddPosting = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [budgetLow, setBudgetLow] = useState("");
  const [budgetHigh, setBudgetHigh] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRoles, setJobRoles] = useState("");
  const [jobPerks, setJobPerks] = useState("");
  const { user, Token } = useContext(UserContext)


  const navigateBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    const userId = user._id;
    const postData = {
      userId,
      jobTitle,
      skills: selectedSkills,
      experience,
      budget: {
        low: budgetLow,
        high: budgetHigh,
      },
      jobDescription,
      jobRoles,
      jobPerks,
    };

    console.log(postData);

    axios.post("https://example.com/api/submit", postData)
      .then(response => {
        // Handle success response
        console.log("Post request successful", response.data);
      })
      .catch(error => {
        // Handle error
        console.error("Post request error", error);
      });

    setSelectedSkills([]);
    setJobTitle("");
    setExperience("");
    setBudgetLow("");
    setBudgetHigh("");
    setJobDescription("");
    setJobRoles("");
    setJobPerks("");
  };

  return (
    <div className="add-posting-container">
      <div className="add-posting-header">
        <ArrowBackIcon onClick={navigateBack} sx={{ cursor: "pointer" }} />
        <p className="add-posting-heading">New Job Posting</p>
      </div>
      <div className="add-posting-form-container">
        <div className="add-posting-form">
          <div className="single-line-input-container">
            <p className="single-line-input-label">Enter Job Title</p>
            <input
              type="text"
              className="single-line-input-field"
              placeholder="Eg: Senior Software Engineer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="skills-input-container">
            <div className="skill-input-label-container">
              <p className="single-line-input-label">
                What Skills are you looking for?
              </p>
              <div className="dropdown">
                <div
                  className="dropdown-btn-container"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <p>Add Skills</p>
                  {isOpen ? <CloseIcon /> : <ExpandMoreIcon />}
                </div>
                {isOpen && (
                  <ul style={{ listStyleType: "none", padding: "0" }}>
                    {skillList.map((skill) => (
                      <li
                        sx={{ cursor: "pointer" }}
                        key={skill}
                        onClick={() => {
                          if (
                            !selectedSkills.includes(skill) &&
                            selectedSkills.length < 4
                          )
                            setSelectedSkills([...selectedSkills, skill]);
                          setIsOpen(false);
                        }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="skills-listview-container">
              <div className="skills-listview">
                {selectedSkills.map((skill, index) => (
                  <div key={index} className="skill-box">
                    <p className="skill-title" style={{ marginRight: "4px" }}>
                      {skill}
                    </p>
                    <CloseIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedSkills(
                          selectedSkills.filter((item) => item !== skill)
                        );
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="single-line-input-container">
            <p className="single-line-input-label">Enter Desired Experience</p>
            <input
              type="text"
              className="single-line-input-field"
              placeholder="Eg: 2 years"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div>
            <p className="single-line-input-label">
              Enter Desired Budget Range
            </p>
            <div className="multiple-input-container">
              <p className="sub-labels">Low</p>
              <input
                type="text"
                className="multiple-input-field"
                placeholder="Eg: 16LPA"
                value={budgetLow}
                onChange={(e) => setBudgetLow(e.target.value)}
              />
              <p className="sub-labels">High</p>
              <input
                type="text"
                className="multiple-input-field"
                placeholder="Eg: 24LPA"
                value={budgetHigh}
                onChange={(e) => setBudgetHigh(e.target.value)}
              />
            </div>
          </div>
          <div className="single-line-input-container">
            <p className="single-line-input-label">Job Description</p>
            <textarea
              rows={6}
              cols={80}
              className="multi-line-input-field"
              placeholder="Eg: The job is for a backend developer who is comfortable with CI/CD"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
          <div className="single-line-input-container">
            <p className="single-line-input-label">Job Roles</p>
            <textarea
              rows={6}
              cols={80}
              className="multi-line-input-field"
              placeholder="Eg: Set up and maintain CI/CD pipeline for the new web app"
              value={jobRoles}
              onChange={(e) => setJobRoles(e.target.value)}
            />
          </div>
          <div className="single-line-input-container">
            <p className="single-line-input-label">Job Perks</p>
            <textarea
              rows={6}
              cols={80}
              className="multi-line-input-field"
              placeholder="Eg: Unlimited Time Off"
              value={jobPerks}
              onChange={(e) => setJobPerks(e.target.value)}
            />
          </div>
          <div className="form-action-container">
            <p className="add-posting-submit-btn" onClick={handleSubmit}>
              Add Posting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosting;
