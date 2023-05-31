import React from "react";
import goldBadgeIcon from '../../assets/icons/gold_badge.png';
import { useNavigate } from "react-router-dom";

const CandidatesCard = ({ val }) => {
  const navigate = useNavigate();
  console.log(val)
  const navigateToProfile = () => {
    navigate(`/profile/${val.id}`);
  }

  return (
    <div className="candidates-card" onClick={navigateToProfile}>
      <p className="candidate-card-value">{val?.username}</p>
      <div className="candidate-info-container">
        <p className="candidate-card-value">{val?.job_title}</p>
      </div>
      <div className="candidate-info-container">
        <p className="candidate-card-value">{val?.company_name}</p>
      </div>
      <div className="candidate-info-container">
        <p className="candidate-card-key"> {val?.email}</p>
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
