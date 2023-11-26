// this block of code is taken from https://www.w3schools.com/howto/howto_js_dropdown.asp

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// i am sorry... this is disgusting

// disney plus 
const disneyHeader = document.querySelector("#disney-header")
const subButton = document.querySelector(".dropbtn")
// $8 plan
const disney8 = document.querySelector("#disney8");
disney8.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $8/month";});
disney8.addEventListener("click", function() {subButton.textContent = "Edit Plan";});
// $12 plan
const disney12 = document.querySelector("#disney12");
disney12.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $12/month";});
disney12.addEventListener("click", function() {subButton.textContent = "Edit Plan";});
// $15 plan
const disney15 = document.querySelector("#disney15");
disney15.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $15/month";});
disney15.addEventListener("click", function() {subButton.textContent = "Edit Plan";});


