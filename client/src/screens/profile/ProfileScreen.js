import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import goldBadgeIcon from "../../assets/icons/gold_badge.png";
import mockBadgesList from "../../mock_data/mockBadgesList";
import mockPreferenceTileList from "../../mock_data/mockPreferenceTileList";
import mockEducationList from "../../mock_data/mockEducationList";
import mockExperienceList from "../../mock_data/mockExperienceList";
import defaultCompanyImg from "../../assets/companyimg.png";
import profileImg from "../../assets/femaleprofile.png";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../components/utils/util";
import axios from "axios";
import { UserContext } from "../../context";
import Loading from "../../components/utils/Loader/Loading";

const ProfileScreen = () => {
  const { user, Token } = useContext(UserContext)
  const navigate = useNavigate();
  const { id } = useParams()
  const [profileDetail, setprofileDetail] = useState()
  const [isLoading, setLoading] = useState(false)
  const navigateBack = () => {
    navigate(-1);
  }



  useEffect(() => {
    const getProfileDetail = () => {
      setLoading(true)
      const config = {
        Headers: { "x-access-token": Token }
      }
      axios.post(`${BASE_URL}/api/profile/userdetailsbyid`, { userId: id }, config)
        .then((res) => {
          setprofileDetail(res.data.data)
          console.log(res.data)
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err.message)
        })
    }

    getProfileDetail()
  }, [])

  return (
    <>
      {isLoading ?
        <Loading /> :
        <div className="profile-container">
          <div className="profile-container-header">
            <div className="profile-container-header-title">
              <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={navigateBack} />
              <p className="profile-heading">Profile</p>
            </div>
            {/* <div className="profile-container-header-action">
          <EditIcon sx={{ cursor: "pointer" }} />
        </div> */}
          </div>
          <div className="profile-container-section-1">
            <div className="personal-profile-container">
              <img className="profile-picture" src={profileImg} alt="profile-pic" />
              <p className="profile-name">{profileDetail?.username}</p>
              <p className="profile-bio">
                I am an enthusiastic developer. I treat my work with utmost
                devotion. I am always looking to learn new things and improve my
                skills.
              </p>
            </div>
            <div className="preferences-container">
              <div className="preferences-header">
                <p className="preferences-heading">Preferences</p>
              </div>
              <div className="preference-listview">
                {mockPreferenceTileList.map((item) => (
                  <PreferenceTile {...item} />
                ))}
              </div>
            </div>
          </div>

          <div className="profile-container-section-2">
            <div className="profile-badges-container">
              <p className="profile-labels">Badges</p>
              <div className="profile-badges-listview-container">
                <div className="profile-badges-listview">
                  {!profileDetail?.badge_list ||

                    profileDetail?.badge_list.length === 0 ? <div> No badges Assigned</div>
                    :
                    profileDetail?.badge_list.map((item, index) => (
                      <BadgesCertificate item={item} index={index} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          {profileDetail?.company_name ?
            <div className="profile-experience-container">
              <p className="profile-labels">Experience</p>
              <div className="profile-education-listview">
                <ExperienceCard {...profileDetail} />
                {/* {mockExperienceList.map((item) => (
          ))} */}
              </div>
            </div> : ""}
          {/* <div className="profile-education-container">
        <p className="profile-labels">Education</p>
        <div className="profile-education-listview">
          {mockEducationList.map((item) => (
            <EducationCard {...item} />
          ))}
        </div>
      </div> */}
        </div>
      }
    </>

  );
};

const BadgesCertificate = ({ item, index }) => {
  return (
    <div className="badges-certificate">
      <img src={goldBadgeIcon} alt="badge" className="badge-certificate-icon" />
      <div>
        <p className="badge-certificate-title">{item}</p>
        {/* <p className="badge-certificate-subtitle">Issued on: {mockBadgesList[index]?.date}</p> */}
      </div>
    </div>
  );
};

const PreferenceTile = ({ label, value }) => {
  return (
    <div className="preference-tile-card">
      {/* {mockPreferenceTileList.map((item) => (
            ))} */}
      <p className="preference-tile-label">{label}</p>
      <p className="preference-tile-value">{value}</p>
    </div>
  );
};

const EducationCard = ({
  course,
  university,
  startdate,
  enddate,
  description,
}) => {
  return (
    <div className="education-card">
      <p className="education-heading">{course}</p>
      <p className="education-card-university">{university}</p>
      <div className="education-card-date-container">
        <p className="education-card-date">{startdate}</p>
        <p className="education-card-date">{enddate}</p>
      </div>
      <p className="education-card-description">{description}</p>
    </div>
  );
};

const ExperienceCard = ({
  job_title,
  company_name,
  start_date,
  end_date,
  job_description,
}) => {
  return (
    <div className="experience-card">
      <div className="experience-card-company-img-container">
        <img
          className="experience-card-company-img"
          src={defaultCompanyImg}
          alt="company"
        />
      </div>
      <div className="experience-card-text-container">
        <p className="education-heading">{job_title}</p>
        <p className="education-card-university">{company_name}</p>
        <div className="education-card-date-container">
          <p className="education-card-date">{start_date} </p>~
          <p className="education-card-date"> {end_date}</p>
        </div>
        <p className="education-card-description">{job_description}</p>
      </div>
    </div>
  );
};

export default ProfileScreen;
