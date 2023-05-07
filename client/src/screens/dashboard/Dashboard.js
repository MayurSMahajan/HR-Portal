import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    return navigate("/home");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="components"></div>
    </div>
  );
};

export default Dashboard;
