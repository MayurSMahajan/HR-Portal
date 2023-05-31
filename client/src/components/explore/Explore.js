import React, { useState } from "react";
import skillList from "../../mock_data/skillList";
import "./explore.css";
import mockExploreCandidateList from "../../mock_data/mockExploreCandidateList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import ExploreCandidatesCard from "./ExploreCandidatesCard";

const Explore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const postingsList = useSelector((state) => state.postings.postingsList);

  return (
    <div className="explore-body">
      <div className="explore-header">
        <p className="explore-title">Find your Ideal Candidate</p>
        <p className="explore-subtitle">
          Select the skills you want, the experience level you are looking for,
          and we will help you find the perfect potential employee
        </p>
      </div>
      <div className="explore-candidate-input-container">
        <div className="skills-input-container">
          <div className="skill-input-label-container">
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
              <p></p>
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
      </div>
      <div className="explore-candidate-action-parent">
      <div className="explore-candidate-action-container">
          <p>Search </p>
          <SearchIcon />
        </div>
      </div>
      <div className="explore-candidate-listview-container">
        {mockExploreCandidateList.map((item) => (
          <ExploreCandidatesCard
            key={item.id}
            {...item}
            postingsList={postingsList}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
