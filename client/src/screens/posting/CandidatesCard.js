import React from "react";
import goldBadgeIcon from '../../assets/icons/gold_badge.png';
import { useNavigate } from "react-router-dom";

const CandidatesCard = ({ val }) => {
  const navigate = useNavigate();
  console.log(val)
  const navigateToProfile = () => {
    navigate(`/profile/${val.id}`);
  }

  const badges = ["Java", "Flutter"];

  return (
    <div className="candidates-card" onClick={navigateToProfile}>
      <p>{val?.username}</p>
      <div className="candidate-info-container">
        {/* <p className="candidate-card-key">Experience</p>
        <p className="candidate-card-value">{val} 2 Years</p> */}
      </div>
      <div className="candidate-info-container">
        <p className="candidate-card-key">Current Job</p>
        <p className="candidate-card-value"> {val?.job_title}</p>
      </div>
      <div>
        <p className="candidate-card-key">Badges</p>
        <div className="candidate-info-container">
          <div className="badges-container">
            {val?.badge_list?.map((item) => (
              <BadgeCard image={goldBadgeIcon} name={item} />
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

const BadgeCard = ({ image, name }) => {
  return (
    <div className="badge-card">
      <img src={image} alt="badge" className="badge-icon" />
      <p>{name}</p>
    </div>
  );
}

export default CandidatesCard;
