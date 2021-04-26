  // for creating new donuts
  var n = [];


  let btn1 = document.querySelector(".create_shop");
  
  btn1.addEventListener("click", function (event) {
    let name = prompt("What is the name of the shop you want to create?");
    alert("New Donut Shop Created.");
   n.push(name);
    fetch("https://donutshop-api.herokuapp.com/create-donut-shop?id=234", {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify({name}),
    })
      .then((response) => response.json())
      .then((data) => n.push(data))
      .then(updateInventory) //add this to every potst
      .catch((err) => {
      console.error(err);
    });
  });
  