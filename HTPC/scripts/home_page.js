let allData = [
    {
        media:"Movie",
        title: "Spider-Man: Across the Spider-Verse",
        description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
        year: "2023",
        ageRating:"PG-13",
        duration:"2h 20m",
        tags: ["Animation", "Action", "Adventure"],
        userRating: "",
        avgRating: "4",
        totalUserRatings:"2",
        totalStars:"8",
        src:"../images/spiderverse-poster.jpg",
        subscribed:["../images/netflix.png"],
        unsubscribed:["../images/amazonicon.png", "../images/appletv.png"],
    },
    {
        media:"Movie",
        title: "Guardians of the Galaxy Vol. 3",
        description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
        year: "2023",
        ageRating:"PG-13",
        duration:"2h 30m",
        tags: ["Comedy", "Action", "Adventure"],
        userRating: "",
        avgRating: "3",
        totalUserRatings:"3",
        totalStars:"9",
        src:"../images/Guardians_of_the_Galaxy_Vol._3_poster.jpg",
        subscribed:["../images/netflix.png"],
        unsubscribed:["../images/amazonicon.png", "../images/appletv.png"],
    },
    {
        media:"Music",
        title: "Tickets to My Downfall (SOLD OUT Deluxe)",
        artist: "Machine Gun Kelly",
        year:"2020",
        ageRating:"Explicit",
        duration:"53m",
        genre: "Pop Punk",
        userRating: "1",
        avgRating: "1",
        totalStars:"1",
        totalRatings:"(20,000 ratings)",
        songs:["kiss kiss","drunk face","Concert for Aliens", "Forget Me Too"],
        src:"../images/mgk.jpg",
        subscribed:["../images/spotify.png"],
        unsubscribed:["../images/soundcloud.png"],
    },
    {
        media:"Video",
        title: "Messi d'Or - Official Movie",
        description: "Lionel Messi did again: he won the Ballon d'Or for the 8th time. No other player comes close to him. He is the best there is, the best there has been, the best there ever will be!",
        channel: "MessiFans",
        subscriberCount:"44,467",
        viewCount: "234,435",
        likeCount:"89,989",
        userRating: "3",
        avgRating: "3",
        totalRatings:"(35,445 ratings)",
        duration: "6m 45s",
        genre: "Sports",
        src:"../images/messi.jpg",
        subscribed:["../images/youtube.webp"],
        unsubscribed:["../images/twitch.png"],
    },
];

// initialize all content data once
document.addEventListener('DOMContentLoaded', function ()
{
    if (!localStorage.getItem('data'))
    {
        localStorage.setItem('data', JSON.stringify(allData));
        console.log(allData);
    }
});
function clearData() {
    localStorage.removeItem('data');
    localStorage.setItem('data', JSON.stringify(allData));
}
document.querySelector('.clear').addEventListener('click', function() {
    clearData();
});

function renderContent(title)
{
    console.log(title);
    for (let i = 0; i < allData.length; i++)
    {
        if (allData[i].title === title)
        {
            localStorage.setItem('id', i);
        }
    }
}
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
