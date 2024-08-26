/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let Subject = who[Math.floor(Math.random() * 4)];
  let verb = action[Math.floor(Math.random() * 4)];
  let target = what[Math.floor(Math.random() * 3)];
  let time = when[Math.floor(Math.random() * 5)];
  console.log(Subject + " " + verb + " " + target + " " + time);
  document.querySelector("#Excuse").innerHTML =
    Subject + " " + verb + " " + target + " " + time;
};
