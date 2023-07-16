// All the Code for All Students Page Goes Here

let LSData = JSON.parse(localStorage.getItem("admission"));
console.log(LSData);

let tbody = document.querySelector("tbody");

//caught the filter id
let filter = document.querySelector("#filter");

function display(data) {
  tbody.innerHTML = null;

  data.forEach(function (el, index) {
    let row = document.createElement("tr");
    tbody.append(row);

    let td1 = document.createElement("td");
    td1.innerText = el.name.toUpperCase();

    let td2 = document.createElement("td");
    td2.innerText = el.email;

    let td3 = document.createElement("td");
    td3.innerText = el.course;

    let td4 = document.createElement("td");
    td4.innerText = el.gender;

    let td5 = document.createElement("td");
    td5.innerText = el.phone;

    let td6 = document.createElement("td");
    td6.innerText = "Admitted";

    td6.style.backgroundColor = "green";
    td6.style.cursor = "pointer";
    td6.style.color = "white";
    td6.style.borderRadius = "20px";
    td6.style.textAlign = "center";

    //add event listener
    td6.addEventListener("click", function () {
      add_Data("admission-accepted", el);
      Delete_Data(LSData, index);
      swal("✅", "You are Accepted", "success");
    });

    let td7 = document.createElement("td");
    td7.innerText = "Rejected";

    td7.style.backgroundColor = "red";
    td7.style.cursor = "pointer";
    td7.style.borderRadius = "20px";
    td7.style.textAlign = "center";
    td7.style.color = "white";

    //add event listener
    td7.addEventListener("click", function () {
      add_Data("admission-rejected", el);
      Delete_Data(LSData, index);
      swal("❌", "You are rejected", "error");
    });

    row.append(td1, td2, td3, td4, td5, td6, td7);
    // console.log(td1,td2,td3,td4,td5)
  });
}

// creating this function to store in LocalStorage
function add_Data(key, value) {
  let New_LSData = JSON.parse(localStorage.getItem(key)) || [];
  New_LSData.push(value);
  localStorage.setItem(key, JSON.stringify(New_LSData));
  // event.target.parentNode.remove()
}
// function for deleteing from the page and LStorage

function Delete_Data(data, index) {
  data.splice(index, 1); //from page
  localStorage.setItem("admission", JSON.stringify(data)); //from LStorage
  display(data);
}

filter.addEventListener("change", function () {
  let filterValue = filter.value.trim(); // Trim whitespace from the filter value
  let filterData;

  if (filterValue === "") {
    // If filter value is empty, pass all data to display function
    filterData = LSData;
  } else {
    // Otherwise, filter the data based on the filter value
    filterData = LSData.filter(function (el) {
      return el.course === filterValue;
    });
  }

  display(filterData);
});

display(LSData);
