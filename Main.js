// Shop ID and ShopName
var shops = [];
var shopName;
var shopId;

fetch("https://donutshop-api.herokuapp.com/shops/", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    let x = document.getElementById("shops");
    for (var i = 0; i < data.length; i++) {
      let result = document.createElement("option");
      result.innerText = data[i];
      result.value = data[i];
      result.onclick = (Event) => {
        shopName = Event.target.value;
        getID(shopName);
      };
      x.append(result);
      console.log(result);
    }
  })
  .catch((err) => {
    console.error(err);
  });

function getID(name) {
  fetch("https://donutshop-api.herokuapp.com/shop-id/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: name,
    }),
  })
    .then((response) => response.json())
    .then((data) => (shopId = data.id))
    .catch((err) => {
      console.error(err);
    });
}

// Print Inventory
function updateInventory(){var rows = [];
fetch("https://donutshop-api.herokuapp.com/inventory?id=234", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    rows = data.donuts;
    console.log(rows);
    let x = document.getElementById("inventory");
    let result = document.createElement("h5");
    var html = "<table border='1|1'>";
    for (var i = 0; i < rows.length; i++) {
      html += "<td>" + rows[i].type + "</td>";
      html +=
        "<td>" +
        rows[i].price.toLocaleString("en-us", {
          style: "currency",
          currency: "usd",
        }) +
        "</td>";
      html += "<td>Count: " + rows[i].count + "</td>";

      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("inventory").innerHTML = html;
    x.prepend(result);
  })
  .catch((err) => {
    console.error(err);
  });};

// for Revenue Page
fetch('https://donutshop-api.herokuapp.com/revenue?id=234', {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    let x = document.getElementById("revenue");

    let result = document.createElement("h2");
    result.innerText = data.revenue.toLocaleString("en-us", {
      style: "currency",
      currency: "usd",
    });
    x.prepend(result);
    // console.log(data);
    // getInput();
  })
  .catch((err) => {
    console.error(err);
  });
