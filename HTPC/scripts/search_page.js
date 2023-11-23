let allData = JSON.parse(localStorage.getItem('data'));

function updateGenres()
{
    const mediaType = document.getElementById('mediaType').value;
    const genreDropdown = document.getElementById('genreDropdown');
    const genreSelect = document.getElementById('genre');

    genreSelect.innerHTML = '<option value="">-- Select Genre --</option>';

    if (mediaType === 'movie')
    {
        const movieGenres = ['Comedy', 'Action', 'Animation', 'Sci-Fi'];
        movieGenres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.toLowerCase();
            option.textContent = genre;
            genreSelect.appendChild(option);
        });
    }
    else if (mediaType === 'TV')
    {
        const tvShowGenres = ['Drama', 'Mystery', 'Thriller', 'Fantasy'];
        tvShowGenres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.toLowerCase();
            option.textContent = genre;
            genreSelect.appendChild(option);
        });
    }
    else if (mediaType === 'music')
    {
        const tvShowGenres = ['Pop Punk', 'EDM', 'Country', 'Rock', 'Jazz'];
        tvShowGenres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.toLowerCase();
            option.textContent = genre;
            genreSelect.appendChild(option);
        });
    }
    else if (mediaType === 'video')
    {
        const tvShowGenres = ['Sports', 'Gaming', 'Educational'];
        tvShowGenres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.toLowerCase();
            option.textContent = genre;
            genreSelect.appendChild(option);
        });
    }
    genreDropdown.style.display = mediaType ? 'block' : 'none';
}

let avgRatings = [];
function search() {
    const mediaType = document.getElementById('mediaType').value;
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;
    const searchBar = document.getElementById('searchBar').value;

    // Perform search logic based on selected media type, genre, rating, and search query
    console.log('Media Type:', mediaType);
    console.log('Genre:', genre);
    console.log('Rating:', rating);
    console.log('Search Query:', searchBar);

    // Example: Replace this section with actual search logic and results
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    // Display search results
    allData.forEach(item =>
    {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item', 'd-flex');

        // Container for content image
        const contentImageContainer = document.createElement('div');
        contentImageContainer.classList.add('content-image-container', 'mr-4');

        // Content image
        const contentImage = document.createElement('img');
        contentImage.src = item.src;
        contentImage.style.width = "13rem";
        contentImage.style.height = "13rem";
        contentImage.alt = item.title;

        // Append content image to container
        contentImageContainer.appendChild(contentImage);

        // Container for content details
        const contentDetailsContainer = document.createElement('div');
        contentDetailsContainer.classList.add('content-details-container', 'mr-4');

        // Content details
        const contentDetails = document.createElement('div');
        contentDetails.classList.add('content-details');

        avgRatings.push(item.avgRating);
        if (item.media === "movie")
        {
            contentDetails.innerHTML = `
            <h5>${item.title}</h5>
            <div class="avg-rating starsContainer space-x-2">
                <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                <div class="starSearch" style=colors[1]>&#9733;</div>
                <div class="starSearch" style=colors[2]>&#9733;</div>
                <div class="starSearch" style=colors[3]>&#9733;</div>
                <div class="starSearch" style=colors[4]>&#9733;</div>
            </div>
            <p>Genre: ${item.tags[0]}</p>
            <p>Year: ${item.year}</p>
            <p>Duration: ${item.duration}</p>
          `;
        }
        else if(item.media === "music")
        {
            contentDetails.innerHTML = `
            <h5>${item.title}</h5>
            <div class="avg-rating starsContainer space-x-2">
                <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                <div class="starSearch" style=colors[1]>&#9733;</div>
                <div class="starSearch" style=colors[2]>&#9733;</div>
                <div class="starSearch" style=colors[3]>&#9733;</div>
                <div class="starSearch" style=colors[4]>&#9733;</div>
            </div>
            <p>Artist: ${item.artist}</p>
            <p>Genre: ${item.genre}</p>
            <p>Year: ${item.year}</p>
            <p>Duration: ${item.duration}</p>
          `;
        }
        else if(item.media === "video")
        {
            contentDetails.innerHTML = `
            <h5>${item.title}</h5>
            <div class="avg-rating starsContainer space-x-2">
                <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                <div class="starSearch" style=colors[1]>&#9733;</div>
                <div class="starSearch" style=colors[2]>&#9733;</div>
                <div class="starSearch" style=colors[3]>&#9733;</div>
                <div class="starSearch" style=colors[4]>&#9733;</div>
            </div>
            <p>Channel: ${item.channel}</p>
            <p>Genre: ${item.genre}</p>
            <p>Views: ${item.viewCount}</p>
            <p>Likes: ${item.likeCount}</p>
            <p>Duration: ${item.duration}</p>
            `;
        }

        // Append content details to container
        contentDetailsContainer.appendChild(contentDetails);

        // Container for subscribed and unsubscribed apps
        const appsContainer = document.createElement('div');
        appsContainer.classList.add('apps-container', 'text-center');

        // Subscribed apps
        const subscribedAppsContainer = document.createElement('div');
        subscribedAppsContainer.classList.add('subscribed-apps', 'text-center');
        subscribedAppsContainer.innerHTML = `<p class="px-3">Subscribed Apps:</p>`;

        // Append subscribed apps label before app images
        appsContainer.appendChild(subscribedAppsContainer);

        item.subscribed.forEach(src => {
            const imageElement = createAppImage(src, 'subscribedApp');
            subscribedAppsContainer.appendChild(imageElement);
        });

        // Unsubscribed apps
        const unsubscribedAppsContainer = document.createElement('div');
        unsubscribedAppsContainer.classList.add('unsubscribed-apps');
        unsubscribedAppsContainer.innerHTML = `<p class="px-2">Unsubscribed Apps:</p>`;

        // Append unsubscribed apps label before app images
        appsContainer.appendChild(unsubscribedAppsContainer);

        item.unsubscribed.forEach(src => {
            const imageElement = createAppImage(src, 'unsubscribedApp');
            unsubscribedAppsContainer.appendChild(imageElement);
        });

        // Append elements to result item
        resultItem.appendChild(contentImageContainer);
        resultItem.appendChild(contentDetailsContainer);
        resultItem.appendChild(appsContainer);

        // Append result item to result container
        resultContainer.appendChild(resultItem);
        resultsContainer.appendChild(resultContainer);

        console.log(item.title);
        console.log(item.avgRating);
    });
    renderStarColors();
}
    function createAppImage(src, alt) {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.alt = alt;
    imageElement.style.width = "6rem";
    imageElement.style.height = "6rem";
    imageElement.style.cursor = "pointer";

    // Add click event listener
    imageElement.addEventListener('click', function() {
        const location = alt === 'subscribedApp' ? 'streaming_page.html' : 'subscriptions_page_final.html';
        alert(`Image clicked: ${src}`);
        window.location.href = location;
    });

    return imageElement;
}

