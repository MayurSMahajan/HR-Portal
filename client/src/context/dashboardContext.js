import { useEffect } from "react";
import { createContext, useState } from "react";

export const DashboardContext = createContext(null)

export const DashboardDataProvider = ({ children }) => {
    const [section, setSection] = useState(0)
    const [innerWidth, setinnerWidth] = useState(window.innerWidth)
    const [sideBarToggel, setSideBarToggel] = useState(false)


    useEffect(() => {
        let sessionSection = sessionStorage.getItem('currentsection')
        if (sessionSection) setSection(Number(sessionSection))
        const handleResize = () => {
            setinnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <DashboardContext.Provider value={{
            section, setSection,
            innerWidth, setinnerWidth,
            sideBarToggel, setSideBarToggel,
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

