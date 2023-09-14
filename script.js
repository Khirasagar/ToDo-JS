const addStudentButton = document.getElementById("addStudentButton");
if (addStudentButton) {
  addStudentButton.addEventListener("click", function() {
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


const contactForm = document.getElementById("contact_form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
    
    // Create an object to store the form values
    const formData = {
      fullName: contactForm.elements["first_name"].value,
      standard: contactForm.elements["standard"].value,
      house: contactForm.elements["house"].value,
      rollNumber: contactForm.elements["roll_number"].value,
      address: contactForm.elements["address"].value,
      email: contactForm.elements["email"].value,
      contactNo: contactForm.elements["contact_number"].value,
    };

    // Convert the form values object to a JSON string
    const formDataJson = JSON.stringify(formData);

    // Store the JSON string in local storage with a unique key (e.g., "student_data")
    localStorage.setItem("student_data", formDataJson);

    // Optionally, you can also display a success message or redirect the user
    console.log("Form data saved to local storage:", formData);

    // Reset the form if needed
    contactForm.reset();
  });
}
