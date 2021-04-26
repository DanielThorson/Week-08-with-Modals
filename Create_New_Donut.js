  // for creating new donuts
  var x = [];


  let btn2 = document.querySelector(".donut_create");
  
  btn2.addEventListener("click", function (event) {
    let type = prompt("Which type do you want to add?");
    let price = prompt("How much do they cost?");
    alert("inventory change complete");
   x.push(type, Number.parseInt(price));
    fetch("https://donutshop-api.herokuapp.com/create-donut-type?id=234", {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify({type, price}),
    })
      .then((response) => response.json())
      .then((data) => x.push(data))
      .then(updateInventory) //add this to every potst
      .catch((err) => {
      console.error(err);
    });
  });
  