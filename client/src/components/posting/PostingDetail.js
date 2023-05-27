import React from "react";
import "./posting.css";
import PostingDetailCard from "./PostingDetailCard";
import mockActiveJobsList from "../../mock_data/mockActiveJobsList";
import CandidatesCard from "./CandidatesCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

const PostingDetail = () => {

  const navigate = useNavigate();

  const navigateToAllCandidates = () => {
    console.log("Heya!")
    navigate('/posting/all');
  }

  return (
    <div className="postings_container">
      <h3 className="postings-heading">Postings Detail</h3>
      <PostingDetailCard {...mockActiveJobsList[0]} />
      <div className="candidates-section">
        <div className="candidates-type-container">
          <h3 className="postings-heading">Interviewed Candidates</h3>
        </div>
        <div className="candidates-container">
          <CandidatesCard />
          <CandidatesCard />
          <CandidatesCard />
          <ViewAllCard navigateToAllCandidates={navigateToAllCandidates}/>
        </div>
        <div className="candidates-type-container">
          <h3 className="postings-heading">Shortlisted Candidates</h3>
        </div>
        <div className="candidates-container">
          <CandidatesCard />
          <CandidatesCard />
          <CandidatesCard />
          <ViewAllCard navigateToAllCandidates={navigateToAllCandidates}/>
        </div>
        <div className="secondary-btn-container" onClick={navigateToAllCandidates}>
          <span className="secondary-btn">View More Candidates</span>
        </div>
      </div>
    </div>
  );
};

const ViewAllCard = ({navigateToAllCandidates}) => {
  
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
