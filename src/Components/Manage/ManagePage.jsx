import React, { useState } from "react";
import "./manage.css";
import { FaCaretDown, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Manage = () => {
  const [editableUser, setEditableUser] = useState(null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || []
  );
  console.log(userData);

  const handleEditClick = (index) => {
    setEditableUser(index);
  };

  const handleSaveClick = (index) => {
    const updatedUserData = userData.map((user, i) => {
      if (i === index) {
        return {
          ...user,
          firstName: document.getElementById(`editFirstName_${index}`).value,
          lastName: document.getElementById(`editLastName_${index}`).value,
          role: document.getElementById(`editRole_${index}`).value,
        };
      }
      return user;
    });

    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    setUserData(updatedUserData);

    setEditableUser(null);
  };

  const handleCancelClick = () => {
    setEditableUser(null);
  };

  const handleInputChange = (index, field, value) => {
    setUserData((prevUserData) => {
      return prevUserData.map((user, i) => {
        if (i === index) {
          return {
            ...user,
            [field]: value,
          };
        }
        return user;
      });
    });
  };

  const handleDeleteClick = (index) => {
    const updatedUserData = userData.filter((user, i) => i !== index);

    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    setUserData(updatedUserData);
  };

  return (
    <>
    {/* <input type="text" onChange={e=>} /> */}
      <div className="body">
        <div className="bodywrapper">
          <div className="managemember">
            <p>MANAGE USER</p>
          </div>
          <div className="info">
            <div className="name">
              <p>
                NAMES <FaCaretDown />
              </p>
            </div>
            <div className="role">
              <p>ROLES</p>
            </div>
            <div className="action">
              <p>ACTION</p>
            </div>
          </div>
          {userData.map((e, index) => (
            <div className="memberinfo" key={index}>
              <div className="membername">
                {editableUser === index ? (
                  <input
                    type="text"
                    id={`editFirstName_${index}`}
                    value={e.firstName}
                    onChange={(event) =>
                      handleInputChange(index, "firstName", event.target.value)
                    }
                  />
                ) : (
                  <p>{`${e.firstName} ${e.lastName}`}</p>
                )}
              </div>
              <div className="memberrole">
                {editableUser === index ? (
                  <input
                    type="text"
                    id={`editLastName_${index}`}
                    value={e.lastName}
                    onChange={(event) =>
                      handleInputChange(index, "lastName", event.target.value)
                    }
                  />
                ) : (
                  <p>{e.role}</p>
                )}
              </div>

              {editableUser === index ? (
                <div className="memberrole">
                  <input
                    type="text"
                    id={`editRole_${index}`}
                    value={e.role}
                    onChange={(event) =>
                      handleInputChange(index, "role", event.target.value)
                    }
                  />
                </div>
              ) : null}
              <div className="memberaction">
                {editableUser === index ? (
                  <>
                    <div
                      className="save"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </div>
                    <div className="cancel" onClick={handleCancelClick}>
                      Cancel
                    </div>
                  </>
                ) : (
                  <div className="edit" onClick={() => handleEditClick(index)}>
                    <FaEdit />
                  </div>
                )}
                <div className="delete">
                  <MdDeleteForever onClick={() => handleDeleteClick(index)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Manage;
