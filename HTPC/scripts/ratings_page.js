let allData = JSON.parse(localStorage.getItem('data'));

document.addEventListener('DOMContentLoaded', function ()
{
    const ratingHistoryContainer = document.getElementById('ratingHistory');

    for(let i = 0; i < allData.length; i++)
    {
        if(allData[i].userRating === "")
            continue;
        const ratingCard = createRatingCard(allData[i], i);
        ratingHistoryContainer.appendChild(ratingCard)
    }

    function createRatingCard(data, index) {
        const ratingCard = document.createElement('div');
        ratingCard.classList.add('rating-container');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const contentMedia = document.createElement('h1');
        contentMedia.innerHTML = `<h1>${data.media}</h1>`;

        const contentTitle = document.createElement('h1');
        contentTitle.innerHTML = `<h1>${data.title}</h1>`;


        const contentImageContainer = document.createElement('div');
        contentImageContainer.classList.add('content-image-container', 'mr-4');


        const contentImage = document.createElement('img');
        contentImage.src = data.src;
        contentImage.style.width = "10rem";
        contentImage.style.height = "10rem";
        contentImage.alt = data.title;
        contentImage.style.display = "inline-block";

        // Container for content details
        const contentDetailsContainer = document.createElement('div');
        contentDetailsContainer.classList.add('content-details-container', 'flex', 'items-center', 'justify-between');

        contentDetailsContainer.innerHTML = `
       <div class="avg-rating space-x-2">
            <div class="star" id="star1">&#9733;</div>
            <div class="star" id="star2">&#9733;</div>
            <div class="star" id="star3">&#9733;</div>
            <div class="star" id="star4">&#9733;</div>
            <div class="star" id="star5">&#9733;</div>
        </div>
          `;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete Rating';
        deleteButton.addEventListener('click', function () {
            allData[index].userRating = "";
            localStorage.setItem('data', JSON.stringify(allData));
            ratingCard.remove();
        });
        contentDetailsContainer.appendChild(deleteButton);
        cardBody.appendChild(contentMedia);
        cardBody.appendChild(contentTitle);
        cardBody.appendChild(contentImage);
        cardBody.appendChild(contentDetailsContainer);
        ratingCard.appendChild(cardBody);

        return ratingCard;
    }
});
