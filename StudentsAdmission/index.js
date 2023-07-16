// All the JS Code for the Add Students Page Goes Here

let add_form = document.querySelector("#form");

let LSData = JSON.parse(localStorage.getItem("admission")) || [];

add_form.addEventListener("submit", function () {
  event.preventDefault();

  let obj = {
    name: add_form.name.value,
    email: add_form.email.value,
    phone: add_form.phone.value,
    gender: add_form.gender.value,
    course: add_form.course.value,
  };

  // console.log(obj)

  if (
    obj.name == "" ||
    obj.email == "" ||
    obj.phone == "" ||
    obj.gender == "" ||
    obj.course == ""
  ) {
    alert("Please fill all the details.");
  } else {
    LSData.push(obj);
    // console.log(LSData)
    localStorage.setItem("admission", JSON.stringify(LSData));
  }
});
