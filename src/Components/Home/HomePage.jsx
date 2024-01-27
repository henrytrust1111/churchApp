import React from "react";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

const Home = () => {
  const users = JSON.parse(localStorage.getItem("userData"));
  console.log(users);
  const email = localStorage.getItem("email");
  console.log(email);
  const password = localStorage.getItem("password");
  console.log(password);
  const authUser = users?.find((e) =>
    e.email === email && e.password === password ? e.firstName : ""
  );
  const firstName = authUser?.firstName.toUpperCase();
  console.log(firstName);
  const nav = useNavigate();
  const payOffering = () => {
    nav("/payment");
  };
  const login = () => {
    nav("/login");
  };
  const logout = () => {
    nav("/login");
  };
  const attendance = () => {
    nav("/attendance");
  };
  const manageMembers = () => {
    nav("/manage");
  };
  const viewPayment = () => {
    nav("/viewPayment");
  };
  const viewAttendance = () => {
    nav("/viewAttendance");
  };

  return (
    <div className="homiz">
      <div className="homizWrap">
        <div className="header">
          <div className="headerWrap">
            <div className="left">
              {authUser && email && password ? (
                <div className="circle">{email.charAt().toUpperCase()}</div>
              ) : null}
              <div className="left1">
                <h1>OPEN</h1>
                <p>Haven Church</p>
              </div>
            </div>
            <div className="right">
              <div className="leftRight">
                <p>Home</p>

                <p onClick={payOffering}>Pay Offering/Tithe</p>

                <p onClick={attendance}>Service Attendees</p>
                <p onClick={viewPayment}>View Payment</p>
                <p onClick={manageMembers}> Manage Members</p>
                <p onClick={viewAttendance}>View Attendance</p>
              </div>
              <div className="burgerIcon"><FiAlignJustify /></div>
              <div className="rightRight">
                {users && email && password ? (
                  <button onClick={logout}>Logout</button>
                ) : (
                  <button onClick={login}>Login</button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="heroWrap">
            <div className="heroRight">
              <h1>
                Welcome {firstName ? firstName : " "} to OPEN HAVEN Church
              </h1>

              <div className="desc">
                <span>A place to worship</span>
              </div>
            </div>

            <div className="heroLeft">
              <img src="./church.avif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
