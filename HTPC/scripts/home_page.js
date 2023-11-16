const moviesData = [
    {
        title: "Spider-Man: Across the Spider-Verse",
        description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
        tags: ["Animation", "Action", "Adventure"],
        src:"../images/spiderverse-poster.jpg",
        subscribed:"",
        unsubscribed:"",
    },
];

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