// this block of code is taken from https://www.w3schools.com/howto/howto_js_dropdown.asp

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

function dropdownFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.subscribeButtonDisney')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.subscribeButtonNetflix')) {
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
const subscribeButtonNetflix = document.querySelector(".subscribeButtonNetflix")
const subscribeButtonDisney = document.querySelector(".subscribeButtonDisney")
const showUnsubscribe = document.querySelector(".unsubscribeButtonNetflix")
const showUnsubscribe1 = document.querySelector(".unsubscribeButtonDisney")



function unsubConfirm(name) {
  let text = "Are you sure you want to unsubscribe?";
  if (confirm(text) == true) {
    text = "Unsubscribed <br> No Current Plan"

    if (String(name).valueOf() === "netflix") {
      netflixHeader.innerHTML = text;
      showUnsubscribe.setAttribute("hidden", "hidden");
      subscribeButtonNetflix.textContent = "Subscribe";
      subscribeButtonNetflix.style.marginTop = "55px"
    }
    else if (String(name).valueOf() === "disney+") {
      disneyHeader.innerHTML = text;
      showUnsubscribe1.setAttribute("hidden", "hidden");
      subscribeButtonDisney.textContent = "Subscribe";
      subscribeButtonDisney.style.marginTop = "55px"
    }

  }

}


function subscribeOnClick(name) {

  console.log(name);
  if (String(name).valueOf() === "netflix") {
  subscribeButtonNetflix.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
  subscribeButtonNetflix.style.marginTop = "25px"; // move button location so it's aligned evenly
  showUnsubscribe.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
  }
  else if (String(name).valueOf() === "disney+") {
    subscribeButtonDisney.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
    subscribeButtonDisney.style.marginTop = "25px"; // move button location so it's aligned evenly
    showUnsubscribe1.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 

  }
}

//netflix 
const netflixHeader = document.querySelector("#netflix-header")
document.querySelector("#netflix6").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $6/month"})
document.querySelector("#netflix17").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $17/month"})
document.querySelector("#netflix21").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $21/month"})

// disney plus 
const disneyHeader = document.querySelector("#disney-header")
// $8 plan
const disney8 = document.querySelector("#disney8");
disney8.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $8/month";}); // first change header text 
// $12 plan
const disney12 = document.querySelector("#disney12");
disney12.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $12/month";});
// $15 plan
const disney15 = document.querySelector("#disney15");
disney15.addEventListener("click", function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $15/month";}); 



