// Created by: Alex Nelson
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-02-RADIO-BUTTONS/sw.js", {
    scope: "/ICS2O-UNIT5-02-RADIO-BUTTONS/",
  })
}

var numberPositive = 1
/**
 * This function displays an alert.
 */

function generateInteger() {
  numberPositive = document.getElementById("option-1").checked

  if (numberPositive == true) {
    document.getElementById("output").innerHTML =
      "Number value: " + (Math.floor(Math.random() * 6) + 1)
  } else {
    document.getElementById("output").innerHTML =
      "Number value: " + (Math.floor(Math.random() * -6) + 1)
  }
}
