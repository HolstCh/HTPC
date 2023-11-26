const subscribedApps = document.getElementById('subscribed-apps');
const unsubscribedApps = document.getElementById('unsubscribed-apps');
const storedId = localStorage.getItem('id');
const id = parseInt(storedId, 10);
let allData = JSON.parse(localStorage.getItem('data'));
let allLists = JSON.parse(localStorage.getItem('lists'));

// load data
document.addEventListener('DOMContentLoaded', function ()
{
    console.log(allLists);
    if(allLists)
    {
        for(let i = 0; i < allLists.length; i++)
        {
            let listDropdown = document.querySelector('.dropdown-menu');
            listDropdown.innerHTML += `
        <div class="dropdown-item" onClick="handleItemClick('${allLists[i].title}')">${allLists[i].title}</div>
        `;
            document.querySelector('.list-type').textContent= allLists[i].title;
        }
    }
    console.log(allData[id].title);
    console.log(allData[id].description);
    console.log(allData);
    document.querySelector('.title').textContent = allData[id].title;
    document.querySelector('.description').textContent = allData[id].description;
    document.querySelector('#description-poster').src = allData[id].src;
    document.querySelector('.tag1').textContent = allData[id].tags[0];
    document.querySelector('.tag2').textContent = allData[id].tags[1];
    document.querySelector('.tag3').textContent = allData[id].tags[2];
    document.querySelector('.year').textContent = allData[id].year;
    document.querySelector('.ageRating').textContent = allData[id].ageRating;
    document.querySelector('.duration').textContent = allData[id].duration;
    document.querySelector('.totalRatings').textContent = "( " + allData[id].totalUserRatings + " ratings )";
    allData[id].subscribed.forEach(addSubscribedApps)
    allData[id].unsubscribed.forEach(addUnsubscribedApps)
    renderStars();

    const stars = document.querySelectorAll('.user-star');
    if(allData[id].userRating !== "") {
        handleStars(allData[id].userRating);
    }

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            handleStars(value);
            updateRating(value);
        });

        star.addEventListener('mouseover', function () {
            const value = this.getAttribute('data-value');
            handleStars(value);
        });

        star.addEventListener('mouseout', function () {
            handleStars(allData[id].userRating);
        });
    });

    function updateRating(currentRating)
    {
        let totalStars = parseInt(allData[id].totalStars);
        let totalUserRatings = parseInt(allData[id].totalUserRatings);

        if(allData[id].userRating === "")
        {
            totalUserRatings = totalUserRatings + 1;
            totalStars += parseInt(currentRating);
            allData[id].userRating = currentRating;
        }
        else
        {
            totalStars -= allData[id].userRating;
            totalStars += parseInt(currentRating);
            allData[id].userRating = currentRating;
        }

        const averageRating = Math.round(totalStars / totalUserRatings);
        allData[id].totalStars = totalStars.toString();
        allData[id].totalUserRatings = totalUserRatings.toString();
        allData[id].avgRating = averageRating.toString();
        console.log(allData[id].avgRating);
        allData[id].userRating = currentRating;
        localStorage.setItem('data', JSON.stringify(allData));
        document.querySelector('.totalRatings').textContent = "( " + totalUserRatings + " ratings" + " )";
        renderStars();
    }
    function handleStars(value) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});

function renderStars()
{
    console.log(allData[id].avgRating);
    if(allData[id].avgRating === "1")
    {
        document.querySelector('#star1').style.color = '#ffcc00';
        document.querySelector('#star2').style.color = '#ccc';
        document.querySelector('#star3').style.color = '#ccc';
        document.querySelector('#star4').style.color = '#ccc';
        document.querySelector('#star5').style.color = '#ccc';
    }
    else if(allData[id].avgRating === "2")
    {
        document.querySelector('#star1').style.color = '#ffcc00';
        document.querySelector('#star2').style.color = '#ffcc00';
        document.querySelector('#star3').style.color = '#ccc';
        document.querySelector('#star4').style.color = '#ccc';
        document.querySelector('#star5').style.color = '#ccc';
    }
    else if(allData[id].avgRating === "3")
    {
        document.querySelector('#star1').style.color = '#ffcc00';
        document.querySelector('#star2').style.color = '#ffcc00';
        document.querySelector('#star3').style.color = '#ffcc00';
        document.querySelector('#star4').style.color = '#ccc';
        document.querySelector('#star5').style.color = '#ccc';
    }
    else if(allData[id].avgRating === "4")
    {
        document.querySelector('#star1').style.color = '#ffcc00';
        document.querySelector('#star2').style.color = '#ffcc00';
        document.querySelector('#star3').style.color = '#ffcc00';
        document.querySelector('#star4').style.color = '#ffcc00';
        document.querySelector('#star5').style.color = '#ccc';
    }
    else if(allData[id].avgRating === "5")
    {
        document.querySelector('#star1').style.color = '#ffcc00';
        document.querySelector('#star2').style.color = '#ffcc00';
        document.querySelector('#star3').style.color = '#ffcc00';
        document.querySelector('#star4').style.color = '#ffcc00';
        document.querySelector('#star5').style.color = '#ffcc00';
    }
}

function addSubscribedApps(src) {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.alt = 'subscribedApp';
    imageElement.style.width = "6rem";
    imageElement.style.height = "6rem";
    imageElement.style.cursor = "pointer";
    imageElement.addEventListener('click', function() {
        alert('Image clicked: ' + src);
        window.location.href = "streaming_page.html";
    });
    subscribedApps.appendChild(imageElement);
}

function addUnsubscribedApps(src) {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.alt = 'unsubscribedApp';
    imageElement.style.width = "6rem";
    imageElement.style.height = "6rem";
    imageElement.style.cursor = "pointer";
    imageElement.addEventListener('click', function() {
        alert('Image clicked: ' + src);
        window.location.href = "subscriptions_page_final.html";
    });
    unsubscribedApps.appendChild(imageElement);
}

function handleItemClick(item) {
    document.querySelector('.list-type').textContent= item;
}

let content = document.querySelector('.addListItem');
content.addEventListener('click', function() {
    for(let i = 0; i < allLists.length; i++)
    {
        if(allLists[i].title === document.querySelector('.list-type').textContent)
        {
            allLists[i].listItems.push(allData[id]);
        }
    }
    localStorage.setItem('lists', JSON.stringify(allLists));
});
