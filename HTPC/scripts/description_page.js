const descriptionData = JSON.parse(localStorage.getItem('descriptionData'));
const subscribedApps = document.getElementById('subscribed-apps');
const unsubscribedApps = document.getElementById('unsubscribed-apps');
if (descriptionData !== null)
{
    console.log(descriptionData.title);
    console.log(descriptionData.description);
    document.querySelector('.title').textContent = descriptionData.title;
    document.querySelector('.description').textContent = descriptionData.description;
    document.querySelector('#description-poster').src = descriptionData.src;
    document.querySelector('.tag1').textContent = descriptionData.tags[0];
    document.querySelector('.tag2').textContent = descriptionData.tags[1];
    document.querySelector('.tag3').textContent = descriptionData.tags[2];
    document.querySelector('.year').textContent = descriptionData.year;
    document.querySelector('.ageRating').textContent = descriptionData.ageRating;
    document.querySelector('.duration').textContent = descriptionData.duration;
    document.querySelector('.totalRatings').textContent = descriptionData.totalRatings;
    descriptionData.subscribed.forEach(addSubscribedApps)
    descriptionData.unsubscribed.forEach(addUnsubscribedApps)
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