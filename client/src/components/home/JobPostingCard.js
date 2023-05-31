import React from "react";
import "./home.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/postings/postingsSlice";
import { useNavigate } from "react-router-dom";


const JobPostingsCard = ({ id, title, date, skills, budget, applicants, shortlisted, interviewed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let exactDate = date.slice(0, 10)

  const navigateToPostingDetail = () => {
    navigate(`/posting/${id}`);
  }

  const removeThisItem = (e, id) => {
    e.stopPropagation();
    dispatch(removeItem(id));
  }

  return (
    <div className="job-postings-card-container" onClick={navigateToPostingDetail}>
      <div className="job-postings-card-header">
        <h3>{title}</h3>
        <div className="job-postings-card-actions-container">
          <div className="job-postings-card-action-item">
            <EditOutlinedIcon />
          </div>
          <div className="job-postings-card-action-item">
            <DeleteOutlineOutlinedIcon onClick={(e) => removeThisItem(e, id)} />
          </div>
        </div>
      </div>
      <div className="job-postings-card-body">
        <div className="job-postings-stats-container">
          <div className="job-postings-stats-card">
            <AttachMoneyOutlinedIcon style={{ fontSize: 40 }} />
            <div className="job-postings-stats-text">
              <p className="job-postings-stats-text-heading">Budget</p>
              <p className="job-postings-stats-text-subtitle">
                {budget} LPA
              </p>
            </div>
          </div>
          <div className="job-postings-stats-card">
            <CalendarMonthOutlinedIcon style={{ fontSize: 40 }} />
            <div className="job-postings-stats-text">
              <p className="job-postings-stats-text-heading">Date</p>
              <p className="job-postings-stats-text-subtitle">
                {exactDate}
              </p>
            </div>
          </div>
          <div className="job-postings-stats-card">
            <WorkspacePremiumIcon style={{ fontSize: 40 }} />
            <div className="job-postings-stats-text">
              <p className="job-postings-stats-text-heading">Skills</p>
              <p className="job-postings-stats-text-subtitle">
                {
                  skills.map((skill) => <span>{skill}</span>)
                }
              </p>
            </div>
          </div>
          
        </div>        
      </div>
    </div>
  );
};

export default JobPostingsCard;
