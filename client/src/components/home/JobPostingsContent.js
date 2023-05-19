import React from "react";
import "./home.css";
import JobPostingsCard from "./JobPostingCard";
import { useSelector } from 'react-redux';

const JobPostingsContent = ({ jobPostingsFlag }) => {
    console.log(jobPostingsFlag);
    const postingsList = useSelector((state) => state.postings.postingsList)
  return (
    <div className="job-postings-content-container">
      {jobPostingsFlag ? (
        <div className="active-job-postings-container">
          
            {postingsList.map((item) => (
              <JobPostingsCard key={item.id} {...item} />
            ))}
          
        </div>
      ) : (
        <div className="recently-filled-job-postings-container">Recently Filled</div>
      )}
    </div>
  );
};

export default JobPostingsContent;
