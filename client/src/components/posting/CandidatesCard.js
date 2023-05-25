import React from "react";
import goldBadgeIcon from '../../assets/icons/gold_badge.png';
import silverBadgeIcon from '../../assets/icons/silver_badge.png';
import bronzeBadgeIcon from '../../assets/icons/bronze_badge.png';

const CandidatesCard = () => {
  const badges = {
    "gold": ["Java"],
    "silver": ["Android"],
    "bronze": []
  }

  return (
    <div className="candidates-card">
      <p>Mayur Mahajan</p>
      <div className="candidate-info-container">
        <p className="candidate-card-key">Experience</p>
        <p className="candidate-card-value">2 Years</p>
      </div>
      <div className="candidate-info-container">
        <p className="candidate-card-key">Current Job</p>
        <p className="candidate-card-value">SDE - 2 Mozilla</p>
      </div>
      <p className="candidate-card-key">Badges</p>
      <div className="candidate-info-container">
        <div className="badges-container">
          {badges.gold.map((item) => (
            <BadgeCard image={goldBadgeIcon} name={item}/>
          ))}
        </div>
        <div className="badges-container">
          {badges.silver.map((item) => (
            <BadgeCard image={silverBadgeIcon} name={item}/>
          ))}
        </div>
        <div className="badges-container">
          {badges.bronze.map((item) => (
            <BadgeCard image={bronzeBadgeIcon} name={item}/>
          ))}
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
