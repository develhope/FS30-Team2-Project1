const buttons = document.querySelectorAll(".afterCont");

function handleButtonClick(event) {
  // Remove 'redBorder' class from all buttons
  buttons.forEach((button) => button.classList.remove("redBorder"));

  // Add 'redBorder' class to the clicked button
  event.target.classList.add("redBorder");
}

function handleMouseOver(event) {
  // Remove 'over' class from all buttons
  buttons.forEach((button) => button.classList.remove("over"));

  // Add 'over' class to the hovered button
  event.target.classList.add("over");
}

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
  button.addEventListener("mouseover", handleMouseOver);
});
