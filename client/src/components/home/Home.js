import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import JobPostingsContent from "./JobPostingsContent";
import axios from "axios";
import { BASE_URL } from "../utils/util";
import { JobContext, UserContext } from "../../context";

const Home = () => {
  const navigate = useNavigate();
  const [activeFlag, setActiveFlag] = useState(true);

  const { user, Token } = useContext(UserContext)
  const { jobs, setjobs, } = useContext(JobContext)

  const handleNavClick = (val) => {
    setActiveFlag(val);
  };

  const navigateToNewPosting = () => {
    navigate("/posting/add");
  }

  useEffect(() => {
    const getAllJobs = () => {
      const config = {
        headers: { 'x-access-token': Token }
      }
      axios.get(`${BASE_URL}/api/hr/joblisted`, config)
        .then((res) => {
          console.log(res.data)
          setjobs(res.data.jobs)
        })
        .catch((err) => console.log(err.message))
    }
    getAllJobs()
  }, [])

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
