import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {props.number}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
