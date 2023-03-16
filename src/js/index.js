//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx"

//render your react application
let seconds = 0;
let tensOfSeconds = 0;
let minutes = 0;
let tensOfMinutes = 0;
let hours = 0;
let tensOfHours = 0;
ReactDOM.render(<SecondsCounter secondsCount={seconds} tensOfSecondsCount={tensOfSeconds} minutesCount={minutes}
tensOfMinutesCount={tensOfMinutes} hoursCount={hours} tensOfHours={tensOfHours}/>, document.querySelector("#app"));
