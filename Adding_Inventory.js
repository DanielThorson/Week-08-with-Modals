// for adding donuts
let btn3 = document.querySelector(".donut_add");

btn3.addEventListener("click", function (event) {
  let type = prompt("Which type do you want to add?");
  let price = prompt("How much do they cost?");
  alert("inventory change complete");
});

// let btn6 = document.querySelector("#order");

// btn6.addEventListener("click", function (event) {
//   let type = prompt("Which type do you want to order?");
//   let count = prompt("How many do you want?");
//   alert("Customer Order Completed");
// });