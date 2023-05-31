import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { BASE_URL } from "../components/utils/util";
import { UserContext } from "./userContext";

export const JobContext = createContext(null)

export const JobDataProvider = ({ children }) => {

    const [jobs, setjobs] = useState()
    const [jobDetail, setjobDetail] = useState()
    const [AllCandidate, setAllCandidate] = useState();
    const [ShortlistedCandidates, setShortlistedCandidates] = useState();
    const [HRJobs, setHRJobs] = useState()
    const [FilteredCandidate, setFilteredCandidate] = useState()
    const [exploreLoading, setexploreLoading] = useState(false)






    return (
        <JobContext.Provider value={{
            jobs, setjobs,
            AllCandidate, setAllCandidate,
            HRJobs, setHRJobs,
            jobDetail, setjobDetail,
            ShortlistedCandidates, setShortlistedCandidates,
            FilteredCandidate, setFilteredCandidate,
            exploreLoading, setexploreLoading
        }}>
            {children}
        </JobContext.Provider>
    )
}

