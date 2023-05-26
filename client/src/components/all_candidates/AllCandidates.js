import React from "react";
import HorizontalCandidateCard from "./HorizontalCandidateCard";
import './all_candidates.css';

const AllCandidates = () => {
    return (
        <div className="all-candidate-container">
            <div className="all-candidate-heading">
                <h3>Top Candidates</h3>
            </div>
            <div className="all-candidate-body">
                <div className="all-candidate-card-listview">
                    <HorizontalCandidateCard/>
                </div>
            </div>
        </div>
    );
}

export default AllCandidates;