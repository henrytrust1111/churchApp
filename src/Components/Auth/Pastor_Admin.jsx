import React from "react";
import { Navigate, Outlet } from "react-router";

const Pastor_Admin = () => {
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
  const isPastor = isMember?.role === "Pastor";
  console.log(isPastor);
  const isAdmin = isMember?.role === "Admin";
  console.log(isAdmin);

  if ((email && password && isPastor) || (email && password && isAdmin)) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default Pastor_Admin;
