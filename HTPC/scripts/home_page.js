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
        unsubscribed:["../images/amazonicon.png", "../images/disneyplus.png"],
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
        unsubscribed:["../images/amazonicon.png", "../images/disneyplus.png"],
    },
    {
        media:"Music",
        title:"Thriller",
        artist:"Michael Jackson",
        year:"30/11/1982",
        ageRating:"Explicit",
        duration:"42m 13s",
        genre:"Pop",
        userRating:"",
        avgRating:"5",
        totalStars:"25",
        totalUserRatings:"5",
        songs:["Wanna Be Startin' Somethin'","Baby Be Mine","The Girl Is Mine (with Paul McCartney)","Thriller","Beat It","Billie Jean","Human Nature","P.Y.T(Pretty Young Thing)","The Lady in My Life"],
        src:"../images/thriller.png",
        subscribed:["../images/spotify.webp", "../images/applemusic.png"],
        unsubscribed:["../images/soundcloud.png"],
    },
    {
        media:"Music",
        title: "Tickets to My Downfall",
        artist: "Machine Gun Kelly",
        year:"2020",
        ageRating:"Explicit",
        duration:"53m",
        genre: "Pop Punk",
        userRating: "",
        avgRating: "1",
        totalStars:"10",
        totalUserRatings:"9",
        songs:["Title Track", "Kiss Kiss", 	"Drunk Face", 	"Bloody Valentine", "Forget Me Too (featuring Halsey)", "All I Know (featuring Trippie Redd)",  "Lonely","WWIII", "Kevin and Barracuda (Interlude)", "Concert for Aliens", "My Ex's Best Friend (featuring Blackbear)", "Jawbreaker"],
        src:"../images/mgk.jpg",
        subscribed:["../images/spotify.webp", "../images/applemusic.png"],
        unsubscribed:["../images/soundcloud.png"],
    },
    {
        media:"Video",
        title: "Messi d'Or - Official Movie",
        description: "Lionel Messi did again: he won the Ballon d'Or for the 8th time. No other player comes close to him. He is the best there is, the best there has been, the best there ever will be!",
        channel: "MessiFans",
        subscriberCount: "5",
        viewCount: "20",
        likeCount: "6",
        userRating: "",
        avgRating: "3",
        totalUserRatings:"9",
        totalStars: "27",
        duration: "6m 45s",
        genre: "Sports",
        src:"../images/messi.jpg",
        subscribed:["../images/youtube.webp"],
        unsubscribed:["../images/twitch.png", "../images/kick.png"],
    },
    {
        media:"Video",
        title: "Lofi Girl",
        description: "Lofi Girl is a French channel and music label established in 2017. It provides livestreams of lo-fi hip hop music 24/7, accompanied by a Japanese-style animation of a girl studying or relaxing.",
        channel: "Lofi Girl",
        subscriberCount:"2",
        viewCount: "10",
        likeCount: "5",
        userRating: "",
        avgRating: "2",
        totalUserRatings:"7",
        totalStars: "14",
        duration: "Live Stream",
        genre: "Music",
        src:"../images/lofigirl.png",
        subscribed:["../images/youtube.webp"],
        unsubscribed:["../images/twitch.png", "../images/kick.png"],
    },
    {
        media:"TV",
        title:"Wednesday",
        description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends - and foes - at Nevermore Academy.",
        year: "2023",
        ageRating: "TV-14",
        tags: ["Mystery", "Comedy", "Thriller"],
        userRating: "",
        avgRating: "4",
        totalUserRatings: "4",
        totalStars: "16",
        season: "1",
        episodes: "8",
        src:"../images/wednesdayposter.jpg",
        subscribed:["../images/netflix.png"],
        unsubscribed:["../images/amazonicon.png", "../images/disneyplus.png"],

    }
];

let allLists = [

];

let allApps = [
    {
        app:"netflix",
        state:"sub",
        plan:"$6/month",
    },
    {
        app:"prime",
        state:"unsub",
        plan:"No Current Plan",
    },
    {
        app:"disney+",
        state:"unsub",
        plan:"No Current Plan",
    },
    {
        app:"spotify",
        state:"sub",
        plan:"$10/month",
    },
    {
        app:"apple",
        state:"sub",
        plan:"$13/month",
    },
    {
        app:"soundcloud",
        state:"unsub",
        plan:"No Current Plan",
    },
    {
        app:"twitch",
        state:"unsub",
        plan:"No Current Plan",
    },
    {
        app:"youtube",
        state:"sub",
        plan:"$8/month",
    },
    {
        app:"kick",
        state:"unsub",
        plan:"No Current Plan",
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
    if(!localStorage.getItem('lists'))
    {
        localStorage.setItem('lists', JSON.stringify(allLists));
        console.log(allData);
    }
    if(!localStorage.getItem('apps'))
    {
        localStorage.setItem('apps', JSON.stringify(allApps));
        console.log(allApps);
    }
});
function clearData() {
    localStorage.removeItem('data');
    localStorage.removeItem('lists');
    localStorage.removeItem('apps');
    localStorage.setItem('data', JSON.stringify(allData));
    localStorage.setItem('lists', JSON.stringify(allLists));
    localStorage.setItem('apps', JSON.stringify(allApps));
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
document.getElementById('wednesday').addEventListener('click', function() {
    renderContent('Wednesday');
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
