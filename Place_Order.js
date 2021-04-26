// // for adding donuts
// var v = [];

// letbtn4 = document.querySelector(".place_order");

// btn4.addEventListener("click", function (event) {
//   let type = prompt("Which type do you want?");
//   let count = prompt("How many do you want?");
//   alert("inventory change complete");
//   v.push(type, Number.parseInt(count));
//   fetch("https://donutshop-api.herokuapp.com/place-order?id=234", {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ type, count }),
//   })
//     .then((response) => response.json())
//     .then((data) => x.push(data))
//     .then(updateInventory) //add this to every potst
//     .catch((err) => {
//       console.error(err);
//     });
// });