function renderStarColors()
{
    let colors = [];
    for(let i = 0; i < avgRatings.length; i++)
    {
        colors.push(getColors(avgRatings[i]));
    }

    var starSearchContainers = document.querySelectorAll('.starsContainer');

    // Iterate over each container
    starSearchContainers.forEach(function (container, containerIndex) {
        // Get all child div elements within the container
        var stars = container.querySelectorAll('div');
        // Apply different colors to each star within the set
        stars.forEach(function (star, index) {
            if (colors[containerIndex][index] === '#ffcc00') {
                star.style.color = '#ffcc00';
            }
            else if(colors[containerIndex][index] === '#ccc')
            {
                star.style.color = '#ccc';
            }
        });
    });
}

function getColors(avgRating)
{
    if(avgRating === "1")
    {
        return ['#ffcc00', '#ccc', '#ccc', '#ccc', '#ccc'];
    }
    else if(avgRating === "2")
    {
        return ['#ffcc00', '#ffcc00', '#ccc', '#ccc', '#ccc'];
    }
    else if(avgRating === "3")
    {
        return ['#ffcc00', '#ffcc00', '#ffcc00', '#ccc', '#ccc'];
    }
    else if(avgRating === "4")
    {
        return ['#ffcc00', '#ffcc00', '#ffcc00', '#ffcc00', '#ccc'];
    }
    else if(avgRating === "5")
    {
        return ['#ffcc00', '#ffcc00', '#ffcc00', '#ffcc00', '#ffcc00'];
    }
}

// click handler to handle search results
document.getElementById('searchClick').addEventListener('click', function() {
    search();
});
// click handler to handle search results
document.querySelector('.genreChange').addEventListener('change', function() {
    updateGenres();
});

function openApp(appName) {
    // Replace this with the actual logic to open the app
    alert(`Opening ${appName}`);
}
