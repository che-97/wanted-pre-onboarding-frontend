import React from "react";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constants/api-config";

const AuthRoute = ({ component: Component, authpath: Authpath }) => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  return Authpath ? (
    token ? (
      <Navigate to="/todo" />
    ) : (
      Component
    )
  ) : token ? (
    Component
  ) : (
    <Navigate to="/signin" {...alert("로그인이 필요합니다.")}></Navigate>
  );
};

export default AuthRoute;
