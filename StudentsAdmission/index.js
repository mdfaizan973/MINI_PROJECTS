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

  if (
    obj.name == "" ||
    obj.email == "" ||
    obj.phone == "" ||
    obj.gender == "" ||
    obj.course == ""
  ) {
    swal("😟", "Please fill all the details.", "error");
  } else if (obj.phone.length <= 9 || obj.phone.length >= 11) {
    swal("😟", "Phone No should be 10 numbers!", "error");
    return;
  } else {
    LSData.push(obj);
    swal("😊", "Student is Added ", "success");
    localStorage.setItem("admission", JSON.stringify(LSData));
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
});
