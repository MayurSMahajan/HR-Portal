import React, { useState } from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import JobPostingsContent from "./JobPostingsContent";

const Home = () => {
  const navigate = useNavigate();
  const [activeFlag, setActiveFlag] = useState();

  const handleNavClick = (val) => {
    setActiveFlag(val);
  };

  const navigateToNewPosting = () => {
    navigate("/posting/add");
  }

  return (
    <div className="home-container">
      <div className="job-postings-container">
        <div className="job-postings-header-section">
          <h2 className="job-postings-heading">Your Job Postings</h2>
          <p className="job-postings-add-posting" onClick={navigateToNewPosting}>New Posting</p>
        </div> 
        <div className="job-postings-navigation">
          <p
            className={
              activeFlag
                ? "job-postings-nav-links selected"
                : "job-postings-nav-links"
            }
            onClick={() => handleNavClick(true)}
          >
            Active
          </p>
          <p
            className={
              activeFlag
                ? "job-postings-nav-links"
                : "job-postings-nav-links selected"
            }
            onClick={() => handleNavClick(false)}
          >
            Recently Filled
          </p>
        </div>
        <div className="job-postings-content">
          <JobPostingsContent jobPostingsFlag={activeFlag} />
        </div>
      </div>
    </div>
  );
};

export default Home;
