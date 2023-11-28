// load data
document.addEventListener('DOMContentLoaded', function ()
{
    const subscribedApps = document.getElementById('subscribed-apps');
    const unsubscribedApps = document.getElementById('unsubscribed-apps');
    let allData = JSON.parse(localStorage.getItem('data'));
    const storedId2 = localStorage.getItem('id2');
    const id2 = parseInt(storedId2, 10);
    let allLists = JSON.parse(localStorage.getItem('lists'));
    console.log(allData);
    console.log(id2);
    console.log(allData[id2].title);
    console.log(allData[id2].description);
    console.log(allData);
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
    let container = document.querySelector('.songs');
    let div = document.createElement('div');
    let songs = allData[id2].songs;
    div.innerHTML = `<h2>${allData[id2].title} Songs</h2><br>`;
    div.innerHTML += `<ol>`;
    for(let i = 0; i < songs.length; i++)
    {
        div.innerHTML += `<li>${songs[i]}</li>`;
    }
    div.innerHTML += `</ol>`;
    div.classList.add('list-decimal');
    container.appendChild(div);

    document.querySelector('.title').textContent = allData[id2].title;
    document.querySelector('.image').src = allData[id2].src;
    document.querySelector('.artist').textContent = allData[id2].artist;
    document.querySelector('.genre').textContent = allData[id2].genre;
    document.querySelector('.year').textContent = allData[id2].year;
    document.querySelector('.duration').textContent = allData[id2].duration;
    document.querySelector('.totalRatings').textContent = "( " + allData[id2].totalUserRatings + " ratings )";
    allData[id2].subscribed.forEach(addSubscribedApps)
    allData[id2].unsubscribed.forEach(addUnsubscribedApps)
    renderStars();

    const stars = document.querySelectorAll('.user-star');
    if(allData[id2].userRating !== "") {
        handleStars(allData[id2].userRating);
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
            handleStars(allData[id2].userRating);
        });
    });

    function updateRating(currentRating)
    {
        let totalStars = parseInt(allData[id2].totalStars);
        let totalUserRatings = parseInt(allData[id2].totalUserRatings);

        if(allData[id2].userRating === "")
        {
            totalUserRatings = totalUserRatings + 1;
            totalStars += parseInt(currentRating);
            allData[id2].userRating = currentRating;
        }
        else
        {
            totalStars -= allData[id2].userRating;
            totalStars += parseInt(currentRating);
            allData[id2].userRating = currentRating;
        }

        const averageRating = Math.round(totalStars / totalUserRatings);
        allData[id2].totalStars = totalStars.toString();
        allData[id2].totalUserRatings = totalUserRatings.toString();
        console.log("r", allData[id2].totalUserRatings)
        allData[id2].avgRating = averageRating.toString();
        console.log(allData[id2].avgRating);
        allData[id2].userRating = currentRating;
        localStorage.setItem('data', JSON.stringify(allData));
        document.querySelector('.totalRatings').textContent = "( " + allData[id2].totalUserRatings + " ratings" + " )";
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
    function renderStars()
    {
        console.log(allData[id2].avgRating);
        if(allData[id2].avgRating === "1")
        {
            document.querySelector('#star1').style.color = '#ffcc00';
            document.querySelector('#star2').style.color = '#ccc';
            document.querySelector('#star3').style.color = '#ccc';
            document.querySelector('#star4').style.color = '#ccc';
            document.querySelector('#star5').style.color = '#ccc';
        }
        else if(allData[id2].avgRating === "2")
        {
            document.querySelector('#star1').style.color = '#ffcc00';
            document.querySelector('#star2').style.color = '#ffcc00';
            document.querySelector('#star3').style.color = '#ccc';
            document.querySelector('#star4').style.color = '#ccc';
            document.querySelector('#star5').style.color = '#ccc';
        }
        else if(allData[id2].avgRating === "3")
        {
            document.querySelector('#star1').style.color = '#ffcc00';
            document.querySelector('#star2').style.color = '#ffcc00';
            document.querySelector('#star3').style.color = '#ffcc00';
            document.querySelector('#star4').style.color = '#ccc';
            document.querySelector('#star5').style.color = '#ccc';
        }
        else if(allData[id2].avgRating === "4")
        {
            document.querySelector('#star1').style.color = '#ffcc00';
            document.querySelector('#star2').style.color = '#ffcc00';
            document.querySelector('#star3').style.color = '#ffcc00';
            document.querySelector('#star4').style.color = '#ffcc00';
            document.querySelector('#star5').style.color = '#ccc';
        }
        else if(allData[id2].avgRating === "5")
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
            document.querySelector('.spotify-player').classList.remove('hidden');
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
                allLists[i].listItems.push(allData[id2]);
            }
        }
        console.log(allLists);
        localStorage.setItem('lists', JSON.stringify(allLists));
    });
});