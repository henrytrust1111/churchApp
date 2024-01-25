import "./AttendancePage.css";
const Attendance = () => {
  return (
    <div className="attendancebody">
      <div className="attendwrap">
        <h4>
          Welcome to Church! We're glad you're here. <br /> Please give us a
          little information.
        </h4>
        <div className="list">
          <p>Men</p>
          <input type="men" placeholder="Men" />
        </div>
        <div className="list">
          <p>Women</p>
          <input type="women" placeholder="Women" />
        </div>
        <div className="list">
          <p>Children</p>
          <input type="children" placeholder="Children" />
        </div>
        <div className="list">
          <p>Days</p>
          <input type="date" placeholder="Days" />
        </div>
        <button className="total">Total Number</button>
      </div>
    </div>
  );
};

export default Attendance;
