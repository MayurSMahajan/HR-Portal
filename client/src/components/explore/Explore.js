import React, { useContext, useEffect, useState } from "react";
import skillList from "../../mock_data/skillList";
import "./explore.css";
import mockExploreCandidateList from "../../mock_data/mockExploreCandidateList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import ExploreCandidatesCard from "./ExploreCandidatesCard";
import { BASE_URL } from "../utils/util";
import axios from 'axios'
import { JobContext, UserContext } from "../../context";
import Loading from "../utils/Loader/Loading";

const Explore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [Filtered, setFiltered] = useState();
  const { user, Token } = useContext(UserContext)
  console.log(user)
  const { HRJobs, setHRJobs, AllCandidate, setAllCandidate, FilteredCandidate, setFilteredCandidate, exploreLoading, setexploreLoading } = useContext(JobContext)

  const config = {
    headers: { 'x-access-token': Token }
  }

  const getAllCandidate = () => {

    axios.get(`${BASE_URL}/api/profile/userdetails`, config)
      .then((res) => {
        console.log(res.data)
        setAllCandidate(res.data.data)
      })
      .catch((err) => console.log(err.message))
      .finally(setexploreLoading(false))
  }
  useEffect(() => {


    const getJobs = () => {

      axios.post(`${BASE_URL}/api/hr/joblistedbyhr`, { hr_id: user?.id }, config)
        .then((res) => {
          console.log(res.data)
          setHRJobs(res.data.jobs)
        })
        .catch(err => console.log(err.message))
    }
    getJobs()
    getAllCandidate()
  }, [])

  useEffect(() => {
    if (selectedSkills.length === 0) {
      getAllCandidate()
      console.log(AllCandidate)
      setFiltered(AllCandidate)
    }
  }, [selectedSkills])


  const handelFilter = () => {

    setexploreLoading(true)

    axios.post(`${BASE_URL}/api/hr/filtercandidates`, { skills: selectedSkills }, config)
      .then((res) => {
        console.log(res.data)
        setFilteredCandidate(res.data.data)
        setFiltered(res.data.data)
      })
      .catch(err => console.log(err.message))
      .finally(setexploreLoading(false))
    // const filteredWithAtleastOneMatching = AllCandidate.filter(user =>
    //   selectedSkills.some(searchString =>
    //     user.badge_list?.includes(searchString.toLowerCase())
    //   )
    // );
    // console.log(filteredWithAtleastOneMatching)
  }

  console.log(exploreLoading)
  return (
    <div className="explore-body">
      <div className="explore-header">
        <p className="explore-title">Find your Ideal Candidate</p>
        <p className="explore-subtitle">
          Select the skills you want, the experience level you are looking for,
          and we will help you find the perfect potential employee
        </p>
      </div>
      <div className="explore-candidate-input-container">
        <div className="skills-input-container">
          <div className="skill-input-label-container">
            <div className="dropdown">
              <div
                className="dropdown-btn-container"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p>Add Skills</p>
                {isOpen ? <CloseIcon /> : <ExpandMoreIcon />}
              </div>
              {isOpen && (
                <ul style={{ listStyleType: "none", padding: "0" }}>
                  {skillList.map((skill) => (
                    <li
                      sx={{ cursor: "pointer" }}
                      key={skill}
                      onClick={() => {
                        if (
                          !selectedSkills.includes(skill) &&
                          selectedSkills.length < 4
                        )
                          setSelectedSkills([...selectedSkills, skill]);
                        setIsOpen(false);
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="skills-listview-container">
            <div className="skills-listview">
              <p></p>
              {selectedSkills.map((skill, index) => (
                <div key={index} className="skill-box">
                  <p className="skill-title" style={{ marginRight: "4px" }}>
                    {skill}
                  </p>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedSkills(
                        selectedSkills.filter((item) => item !== skill)
                      );
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="explore-candidate-action-parent">
        <div className="explore-candidate-action-container" onClick={() => handelFilter()}>
          <p>Search </p>
          <SearchIcon />
        </div>
      </div>
      <div className="explore-candidate-listview-container">
        {exploreLoading ?
          <Loading />
          : Filtered?.length === 0 ?
            <div>No match found</div>
            :
            Filtered?.map((item, index) => (
              <ExploreCandidatesCard
                key={item.id}
                candidate={item}
              />
            ))}
      </div>
    </div>
  );
};

export default Explore;
