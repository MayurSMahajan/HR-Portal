import React from "react";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const MetadataCardContainer = ({ job }) => {
  const skills = [
    "Android",
    "Java",
    "React"
  ];
  console.log("okok", job)

  return (
    <div className="metadata_cards_container">
      <div className="metadata_section">
        <div className="metadata_card">
          <CalendarMonthOutlinedIcon className="metadata_icon" />
          <span className="metadata_card_key">Created At  : </span>
          <span className="metadata_card_value">{job?.date.slice(0, 10)}</span>
        </div>
        <div className="metadata_card">
          <AccountBalanceWalletOutlinedIcon className="metadata_icon" />
          <span className="metadata_card_key">Budget  : </span>
          <span className="metadata_card_value">{job?.budget}</span>
        </div>
      </div>
      <div className="metadata_section">
        <TipsAndUpdatesOutlinedIcon className="metadata_icon" />
        <p>Skills : </p>
        {job && job?.skills?.map((item) => (
          <span className="skill_text">{item},</span>
        ))}
      </div>
    </div>
  );
};

export default MetadataCardContainer;
