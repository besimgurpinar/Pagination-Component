// Get the pagination element
var pagination = document.querySelector(".pagination");

// The total number of pages
var totalPages = 5;

// The current page number
var currentPage = 1;

// Update the current page number
function updateCurrentPageNumber() {
  pagination.querySelector(".active").classList.remove("active");
  pagination.querySelector(`li[data-page="${currentPage}"]`).classList.add("active");
}

// Hide the previous and next buttons if they are not needed
function hidePreviousAndNextButtons() {
  var previousButton = pagination.querySelector("li.previous");
  var nextButton = pagination.querySelector("li.next");

  if (currentPage === 1) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "block";
  }

  if (currentPage === totalPages) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

// Listen for clicks on the pagination links
pagination.addEventListener("click", function(event) {
  var pageNumber = event.target.dataset.page;

  // Update the current page number
  currentPage = pageNumber;

  // Update the current page number
  updateCurrentPageNumber();

  // Hide the previous and next buttons
  hidePreviousAndNextButtons();
});