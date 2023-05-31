import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { BASE_URL } from "../utils/util";
import { JobContext, UserContext } from "../../context";
import axios from "axios";

const ShortlistCandidateDialog = ({ closeMethod, id }) => {
  const { user, Token } = useContext(UserContext)
  const { HRJobs, setHRJobs } = useContext(JobContext)
  console.log("HRJobs", HRJobs)

  const config = {
    headers: { 'x-access-token': Token }
  }

  const shortlistCandidateMethod = (id, posting) => {


    const currentdate = new Date(Date.now())

    const dataObj = {
      user_id: id, hr_id: user.id, job_id: posting?.id, shortlist_date: currentdate
    }
    console.log(dataObj)
    axios.post(`${BASE_URL}/api/hr/shortlist`, dataObj, config)
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.log(err.message))
      .finally(() => closeMethod())
  };

  useEffect(() => {
    const getJobs = () => {

      axios.post(`${BASE_URL}/api/hr/joblistedbyhr`, { hr_id: user.id }, config)
        .then((res) => {
          console.log(res.data)
          setHRJobs(res.data.jobs)

        })
        .catch(err => console.log(err.message))
    }

    getJobs()
  }, [])


  return (
    <div className="explore-shortlist-dialog-container">
      <div className="explore-shortlist-dialog">
        <div className="explore-shortlist-close-icon">
          <CloseIcon
            onClick={(event) => {
              event.stopPropagation();
              closeMethod();
            }}
          />
        </div>
        <p className="explore-shortlist-dialog-title">Select the Job Posting</p>
        <p className="explore-shortlist-dialog-subtitle">
          Your shortlisted candidate will be shortlisted for the job posting you
          select now.
        </p>
        <div className="explore-postings-listview">
          {HRJobs && HRJobs?.map((posting) => (
            <p
              className="explore-postings-tile"
              onClick={(event) => {
                event.stopPropagation();
                shortlistCandidateMethod(id, posting);
              }}
            >
              {posting.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortlistCandidateDialog;
