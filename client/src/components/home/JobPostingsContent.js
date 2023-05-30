import React, { useContext } from "react";
import "./home.css";
import JobPostingsCard from "./JobPostingCard";
import { useSelector } from 'react-redux';
import { JobContext } from "../../context";

const JobPostingsContent = ({ jobPostingsFlag }) => {
  const postingsList = useSelector((state) => state.postings.postingsList)
  const { jobs, setjobs, } = useContext(JobContext)

  return (
    <div className="job-postings-content-container">
      {jobPostingsFlag ? (
        <div className="active-job-postings-container">

          {jobs && jobs?.map((item) => (
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
