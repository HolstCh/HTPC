let allLists = JSON.parse(localStorage.getItem('lists'));
let allData = JSON.parse(localStorage.getItem('data'));

function loadData()
{
    console.log(allLists)
    for(let i = 0; i < allLists.length; i++)
    {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="title-info">
                <a href="./list_contents_page.html">
                    <h2>${allLists[i].title}</h2>
                </a>
            </div>
            <button class="delete-button">X</button>
        `;
        let deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            deleteList(this);
        });

        let container = document.querySelector('.watchlist-items');
        container.appendChild(listItem);
    }

    function deleteList(button)
    {
        let listItem = button.parentNode;
        listItem.remove();
    }
}
document.addEventListener('DOMContentLoaded', function ()
{
    console.log(allLists)
    loadData();

    function handleClick()
    {
        let list = document.querySelector('.newItem');
        let title = list.value;
        let listObject = {
            title: title,
            media: mediaType,
            listItems: [],
        };
        allLists.push(listObject);
        localStorage.setItem('lists', JSON.stringify(allLists));
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="title-info">
                <a href="./list_contents_page.html">
                    <h2>${title}</h2>
                </a>
            </div>
            <button class="delete-button">X</button>
        `;

        let deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            deleteList(this);
        });

        let container = document.querySelector('.watchlist-items');
        container.appendChild(listItem);

        list.value = '';
        console.log(listObject);
    }

    function deleteList(button) {
        let listItem = button.parentNode;
        listItem.remove();
    }

    document.querySelector('.addButton').addEventListener('click', function () {
        handleClick();
    });

    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('dropdown-item')) {
            mediaType = event.target.textContent.trim();
            console.log('Selected value:', mediaType);
        }});
});
