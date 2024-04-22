//To display the time in Home page

"use strict";

function $(id) {
    return document.getElementById(id);
  }
  // function to display the time as two positions 
  function padSingleDigit(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  // function definition to display clock with current time
  function displayCurrentTime() {
    //variable declaration
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = (hours >= 12) ? "PM" : "AM";
    // time calculations
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;
    //getting time and rounded in two positions
    $("hours").innerHTML = padSingleDigit(hours);
    $("minutes").innerHTML = padSingleDigit(minutes);
    $("seconds").innerHTML = padSingleDigit(seconds);
    $("ampm").innerHTML = ampm;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // function call to display time
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
  });