import React from "react";
import goldBadgeIcon from '../../assets/icons/gold_badge.png';
import { useNavigate } from "react-router-dom";

const CandidatesCard = () => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  }

  const badges = ["Java", "Flutter"];

  return (
    <div className="candidates-card" onClick={navigateToProfile}>
      <p>Mayur Mahajan</p>
      <div className="candidate-info-container">
        <p className="candidate-card-key">Experience</p>
        <p className="candidate-card-value">2 Years</p>
      </div>
      <div className="candidate-info-container">
        <p className="candidate-card-key">Current Job</p>
        <p className="candidate-card-value">SDE - 2 Mozilla</p>
      </div>
      <div>
      <p className="candidate-card-key">Badges</p>
      <div className="candidate-info-container">
        <div className="badges-container">
          {badges.map((item) => (
            <BadgeCard image={goldBadgeIcon} name={item}/>
          ))}
        </div>
      </div>
      </div>
      <div className="candidate-card-action">
        <p className="candidate-secondary-btn">Reject</p>
        <p className="candidate-primary-btn">Interview</p>
      </div>
    </div>
  );
};

const BadgeCard = ({image, name}) => { 
  return (
    <div className="badge-card">
      <img src={image} alt="badge" className="badge-icon"/>
      <p>{name}</p>
    </div>
  );
}

export default CandidatesCard;
