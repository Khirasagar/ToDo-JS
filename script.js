// Get a reference to the button element by its id
const addStudentButton = document.getElementById("addStudentButton");
if (addStudentButton) {

// Add a click event listener to the button
addStudentButton.addEventListener("click", function() {
  // Print "Student Added!" to the console when the button is clicked
  console.log("first");

  window.location.href = "form.html";
});
}

const back = document.getElementById("back");
if(back){
  back.addEventListener("click", function() {
  console.log("first");
  window.location.href = "index.html";
  });

}

