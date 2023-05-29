import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, VerifyLoading } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      return navigate("/home");
    } else {
      return navigate('/login')
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="components"></div>
    </div>
  );
};

export default Dashboard;
