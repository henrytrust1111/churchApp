import React, { useState, useEffect } from "react";
import "./paymentPage.css";

const Payment = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("payment")) || [];
    setPaymentData(storedData);
  }, []);

  const pay = () => {
    const newData = {
      fullName: fullName,
      role: role,
      amount: amount,
      paymentMethod: paymentMethod,
      paymentType: paymentType,
    };

    setPaymentData((prevData) => [...prevData, newData]);

    localStorage.setItem("payment", JSON.stringify([...paymentData, newData]));

    alert("Your Transaction is being Processed");
  };

  return (
    <div className="payHold">
      <div className="payWrap">
        <div className="form">
          <h1>Payment Portal</h1>

          <div className="inputFrame">
            <p> FullName</p>
            <input
              type="text"
              placeholder="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="inputFrame">
            <p> Role</p>
            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="inputFrame">
            <p>Amount</p>
            <input
              type="text"
              placeholder="Type amount here"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="inputFrame">
            <p>Payment Type</p>
            <input
              type="text"
              placeholder="Tithe/Offering"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            />
          </div>
          <div className="inputFrame">
            <p>Payment Method</p>
            <input
              type="text"
              placeholder="Cash/Transfer"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <button onClick={pay}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
