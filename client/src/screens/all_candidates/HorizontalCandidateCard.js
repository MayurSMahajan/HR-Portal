import React from "react";
import goldBadgeIcon from '../../assets/icons/gold_badge.png';
import silverBadgeIcon from '../../assets/icons/silver_badge.png';
import bronzeBadgeIcon from '../../assets/icons/bronze_badge.png';

const HorizontalCandidateCard = () => {

    const badges = {
        "gold": ["Java"],
        "silver": ["Android"],
        "bronze": []
      }

  return (
    <div className="hr-candidate-card-container">
      <div className="hr-candidate-bio">
        <p className="hr-candidate-value">Jack Dorsey</p>
      </div>
      <div className="hr-candidate-experience">
        <p className="hr-candidate-key">Experience</p>
        <p className="hr-candidate-value">2 years</p>
      </div>
      <div className="hr-candidate-job">
        <p className="hr-candidate-key">Current Job</p>
        <p className="hr-candidate-value">SDE Twitter</p>
      </div>
      <div className="hr-candidate-skills">
        <p className="hr-candidate-key skills-text">Skills</p>
        <div className="hr-candidate-skills-listview">
        <div className="badges-container">
          {badges.gold.map((item) => (
            <BadgeCard className="badge-card" image={goldBadgeIcon} name={item}/>
          ))}
        </div>
        <div className="badges-container">
          {badges.silver.map((item) => (
            <BadgeCard className="badge-card" image={silverBadgeIcon} name={item}/>
          ))}
        </div>
        <div className="badges-container">
          {badges.bronze.map((item) => (
            <BadgeCard className="badge-card" image={bronzeBadgeIcon} name={item}/>
          ))}
        </div>
      </div>
      </div>
      <div className="hr-candidate-actions">
        <p className="hr-candidate-secondary-btn">Reject</p>
        <p className="hr-candidate-primary-btn">Interview</p>
      </div>
    </div>
  );
};

const BadgeCard = ({image, name}) => { 
    return (
      <div className="badge-card">
        <img src={image} alt="badge" className="badge-icon"/>
        <p className="badge-text">{name}</p>
  
      </div>
    );
  }

export default HorizontalCandidateCard