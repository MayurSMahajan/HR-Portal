import { createContext, useState } from "react";

export const DashboardContext = createContext(null)

export const DashboardDataProvider = ({ children }) => {
    const [section, setSection] = useState(0)

    return (
        <DashboardContext.Provider value={{
            section, setSection
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

