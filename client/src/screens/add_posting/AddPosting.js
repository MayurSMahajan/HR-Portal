import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./add_posting.css";
import skillList from "../../mock_data/skillList";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const AddPosting = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const navigateBack = () => {
    navigate(-1);
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
            />
          </div>
          <div className="skills-input-container">
            <div className="skill-input-label-container">
            <p className="single-line-input-label">
              What Skills are you looking for?
            </p>
            <div className="dropdown">
                <div className="dropdown-btn-container" onClick={() => setIsOpen(!isOpen)}>
                <p>
                  Add Skills
                </p>
                {isOpen ? <CloseIcon/> : <ExpandMoreIcon/>}
                </div>
                {isOpen && (
                  <ul style={{ listStyleType: "none", padding: "0" }}>
                    {skillList.map((skill) => (
                      <li
                        sx={{ cursor: "pointer" }}
                        key={skill}
                        onClick={() => {
                          if(!selectedSkills.includes(skill) && selectedSkills.length < 4)
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
                    <p className="skill-title">{skill}</p>
                    <CloseIcon onClick={()=>{
                      setSelectedSkills(selectedSkills.filter);
                    }}/>
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
              />
              <p className="sub-labels">High</p>
              <input
                type="text"
                className="multiple-input-field"
                placeholder="Eg: 24LPA"
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
            />
          </div>
          <div className="single-line-input-container">
            <p className="single-line-input-label">Job Roles</p>
            <textarea
              rows={6}
              cols={80}
              className="multi-line-input-field"
              placeholder="Eg: Set up and maintain CI/CD pipeline for the new web app"
            />
          </div>
          <div className="single-line-input-container">
            <p className="single-line-input-label">Job Perks</p>
            <textarea
              rows={6}
              cols={80}
              className="multi-line-input-field"
              placeholder="Eg: Unlimited Time Off"
            />
          </div>
          <div className="form-action-container">
            <p className="add-posting-submit-btn">Add Posting</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddPosting;
