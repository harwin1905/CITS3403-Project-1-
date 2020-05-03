const programsList = document.querySelector(".programs_list");
const listInput = document.querySelector(".list_input");
const addBtn = document.querySelector(".add_btn");

addBtn.addEventListener("click", function() {
  //create new list entry
  const newList = document.createElement("LI");
  const listContent = document.createTextNode(listInput.value);

  //add input value to the newly created list
  newList.appendChild(listContent);

  if (listInput.value == "") {
    alert("Please enter a value.");
    return false;
    
  }

  var letters = /^[A-za-z ]+$/;
  if (!listInput.value.match(letters)){
      alert("Please enter letters only.");
      listInput.value = "";
      return false;
      
    }

  //attach the entry into the exisiting list 
  programsList.appendChild(newList);

  //change the colour of the list once it has been altered
  programsList.style.color = "orange";
});