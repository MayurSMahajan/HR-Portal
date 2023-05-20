import React from "react";
import "./posting.css";
import PostingDetailCard from "./PostingDetailCard";
import mockActiveJobsList from "../../mock_data/mockActiveJobsList";
import CandidatesCard from "./CandidatesCard";

const PostingDetail = () => {
  return (
      <div className="postings_container">
        <h3 className="postings-heading">Postings Detail</h3>
        <PostingDetailCard {...(mockActiveJobsList[0])} />
        <div className="candidates-section">
          <h3 className="postings-heading">Interviewed Candidates</h3>
          <div className="candidates-container">
            <CandidatesCard/>
          </div>
        </div>
      </div>
  );
};

export default PostingDetail;
