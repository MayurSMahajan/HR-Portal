import React from "react";
import "./posting.css";
import PostingDetailCard from "./PostingDetailCard";
import mockActiveJobsList from "../../mock_data/mockActiveJobsList";

const PostingDetail = () => {
  return (
      <div className="postings_container">
        <h3 className="postings-heading">Postings Detail</h3>
        <PostingDetailCard {...(mockActiveJobsList[0])} />
      </div>
  );
};

export default PostingDetail;
