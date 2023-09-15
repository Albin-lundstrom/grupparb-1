function food(evt, foodmeni) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(foodmeni).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Function to open the "Lunch" tab by default when the page loads
function openDefaultTab() {
  // Programmatically trigger a click event on the "Lunch" button
  var lunchButton = document.getElementById("lunchButton");
  if (lunchButton) {
    lunchButton.click();
  }
}

window.addEventListener("load", openDefaultTab);
