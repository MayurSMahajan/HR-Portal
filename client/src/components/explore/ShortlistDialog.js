import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ShortlistCandidateDialog = ({ postingsList, closeMethod, id }) => {
  const shortlistCandidateMethod = (id, posting) => {
    console.log("id " + id + "posting " + posting.title);
    closeMethod();
  };

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
          {postingsList.map((posting) => (
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
