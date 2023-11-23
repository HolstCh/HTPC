import moviesData from "./moviesData.js";
import musicData from "./musicData.js";
import videoData from "./videoData.js";
import {renderContent} from "./description_page.js";

// initialize all content data once
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('data'))
    {
        // import movies, music, and videos array of objects
        let allData = [];
        moviesData.forEach(movie =>{allData.push(movie)});
        musicData.forEach(album =>{allData.push(album)});
        videoData.forEach(video =>{allData.push(video)});
        localStorage.setItem('data', JSON.stringify(allData));
    }
});
function clearData() {
    localStorage.removeItem('data');
    let allData = [];
    moviesData.forEach(movie =>{allData.push(movie)});
    musicData.forEach(album =>{allData.push(album)});
    videoData.forEach(video =>{allData.push(video)});
    localStorage.setItem('data', JSON.stringify(allData));
}
document.querySelector('.clear').addEventListener('click', function() {
    clearData();
});

// click handlers to determine which content to render in description page
document.getElementById('spiderman').addEventListener('click', function() {
    renderContent('Spider-Man: Across the Spider-Verse');
});
document.getElementById('guardians').addEventListener('click', function() {
    renderContent('Guardians of the Galaxy Vol. 3');
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
