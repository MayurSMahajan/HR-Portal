import React, { useContext, useEffect } from "react";
import "./posting.css";
import PostingDetailCard from "./PostingDetailCard";
import mockActiveJobsList from "../../mock_data/mockActiveJobsList";
import CandidatesCard from "./CandidatesCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from "react-router-dom";
import { JobContext, UserContext } from "../../context";
import { BASE_URL } from "../../components/utils/util";
import axios from "axios";

const PostingDetail = () => {

  const navigate = useNavigate();
  const { jobs, jobDetail, setjobDetail, ShortlistedCandidates, setShortlistedCandidates } = useContext(JobContext)
  const { id } = useParams()
  const { user, Token } = useContext(UserContext)

  useEffect(() => {
    const config = {
      headers: { 'x-access-token': Token }
    }
    const getJobDetail = () => {
      axios.get(`${BASE_URL}/api/hr/getSingleJobByID/${id}`, config)
        .then((res) => {
          console.log(res.data.job)
          setjobDetail(res.data.job[0])
        })
        .catch(err => console.log(err.message))
    }
    const getShortlistedCandidates = () => {
      axios.post(`${BASE_URL}/api/hr/getshortlistedusersbyid`, { job_id: id }, config)
        .then((res) => {
          console.log(res.data)
          setShortlistedCandidates(res.data.data)
        })
        .catch(err => console.log(err.message))
    }

    getShortlistedCandidates()
    getJobDetail()

  }, [])

  const navigateToAllCandidates = () => {
    navigate('/posting/all');
  }

  const navigateBack = () => {
    navigate(-1);
  }



  return (
    <div className="postings-page">
      <div className="postings-heading-container">
        <ArrowBackIcon onClick={navigateBack} sx={{ cursor: "pointer" }} />
        <h3 className="postings-heading">Postings Detail</h3>
      </div>

      <div className="postings_container">
        <PostingDetailCard job={jobDetail} />
        <div className="candidates-section">
          <div className="candidates-type-container">
            <h3 className="postings-heading">Shortlisted Candidates</h3>
          </div>
          <div className="candidates-container">
            {
              ShortlistedCandidates && ShortlistedCandidates?.map((val, key) => (
                <>
                  <CandidatesCard val={val} />
                </>
              ))
            }
            <ViewAllCard navigateToAllCandidates={navigateToAllCandidates} />
          </div>
          <div className="candidates-type-container">
            <h3 className="postings-heading">Interviewed Candidates</h3>

          </div>
          <div className="candidates-container">
            <CandidatesCard />
            <CandidatesCard />
            <CandidatesCard />
            <ViewAllCard navigateToAllCandidates={navigateToAllCandidates} />
          </div>
          <div className="secondary-btn-container" onClick={navigateToAllCandidates}>
            <span className="secondary-btn">View More Candidates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewAllCard = ({ navigateToAllCandidates }) => {

  return (
    <div className="view-all-card" onClick={navigateToAllCandidates}>
      <div className="view-all-btn">
        <p className="view-all-text"> View All</p>
        <ArrowOutwardIcon className="view-all-icon" />
      </div>
    </div>
  );
};

export default PostingDetail;
