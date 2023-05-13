import React, { useState } from "react";
import "./home.css";
import JobPostingsContent from "./JobPostingsContent";

const Home = () => {
  const [activeFlag, setActiveFlag] = useState();

  const handleNavClick = (val) => {
    setActiveFlag(val);
  };

  return (
    <div className="home-container">
      <div className="job-postings-container">
        <div className="job-postings-header-section">
          <h2 className="job-postings-heading">Your Job Postings</h2>
          <p className="job-postings-view-all">All Job Postings</p>
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
