import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import goldBadgeIcon from "../../assets/icons/gold_badge.png"
import ShortlistCandidateDialog from "./ShortlistDialog"

const ExploreCandidatesCard = ({
  candidate,
}) => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialogBox = () => {
    setIsDialogOpen(false);
  };

  const handleShortlist = () => {
    setIsDialogOpen(true);
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="candidates-card" onClick={navigateToProfile}>
      <p className="candidate-card-value">{candidate?.username}</p>
      <div className="candidate-info-container">
        <p className="candidate-card-value">{candidate?.job_title}</p>
      </div>
      <div className="candidate-info-container">
        <p className="candidate-card-value">{candidate?.company_name}</p>
      </div>
      <div className="candidate-info-container">
        <p className="candidate-card-key"> {candidate?.email}</p>
      </div>
      <div>
        <p className="candidate-card-key">Badges</p>
        <div className="candidate-info-container">
          <div className="badges-container">
            {candidate?.badge_list?.map((item) => (
              <BadgeCard image={goldBadgeIcon} name={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="candidate-card-action">
        <p
          className="candidate-primary-btn"
          onClick={(event) => {
            event.stopPropagation();
            handleShortlist();
          }}
        >
          Shortlist
        </p>
      </div>
      {isDialogOpen ? (
        <ShortlistCandidateDialog
          closeMethod={closeDialogBox}
          id={candidate.id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

const BadgeCard = ({ image, name }) => {
  return (
    <div className="badge-card">
      <img src={image} alt="badge" className="badge-icon" />
      <p>{name}</p>
    </div>
  );
};


export default ExploreCandidatesCard;