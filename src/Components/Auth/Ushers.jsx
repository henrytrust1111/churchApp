import React from "react";
import { Navigate, Outlet } from "react-router";

const Ushers = () => {
  const users = JSON.parse(localStorage.getItem("userData"));
  console.log(users);
  const email = localStorage.getItem("email");
  console.log(email);
  const password = localStorage.getItem("password");
  console.log(password);
  const isMember =
    email &&
    password &&
    users.find((e) => e.email === email && e.password === password);
  console.log(isMember);
  const isUsher = isMember?.role === "Usher";
  console.log(isUsher);
  if (email && password && isUsher) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default Ushers;
