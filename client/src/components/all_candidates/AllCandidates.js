import React from "react";
import "./all_candidates.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CandidatesCard from "../posting/CandidatesCard";
import { useNavigate } from "react-router-dom";

const AllCandidates = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    }

    const loadCandidateCards = () => {
        return <CandidateCardContainer/>
    }

  return (
    <div className="all-candidate-container">
      <div className="all-candidate-header">
        <ArrowBackIcon onClick={navigateBack} sx={{cursor:"pointer"}}/>
        <p className="all-candidate-heading">Top Candidates with Android, Java and Spring</p>
      </div>
      <div className="all-candidate-body">
        {loadCandidateCards()}
      </div>
    </div>
  );
};

const CandidateCardContainer = () => {
    return (
        <div className="candidate-card-container">
            <CandidatesCard />
            <CandidatesCard />
            <CandidatesCard />
            <CandidatesCard />
        </div>
    );
}

export default AllCandidates;
