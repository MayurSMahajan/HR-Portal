import React from "react";
import MetadataCardContainer from "./MetadataCardContainer";
import DescriptionCard from "./DescriptionCard";
import mockJobDescriptionsList from "../../mock_data/mockJobDescriptionsList";

const PostingDetailCard = ({id, title, date, budget}) => {
  const mockDescription= mockJobDescriptionsList[0].job_description;
  const mockResponsibility = mockJobDescriptionsList[0].job_responsibilities;
  const mockPerks = mockJobDescriptionsList[0].job_perks;

  return (
    <div className="posting_card">
      <h3 className="card_heading">{title}</h3>
      <MetadataCardContainer/>
      <div className="job_description_section">
        <DescriptionCard label="Job Description" value={mockDescription} />
        <DescriptionCard label="Job Responsibilities" value={mockResponsibility} />
        <DescriptionCard label="Job Perks" value={mockPerks} />
      </div>
    </div>
  );
};

export default PostingDetailCard;
