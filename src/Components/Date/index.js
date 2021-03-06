import React, { useState } from "react";
import "./date.css";

let date = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DisplayDate() {
  let day = days[date.getDay()];
  let dateNumber = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  return <p className="dateP">{`${day} ${dateNumber} ${month} ${year}`}</p>;
}

export default DisplayDate;
