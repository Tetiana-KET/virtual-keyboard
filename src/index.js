import {showSelfEsteem} from "./selfEsteem.js";
import { keyboardEnInit } from "./keyboardEN.js";
// import {keyboardRUInit} from "./keyboardRU.js";

window.addEventListener("DOMContentLoaded", function () {
  keyboardEnInit();
});
showSelfEsteem();
