import { useEffect } from "react";
import { createContext, useState } from "react";

export const JobContext = createContext(null)

export const JobDataProvider = ({ children }) => {
    const [jobs, setjobs] = useState()



    return (
        <JobContext.Provider value={{
            jobs, setjobs,
        }}>
            {children}
        </JobContext.Provider>
    )
}

