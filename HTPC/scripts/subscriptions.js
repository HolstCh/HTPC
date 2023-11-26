// this block of code is taken from https://www.w3schools.com/howto/howto_js_dropdown.asp

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
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

// subscribe button (dropdown) and unsubscribe button 
const subButton = document.querySelector(".dropbtn")
const showUnsubscribe = document.querySelector(".unsubscribeButton")


function unsubConfirm() {
  let text = "Are you sure you want to unsubscribe?";
  if (confirm(text) == true) {
    text = "Unsubscribed <br> No Current Plan"
    disneyHeader.innerHTML = text;
    showUnsubscribe.setAttribute("hidden", "hidden");
    subButton.textContent = "Subscribe";
    subButton.style.marginTop = "55px"
  }

}


// i am sorry... this is disgusting

// disney plus 
const disneyHeader = document.querySelector("#disney-header")

// $8 plan
const disney8 = document.querySelector("#disney8");
disney8.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $8/month";}); // first change header text 
disney8.addEventListener("click", function() {subButton.textContent = "Edit Plan";}); // change button text to say edit plan since we are now subscribed
disney8.addEventListener("click", function(){subButton.style.marginTop = "25px"}); // move button location so it's aligned evenly
disney8.addEventListener("click", function(){showUnsubscribe.removeAttribute("hidden");}); // show unsubscribe button now that we are subscribed 
// $12 plan
const disney12 = document.querySelector("#disney12");
disney12.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $12/month";});
disney12.addEventListener("click", function() {subButton.textContent = "Edit Plan";});
disney12.addEventListener("click", function(){subButton.style.marginTop = "25px"});
disney12.addEventListener("click", function(){showUnsubscribe.removeAttribute("hidden");});
// $15 plan
const disney15 = document.querySelector("#disney15");
disney15.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $15/month";}); 
disney15.addEventListener("click", function() {subButton.textContent = "Edit Plan";});
disney15.addEventListener("click", function(){subButton.style.marginTop = "25px"});
disney15.addEventListener("click", function(){showUnsubscribe.removeAttribute("hidden");});


