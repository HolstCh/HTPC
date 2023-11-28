// top of JS file:
let allLists = JSON.parse(localStorage.getItem('lists'));
let allData = JSON.parse(localStorage.getItem('data'));

// this block of code is taken from https://www.w3schools.com/howto/howto_js_dropdown.asp

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownNetflix() {
  document.getElementById("myDropdownNetflix").classList.toggle("show");
}
  
function dropdownDisney() {
  document.getElementById("myDropdownDisney").classList.toggle("show");
}

function dropdownPrime() {
  document.getElementById("myDropdownPrime").classList.toggle("show");
}

function dropdownSpotify() {
  document.getElementById("myDropdownSpotify").classList.toggle("show");
}

function dropdownApple() {
  document.getElementById("myDropdownApple").classList.toggle("show");
}

function dropdownSoundCloud() {
  document.getElementById("myDropdownSoundCloud").classList.toggle("show");
}

function dropdownTwitch() {
  document.getElementById("myDropdownTwitch").classList.toggle("show");
}

function dropdownYoutube() {
  document.getElementById("myDropdownYoutube").classList.toggle("show");
}

function dropdownKick() {
  document.getElementById("myDropdownKick").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.subscribeButtonKick')) {
    var dropdowns = document.getElementsByClassName("dropdown-content8");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonYoutube')) {
    var dropdowns = document.getElementsByClassName("dropdown-content7");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonTwitch')) {
    var dropdowns = document.getElementsByClassName("dropdown-content6");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonSoundCloud')) {
    var dropdowns = document.getElementsByClassName("dropdown-content5");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonApple')) {
    var dropdowns = document.getElementsByClassName("dropdown-content4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonSpotify')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonPrime')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonDisney')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
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
const subscribeButtonPrime = document.querySelector(".subscribeButtonPrime")
const subscribeButtonSpotify = document.querySelector(".subscribeButtonSpotify")
const subscribeButtonApple = document.querySelector(".subscribeButtonApple")
const subscribeButtonSoundCloud = document.querySelector(".subscribeButtonSoundCloud")
const subscribeButtonTwitch = document.querySelector(".subscribeButtonTwitch")
const subscribeButtonYoutube = document.querySelector(".subscribeButtonYoutube")
const subscribeButtonKick = document.querySelector(".subscribeButtonKick")




const showUnsubscribeNetflix = document.querySelector(".unsubscribeButtonNetflix")
const showUnsubscribeDisney = document.querySelector(".unsubscribeButtonDisney")
const showUnsubscribePrime = document.querySelector(".unsubscribeButtonPrime")
const showUnsubscribeSpotify = document.querySelector(".unsubscribeButtonSpotify")
const showUnsubscribeApple = document.querySelector(".unsubscribeButtonApple")
const showUnsubscribeSoundCloud = document.querySelector(".unsubscribeButtonSoundCloud")
const showUnsubscribeTwitch = document.querySelector(".unsubscribeButtonTwitch")
const showUnsubscribeYoutube = document.querySelector(".unsubscribeButtonYoutube")
const showUnsubscribeKick = document.querySelector(".unsubscribeButtonKick")






function unsubConfirm(name) {
  let text = "Are you sure you want to unsubscribe?";
  if (confirm(text) == true) {
    text = "Unsubscribed <br> No Current Plan"

    if (String(name).valueOf() === "netflix") {
      netflixHeader.innerHTML = text;
      showUnsubscribeNetflix.setAttribute("hidden", "hidden");
      subscribeButtonNetflix.textContent = "Subscribe";
      subscribeButtonNetflix.style.marginTop = "30px"
      imageUnsubscribeApp('netflix')
    }
    else if (String(name).valueOf() === "disney+") {
      disneyHeader.innerHTML = text;
      showUnsubscribeDisney.setAttribute("hidden", "hidden");
      subscribeButtonDisney.textContent = "Subscribe";
      subscribeButtonDisney.style.marginTop = "30px"
      imageUnsubscribeApp('disney')
    }
    else if (String(name).valueOf() === "prime") {
      primeHeader.innerHTML = text;
      showUnsubscribePrime.setAttribute("hidden", "hidden");
      subscribeButtonPrime.textContent = "Subscribe";
      subscribeButtonPrime.style.marginTop = "30px"
      imageUnsubscribeApp('prime')
    }
    else if (String(name).valueOf() === "spotify") {
      spotifyHeader.innerHTML = text;
      showUnsubscribeSpotify.setAttribute("hidden", "hidden");
      subscribeButtonSpotify.textContent = "Subscribe";
      subscribeButtonSpotify.style.marginTop = "30px"
      imageUnsubscribeApp('spotify')
    }
    else if (String(name).valueOf() === "apple") {
      appleHeader.innerHTML = text;
      showUnsubscribeApple.setAttribute("hidden", "hidden");
      subscribeButtonApple.textContent = "Subscribe";
      subscribeButtonApple.style.marginTop = "30px"
      imageUnsubscribeApp('apple')
    }
    else if (String(name).valueOf() === "soundcloud") {
      soundcloudHeader.innerHTML = text;
      showUnsubscribeSoundCloud.setAttribute("hidden", "hidden");
      subscribeButtonSoundCloud.textContent = "Subscribe";
      subscribeButtonSoundCloud.style.marginTop = "30px"
      imageUnsubscribeApp('soundcloud')
    }
    else if (String(name).valueOf() === "twitch") {
      twitchHeader.innerHTML = text;
      showUnsubscribeTwitch.setAttribute("hidden", "hidden");
      subscribeButtonTwitch.textContent = "Subscribe";
      subscribeButtonTwitch.style.marginTop = "30px"
      imageUnsubscribeApp('twitch')
    }
    else if (String(name).valueOf() === "youtube") {
      youtubeHeader.innerHTML = text;
      showUnsubscribeYoutube.setAttribute("hidden", "hidden");
      subscribeButtonYoutube.textContent = "Subscribe";
      subscribeButtonYoutube.style.marginTop = "30px"
      imageUnsubscribeApp('youtube')
    }
    else if (String(name).valueOf() === "kick") {
      kickHeader.innerHTML = text;
      showUnsubscribeKick.setAttribute("hidden", "hidden");
      subscribeButtonKick.textContent = "Subscribe";
      subscribeButtonKick.style.marginTop = "30px"
      imageUnsubscribeApp('kick')
    }
  }

}


function subscribeOnClick(name) {
  text = "Would you like to subscribe?"
  if (confirm(text) == true){

    if (String(name).valueOf() === "netflix") {
      subscribeButtonNetflix.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonNetflix.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeNetflix.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownNetflix()
      imageSubscribeApp('netflix')
    }
    else if (String(name).valueOf() === "disney+") {
      subscribeButtonDisney.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonDisney.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeDisney.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownDisney()
      imageSubscribeApp('disney')
    }
    else if (String(name).valueOf() === "prime") {
      subscribeButtonPrime.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonPrime.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribePrime.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownPrime()
      imageSubscribeApp('prime')
    }
    else if (String(name).valueOf() === "spotify") {
      subscribeButtonSpotify.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonSpotify.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeSpotify.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownSpotify()
    }
    else if (String(name).valueOf() === "apple") {
      subscribeButtonApple.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonApple.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeApple.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownApple()
      imageSubscribeApp('apple')
    }
    else if (String(name).valueOf() === "soundcloud") {
      subscribeButtonSoundCloud.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonSoundCloud.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeSoundCloud.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownSoundCloud()
      imageSubscribeApp('soundcloud')
    }
    else if (String(name).valueOf() === "twitch") {
      subscribeButtonTwitch.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonTwitch.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeTwitch.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownTwitch()
      imageSubscribeApp('twitch')
    }
    else if (String(name).valueOf() === "youtube") {
      subscribeButtonYoutube.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonYoutube.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeYoutube.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownYoutube()
      imageSubscribeApp('youtube')
    }
    else if (String(name).valueOf() === "kick") {
      subscribeButtonKick.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonKick.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeKick.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
      dropdownKick()
      imageSubscribeApp('kick')
    }
  }

}

//netflix 
const netflixHeader = document.querySelector("#netflix-header")
document.querySelector("#netflix6").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $6/month"})
document.querySelector("#netflix17").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $17/month"})
document.querySelector("#netflix21").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $21/month"})

//prime 
const primeHeader = document.querySelector("#prime-header")
document.querySelector("#prime7").addEventListener("click", function() {primeHeader.innerHTML = "Subscribed <br> Current Plan: $7/month"})
document.querySelector("#prime15").addEventListener("click", function() {primeHeader.innerHTML = "Subscribed <br> Current Plan: $15/month"})

// disney plus 
const disneyHeader = document.querySelector("#disney-header")
document.querySelector("#disney8").addEventListener("click" , function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $8/month"})
document.querySelector("#disney12").addEventListener("click" , function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $12/month"})
document.querySelector("#disney15").addEventListener("click" , function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $15/month"})

//spotify 
const spotifyHeader = document.querySelector("#spotify-header")
document.querySelector("#spotify6").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $6/month"})
document.querySelector("#spotify11").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $11/month"})
document.querySelector("#spotify15").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $15/month"})
document.querySelector("#spotify17").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $17/month"})

//apple music
const appleHeader = document.querySelector("#apple-header")
document.querySelector("#apple6").addEventListener("click" , function() {appleHeader.innerHTML = "Subscribed <br> Current plan: $6/month"})
document.querySelector("#apple11").addEventListener("click" , function() {appleHeader.innerHTML = "Subscribed <br> Current plan: $11/month"})
document.querySelector("#apple17").addEventListener("click" , function() {appleHeader.innerHTML = "Subscribed <br> Current plan: $17/month"})

//soundcloud
const soundcloudHeader = document.querySelector("#soundcloud-header")
document.querySelector("#soundcloud5").addEventListener("click" , function() {soundcloudHeader.innerHTML = "Subscribed <br> Current plan: $5/month"})
document.querySelector("#soundcloud10").addEventListener("click" , function() {soundcloudHeader.innerHTML = "Subscribed <br> Current plan: $10/month"})

// twitch
const twitchHeader = document.querySelector("#twitch-header")
document.querySelector("#twitch14").addEventListener("click" , function() {twitchHeader.innerHTML = "Subscribed <br> Current plan: CA$14/month"})

// youtube
const youtubeHeader = document.querySelector("#youtube-header")
document.querySelector("#youtube8").addEventListener("click" , function() {youtubeHeader.innerHTML = "Subscribed <br> Current plan: CA$8/month"})
document.querySelector("#youtube14").addEventListener("click" , function() {youtubeHeader.innerHTML = "Subscribed <br> Current plan: CA$14/month"})
document.querySelector("#youtube23").addEventListener("click" , function() {youtubeHeader.innerHTML = "Subscribed <br> Current plan: CA$23/month"})

// youtube
const kickHeader = document.querySelector("#kick-header")
document.querySelector("#kick5").addEventListener("click" , function() {kickHeader.innerHTML = "Subscribed <br> Current plan: CA$5/month"})
document.querySelector("#kick10").addEventListener("click" , function() {kickHeader.innerHTML = "Subscribed <br> Current plan: CA$10/month"})



// get id for button
//let subscribeButton = document.getElementById("subscribe-btn-SoundCloud");
//let subscribeButtonApple = document.getElementById("subscribe-btn-Apple");

// click event for that button
//subscribeButtonSoundCloud.addEventListener("click", imageSubscribeApp())

function imageSubscribeApp(name)
{   if (name === "soundcloud"){
      imgFilePath = "../images/soundcloud.png";
    }
    else if (name === "spotify"){
      imgFilePath = "../images/spotify.webp"
    }
    else if (name === 'apple') {
      imgFilePath = "../images/applemusic.png"
    }
    else if (name === 'netflix') {
      imgFilePath = "../images/netflix.png"
    }
    else if (name === 'prime') {
      imgFilePath = "../images/amazonicon.png"
    }
    else if (name === 'disney') {
      imgFilePath = "../images/disneyplus.png"
    }
    else if (name === 'twitch') {
      imgFilePath = "..images/twitch.png"
    }
    else if (name === 'youtube') {
      imgFilePath = "../images/youtube.webp"
    }
    else if (name === 'kick') {
      imgFilePath = "../images/kick.png"
    }
    // iterate through each allData object to add src to sub array and remove src from unsub array
    for (let i = 0; i < allData.length; i++)
    {
        // check if app belongs in object by checking media type
        if(allData[i].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub === -1)
            {
                allData[i].subscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub !== -1)
            {
                allData[i].unsubscribed.splice(indexUnsub, 1);
            }
        }
        // check if app belongs in object by checking media type
        if(allData[i].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub === -1)
            {
                allData[i].subscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub !== -1)
            {
                allData[i].unsubscribed.splice(indexUnsub, 1);
            }
        }
          // check if app belongs in object by checking media type
          if(allData[i].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
          {
              // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
              let indexSub = allData[i].subscribed.indexOf(imgFilePath);
              if (indexSub === -1)
              {
                  allData[i].subscribed.push(imgFilePath);
              }
              // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
              let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
              if (indexUnsub !== -1)
              {
                  allData[i].unsubscribed.splice(indexUnsub, 1);
              }
          }
    }
    // iterate through each allLists object array, iterate through listItems object array of objects to add src to sub string array and remove src from unsub string array
    for(let j = 0; j < allLists.length; j++)
    {
        for(let k = 0; k < allLists[j].listItems.length; k++)
        {
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
            {
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub === -1)
                {
                    allLists[j].listItems[k].subscribed.push(imgFilePath);
                }
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub !== -1)
                {
                    allLists[j].listItems[k].unsubscribed.splice(indexUnsub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
            {
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub === -1)
                {
                    allLists[j].listItems[k].subscribed.push(imgFilePath);
                }
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub !== -1)
                {
                    allLists[j].listItems[k].unsubscribed.splice(indexUnsub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
            {
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub === -1)
                {
                    allLists[j].listItems[k].subscribed.push(imgFilePath);
                }
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub !== -1)
                {
                    allLists[j].listItems[k].unsubscribed.splice(indexUnsub, 1);
                }
            }
        }
    }
    // save data
    localStorage.setItem('data', JSON.stringify(allData));
    localStorage.setItem('lists', JSON.stringify(allLists));

    // check apps are in right place
    console.log(allData);
    console.log(allLists);
};


function imageUnsubscribeApp(name)
{   if (name === "soundcloud"){
      imgFilePath = "../images/soundcloud.png";
    }
    else if (name === "spotify"){
      imgFilePath = "../images/spotify.webp"
    }
    else if (name === 'apple') {
      imgFilePath = "../images/applemusic.png"
    }
    else if (name === 'netflix') {
      imgFilePath = "../images/netflix.png"
    }
    else if (name === 'prime') {
      imgFilePath = "../images/amazonicon.png"
    }
    else if (name === 'disney') {
      imgFilePath = "../images/disneyplus.png"
    }
    else if (name === 'twitch') {
      imgFilePath = "..images/twitch.png"
    }
    else if (name === 'youtube') {
      imgFilePath = "../images/youtube.webp"
    }
    else if (name === 'kick') {
      imgFilePath = "../images/kick.png"
    }
    // iterate through each allData object to add src to sub array and remove src from unsub array
    for (let i = 0; i < allData.length; i++)
    {
        // check if app belongs in object by checking media type
        if(allData[i].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub === -1)
            {
                allData[i].unsubscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub !== -1)
            {
                allData[i].subscribed.splice(indexSub, 1);
            }
        }
        // check if app belongs in object by checking media type
        if(allData[i].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub === -1)
            {
                allData[i].unsubscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub !== -1)
            {
                allData[i].subscribed.splice(indexSub, 1);
            }
        }
          // check if app belongs in object by checking media type
          if(allData[i].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
          {
              // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
              let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
              if (indexUnsub === -1)
              {
                  allData[i].unsubscribed.push(imgFilePath);
              }
              // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
              let indexSub = allData[i].subscribed.indexOf(imgFilePath);
              if (indexSub !== -1)
              {
                  allData[i].subscribed.splice(indexSub, 1);
              }
          }
    }
    // iterate through each allLists object array, iterate through listItems object array of objects to add src to sub string array and remove src from unsub string array
    for(let j = 0; j < allLists.length; j++)
    {
        for(let k = 0; k < allLists[j].listItems.length; k++)
        {
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
            {
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allLists[j].listItems[k].unsubscribed.push(imgFilePath);
                }
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allLists[j].listItems[k].subscribed.splice(indexSub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
            {
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allLists[j].listItems[k].unsubscribed.push(imgFilePath);
                }
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allLists[j].listItems[k].subscribed.splice(indexSub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
            {
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allLists[j].listItems[k].unsubscribed.push(imgFilePath);
                }
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allLists[j].listItems[k].subscribed.splice(indexSub, 1);
                }
            }
        }
    }
    // save data
    localStorage.setItem('data', JSON.stringify(allData));
    localStorage.setItem('lists', JSON.stringify(allLists));

    // check apps are in right place
    console.log(allData);
    console.log(allLists);
};

