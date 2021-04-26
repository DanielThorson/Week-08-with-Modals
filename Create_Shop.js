let btn10 = document.querySelector(".create_shop");

btn10.addEventListener("click", function (event) {
  let name = prompt("What is the name of your the shop?");
  alert("New Donut Shop Created.");
  fetch("https://donutshop-api.herokuapp.com/create-donut-shop", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(new shop(name))
})
  .then((response) => response.json())
  .then((data) => console.log(data))
     getInput()
  .catch((err) => {
    console.error(err);
  });
  alert("Donut Shop Created Successfully");
});