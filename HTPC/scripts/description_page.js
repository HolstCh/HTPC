const subscribedApps = document.getElementById('subscribed-apps');
const unsubscribedApps = document.getElementById('unsubscribed-apps');
const storedId = localStorage.getItem('id');
const id = parseInt(storedId, 10);

let allData = JSON.parse(localStorage.getItem('data'));

// find id of content
export function renderContent(title)
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

// load data
document.addEventListener('DOMContentLoaded', function ()
{
    console.log(allData[id].title);
    console.log(allData[id].description);
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
    document.querySelector('.selectedItem').textContent= item;
}

document.addEventListener('DOMContentLoaded', function ()
{
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    let previousRating = 0;
    let hasClicked = false;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            updateRating(value);
        });

        star.addEventListener('mouseover', function () {
            const value = this.getAttribute('data-value');
            highlightStars(value);
        });

        star.addEventListener('mouseout', function () {
            const value = this.getAttribute('data-value');
            highlightStars(value);
        });
    });

    function updateRating(currentRating)
    {
        let totalStars = parseInt(allData[id].totalStars);
        let totalUserRatings = parseInt(allData[id].totalUserRatings);
        if(hasClicked === false)
        {
            totalUserRatings = totalUserRatings + 1;
            totalStars += parseInt(currentRating);
            previousRating = currentRating;
            hasClicked = true;
        }
        else
        {
            totalStars -= previousRating;
            totalStars += parseInt(currentRating);
            previousRating = currentRating;
        }

        const averageRating = Math.round(totalStars / totalUserRatings);
        allData[id].totalStars = totalStars.toString();
        allData[id].totalUserRatings = totalUserRatings.toString();
        allData[id].avgRating = averageRating.toString();
        allData[id].userRating = currentRating.toString();
        localStorage.setItem('data', JSON.stringify(allData));
        document.querySelector('.totalRatings').textContent = "( " + totalUserRatings + " ratings" + " )";
        highlightStars(currentRating);
        renderStars();
    }

    function highlightStars(value) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});