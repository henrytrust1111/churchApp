import React from "react";
import { Navigate, Outlet } from "react-router";

const Accountants_Pastor = () => {
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
  const isAccountant = isMember?.role === "Accountant";
  console.log(isAccountant);

  if ((email && password && isPastor) || (email && password && isAccountant)) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default Accountants_Pastor;
