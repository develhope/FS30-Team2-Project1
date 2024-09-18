const bt = document.querySelectorAll(".afterConts");

function handleButtonClick(event) {
  // Remove 'active' class from all buttons
  bt.forEach((button) => button.classList.remove("redBorder"));

  // Add 'active' class to the clicked button
  event.target.classList.add("redBorder");
}

function handleMouseOver(event) {
  bt.forEach((button) => button.classList.remove("over"));

  event.target.classList.add("over");
}

// Add event listener to each button
bt.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
  button.addEventListener("mouseover", handleMouseOver);
});
