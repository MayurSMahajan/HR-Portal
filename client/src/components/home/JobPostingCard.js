import React from "react";
import "./home.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const JobPostingsCard = ({ jobPosting }) => {
  return (
    <div className="job-postings-card-container">
      <div className="job-postings-card-header">
        <h3>Senior Software Engineer</h3>
        <div className="job-postings-card-actions-container">
          <div className="job-postings-card-action-item">
            <EditOutlinedIcon />
          </div>
          <div className="job-postings-card-action-item">
            <DeleteOutlineOutlinedIcon />
          </div>
          <div className="job-postings-card-action-item">
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="job-postings-card-body">
        <div className="job-postings-stats-container">
          <div className="job-postings-stats-card">
            <CalendarMonthOutlinedIcon style={{ fontSize: 40 }} />
            <div className="job-postings-stats-text">
              <p className="job-postings-stats-text-heading">Date</p>
              <p className="job-postings-stats-text-subtitle">
                {jobPosting.date}
              </p>
            </div>
          </div>
          <div className="job-postings-stats-card">
            <AttachMoneyOutlinedIcon style={{ fontSize: 40 }} />
            <div className="job-postings-stats-text">
              <p className="job-postings-stats-text-heading">Budget</p>
              <p className="job-postings-stats-text-subtitle">
                {jobPosting.budget}
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="job-postings-metadata-container">
          <div className="job-postings-metadata-card">
            <p className="job-postings-metadata-text-heading">{jobPosting.applicants}</p>
            <p className="job-postings-metadata-text-subtitle">
              Applicants
            </p>
          </div>
          <div className="job-postings-metadata-card">
            <p className="job-postings-metadata-text-heading">{jobPosting.shortlisted}</p>
            <p className="job-postings-metadata-text-subtitle">
              Shortlisted
            </p>
          </div>
          <div className="job-postings-metadata-card">
            <p className="job-postings-metadata-text-heading">{jobPosting.interviewed}</p>
            <p className="job-postings-metadata-text-subtitle">
              Interviewed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingsCard;
