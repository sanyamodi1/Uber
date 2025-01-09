import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserinContext";
import { useNavigate } from "react-router-dom";
const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/user-login");
    }
  },[token]);

  return <>{children}</>;
};

export default UserProtectedWrapper;
