import React from "react";
import "./View.css";
// import { Link } from "react-router-dom";

const View_Attendance = () => {
  const List = [
    {
      Name: "obodo Emmanuella",
      images: "./tutor1.png",
      role: "Admininstrator",
      gender: "female",
    },
    {
      Name: "Itohan Mercy",
      images: "./tutor1.png",
      role: "Usher",
      gender: "female",
    },
    {
      Name: "Henry Trust",
      images: "./tutor1.png",
      role: "Member",
      gender: "male",
    },
  ];

  return (
    <div className="homiee">
      <div className="AdminWrap">
        <div className="adminRight">
          <div className="adminRightWrap">
            <h1>SERVICE ATTENDEES</h1>
            {List.map((props) => (
              <div className="card">
                <div className="images">
                  <img src={props.images} />
                </div>
                <div className="text">
                  <h5>{props.Name}</h5>
                </div>
                <div className="text">
                  <p>{props.role}</p>
                </div>
                <div className="text">
                  <p>{props.gender}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Attendance;
