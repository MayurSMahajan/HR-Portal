import React from "react";
import "./home.css";

const JobPostingsContent = ({ jobPostingsFlag }) => {
    console.log(jobPostingsFlag);
  return (
    <div className="job-postings-content-container">
      {jobPostingsFlag ? (
        <div className="active-job-postings-container">Active</div>
      ) : (
        <div className="recently-filled-job-postings-container">Recently Filled</div>
      )}
    </div>
  );
};

export default JobPostingsContent;
