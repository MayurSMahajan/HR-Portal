import React from "react";
import "./posting.css";
import PostingDetailCard from "./PostingDetailCard";
import mockActiveJobsList from "../../mock_data/mockActiveJobsList";
import CandidatesCard from "./CandidatesCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const PostingDetail = () => {
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
          <ViewAllCard />
        </div>
        <div className="candidates-type-container">
          <h3 className="postings-heading">Shortlisted Candidates</h3>
        </div>
        <div className="candidates-container">
          <CandidatesCard />
          <CandidatesCard />
          <CandidatesCard />
          <ViewAllCard />
        </div>
        <div className="secondary-btn-container">
          <span className="secondary-btn">View More Candidates</span>
        </div>
      </div>
    </div>
  );
};

const ViewAllCard = () => {
  return (
    <div className="view-all-card">
      <div className="view-all-btn">
        <p className="view-all-text"> View All</p>
        <ArrowOutwardIcon className="view-all-icon" />
      </div>
    </div>
  );
};

export default PostingDetail;
