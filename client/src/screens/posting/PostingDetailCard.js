import React from "react";
import MetadataCardContainer from "./MetadataCardContainer";
import DescriptionCard from "./DescriptionCard";
import mockJobDescriptionsList from "../../mock_data/mockJobDescriptionsList";

const PostingDetailCard = ({ job }) => {
  console.log(job)
  const mockDescription = mockJobDescriptionsList[0].job_description;
  const mockResponsibility = mockJobDescriptionsList[0].job_responsibilities;
  const mockPerks = mockJobDescriptionsList[0].job_perks;

  return (
    <div className="posting_card">
      <h3 className="card_heading">{job.title}</h3>
      <MetadataCardContainer job={job} />
      <div className="job_description_section">
        <DescriptionCard label="Job Description" value={job.job_description} />
        <DescriptionCard label="Job Responsibilities" value={job.job_responsibilities} />
        <DescriptionCard label="Job Perks" value={job.job_perks} />
      </div>
    </div>
  );
};

export default PostingDetailCard;
