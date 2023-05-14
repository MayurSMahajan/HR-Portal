import React from "react";
import "./home.css";
import JobPostingsCard from "./JobPostingCard";

const mockActiveJobsList = [
  {
    "title": "Senior Software Fullstack Engineer",
    "date": "05/05/2023",
    "budget": "$50k - $75k",
    "applicants":"121",
    "shortlisted": "15",
    "interviewed":"6"
  }
];

const JobPostingsContent = ({ jobPostingsFlag }) => {
    console.log(jobPostingsFlag);
  return (
    <div className="job-postings-content-container">
      {jobPostingsFlag ? (
        <div className="active-job-postings-container">
          
            {mockActiveJobsList.map((item, index) => (
              <JobPostingsCard key={index} jobPosting={item} />
            ))}
          
        </div>
      ) : (
        <div className="recently-filled-job-postings-container">Recently Filled</div>
      )}
    </div>
  );
};

export default JobPostingsContent;
