// All the Code for the Admitted page goes here

let add_accepted = JSON.parse(localStorage.getItem("admission-accepted"));
console.log(add_accepted);
let tbody = document.querySelector("tbody");

function display(data) {
  data.forEach(function (el) {
    let row = document.createElement("tr");
    tbody.append(row);

    let td1 = document.createElement("td");
    td1.innerText = el.name;

    let td2 = document.createElement("td");
    td2.innerText = el.email;

    let td3 = document.createElement("td");
    td3.innerText = el.course;

    let td4 = document.createElement("td");
    td4.innerText = el.gender;

    let td5 = document.createElement("td");
    td5.innerText = el.phone;

    row.append(td1, td2, td3, td4, td5);
    // console.log(td1,td2,td3,td4,td5)
  });
}

display(add_accepted);
