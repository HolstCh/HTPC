import moviesData from "./moviesData.js";

// save movie object to local storage to be rendered
function saveDescriptionData(title)
{
    console.log(title);
    for (let i = 0; i < moviesData.length; i++)
    {
        if (moviesData[i].title === title)
        {
            localStorage.setItem('descriptionData', JSON.stringify(moviesData[i]));
        }
    }
}
// click handlers to overwrite movie object in localstorage
document.getElementById('spiderman').addEventListener('click', function() {
    saveDescriptionData('Spider-Man: Across the Spider-Verse');
});

const content = document.querySelector('.content');
const leftArrow1 = document.getElementById('left-arrow1');
const rightArrow1 = document.getElementById('right-arrow1');
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');
const leftArrow3 = document.getElementById('left-arrow3');
const rightArrow3 = document.getElementById('right-arrow3');

leftArrow1.addEventListener('click', () => {
    content.scrollLeft -= 200; // Adjust the scroll distance as needed
});

rightArrow1.addEventListener('click', () => {
    content.scrollLeft += 200; // Adjust the scroll distance as needed
});

leftArrow2.addEventListener('click', () => {
    content.scrollLeft -= 200; // Adjust the scroll distance as needed
});

rightArrow2.addEventListener('click', () => {
    content.scrollLeft += 200; // Adjust the scroll distance as needed
});

leftArrow3.addEventListener('click', () => {
    content.scrollLeft -= 200; // Adjust the scroll distance as needed
});

rightArrow3.addEventListener('click', () => {
    content.scrollLeft += 200; // Adjust the scroll distance as needed
});