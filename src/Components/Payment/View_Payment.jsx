import React from "react";
import "./ViewPay.css";
// import { Link } from "react-router-dom";

const View_Payment = () => {
  const pay = JSON.parse(localStorage.getItem("payment")) || [];

  return (
    <div className="homiee">
      <div className="AdminWrap">
        <div className="adminRight">
          <div className="adminRightWrap">
            <h1>Payment History</h1>
            {pay.map((props, index) => (
              <div className="card" key={index}>
                <div className="text">
                  <h5>{props.fullName}</h5>
                </div>
                <div className="text">
                  <p>{props.role}</p>
                </div>
                <div className="text">
                  <p>{props.amount}</p>
                </div>
                <div className="text">
                  <p>{props.paymentType}</p>
                </div>
                <div className="text">
                  <p>{props.paymentMethod}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Payment;
