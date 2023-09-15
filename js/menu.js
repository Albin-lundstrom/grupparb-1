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

// Function to open the default tab when the page loads
function openDefaultTab() {
  // Hide all tab content except for the "thai" tab
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the "active" class from all tabs
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Display the "thai" tab and set it as active
  var thaiTab = document.getElementById("thai");
  var thaiButton = document.querySelector(".tablinks[data-food='thai']");
  if (thaiTab && thaiButton) {
    thaiTab.style.display = "flex";
    thaiButton.className += " active";
  }
}

window.addEventListener("load", openDefaultTab);