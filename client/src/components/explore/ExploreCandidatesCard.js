import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import goldBadgeIcon from "../../assets/icons/gold_badge.png"
import ShortlistCandidateDialog from "./ShortlistDialog"

const ExploreCandidatesCard = ({
    id,
    name,
    experience,
    job,
    badges,
    postingsList,
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
        <p>{name}</p>
        <div className="candidate-info-container">
          <p className="candidate-card-key">Experience</p>
          <p className="candidate-card-value">{experience}</p>
        </div>
        <div className="candidate-info-container">
          <p className="candidate-card-key">Current Job</p>
          <p className="candidate-card-value">{job}</p>
        </div>
        <div>
          <p className="candidate-card-key">Badges</p>
          <div className="candidate-info-container">
            <div className="badges-container">
              {badges.map((item) => (
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
            postingsList={postingsList}
            closeMethod={closeDialogBox}
            id={id}
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