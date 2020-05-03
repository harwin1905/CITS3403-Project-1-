// Define constants and access input fields from the HTML form.
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const submitBtn = document.querySelector(".submit_btn");

// Perform data validation of the input fields once the 'Submit' button has been clicked

submitBtn.addEventListener("click", function() {
  //Display an error message if the first name field has not been filled out
  if (fname.value == "") {
    alert("Please enter a first name.");
    return false;
  }

  //RegExp expression to define allowable characters 
  var letters = /^[A-za-z]+$/;

  //Display error message if the input contains invalid data
  if (!fname.value.match(letters)){
      alert("Please enter letters only.");
      fname.value = "";
      return false;
  }

  //Display an error message if the last name field has not been filled out
  if (lname.value == "") {
    alert("Please enter a last name.");
    return false;
  }

  //RegExp expression to define allowable characters
  var letters = /^[A-za-z]+$/;

  //Display error message if the input contains invalid data
  if (!lname.value.match(letters)){
      alert("Please enter letters only.");
      lname.value = "";
      return false;
  }

  //Display an error message if the last name field has not been filled out
  if (email.value == "") {
    alert("Please enter an email.");
    return false;
  }
});