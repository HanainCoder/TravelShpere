document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((span) => (span.textContent = "")); // Clear all error messages
  
  // Get form values
  const whereTo = document.getElementById("WhereTo").value.trim();
  const numTravellers = document.getElementById("NumberofTravellers").value.trim();
  const destinationDate = document.getElementById("Destination").value.trim();
  const leavingDate = document.getElementById("leaving").value.trim();
  const details = document.getElementById("details").value.trim();

  let isValid = true;

  // Validate form inputs
  if (!whereTo) {
      document.getElementById("whereToError").textContent = "Please select a destination.";
      isValid = false;
  }
  if (!numTravellers || isNaN(numTravellers) || numTravellers <= 0) {
      document.getElementById("numTravellersError").textContent = "Please enter a valid positive number of travelers.";
      isValid = false;
  }
  if (!destinationDate) {
      document.getElementById("destinationDateError").textContent = "Please select a destination date.";
      isValid = false;
  }
  if (!leavingDate) {
      document.getElementById("leavingDateError").textContent = "Please select a leaving date.";
      isValid = false;
  } else if (new Date(leavingDate) <= new Date(destinationDate)) {
      document.getElementById("leavingDateError").textContent = "Leaving date must be later than the destination date.";
      isValid = false;
  }
  if (!details) {
      document.getElementById("detailsError").textContent = "Please enter your name and details.";
      isValid = false;
  }

  if (isValid) {
      // Store data in localStorage and redirect to the next page
      localStorage.setItem('whereTo', whereTo);
      localStorage.setItem('numTravellers', numTravellers);
      localStorage.setItem('destinationDate', destinationDate);
      localStorage.setItem('leavingDate', leavingDate);
      localStorage.setItem('details', details);

      // Redirect to the confirmation page
      window.location.href = "confrimBooking.html";
  }
});

// for clicking gallery
const thumbnails=document.querySelectorAll(".thumbnail");
thumbnails.forEach(thumbnail=>{
  thumbnail.addEventListener("click",()=>{
    thumbnail.classList.toggle('clicked')
  });
});
// for search
// Get elements
//for our mission


//from from customers
document.getElementById('feedback_form').addEventListener('submit',function(e){
  e.preventDefault();
  console.log("Form submission prevented."); // Add this for testing
  //get values from user
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const country=document.getElementById('country').value.trim();
  const feedback=document.getElementById('feedback').value.trim();

  //check if all the fields are filled
  if (!name || !email || !country || !feedback){
    displayMessage('Please fill out all fields','error');
    return;
  }
  displayMessage('Your response has been submitted','success');
  //clear all fields
  document.getElementById('feedback_form').reset();
});
// Function to display a message
function displayMessage(message,type){
  const messageElement=document.getElementById('form_message');
  messageElement.textContent=message;
  messageElement.className=`message${type}`;
  console.log(`Displayed message: ${message} (${type})`);
  
}
displayMessage('Testing message display.', 'success');
//new block starts
// search Home page

function handleSearch(event) {
  event.preventDefault(); // Prevent the page from refreshing

  // Get the search term entered by the user
  const searchTerm = document.getElementById("search").value.toLowerCase();

  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  let found = false; // Variable to track if a match is found

  // Loop through all nav links to check for a match
  navLinks.forEach((link) => {
    const linkText = link.textContent.toLowerCase(); // Get the link text

    if (linkText.includes(searchTerm)) {
      found = true;
      link.classList.add("highlight"); // Highlight the matching link

      // Navigate to the section using the href attribute
      const sectionId = link.getAttribute("href"); // Get the href (e.g., #book)
      const section = document.querySelector(sectionId); // Find the corresponding section

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the section
      }
    } else {
      link.classList.remove("highlight"); // Remove the highlight if it doesn't match
    }
  });

  // If no matches are found, display an alert
  if (!found) {
    alert("No results found!");
  }
}
// confirmation Booking:
