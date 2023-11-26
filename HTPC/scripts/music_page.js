let allData = JSON.parse(localStorage.getItem('data'));

function renderContent(title)
{
    console.log(title);
    for (let i = 0; i < allData.length; i++)
    {
        if (allData[i].title === title)
        {
            localStorage.setItem('id2', i);
        }
    }
}

// click handlers to determine which content to render in music description page
document.getElementById('Thriller').addEventListener('click', function() {
    renderContent('Thriller');
});
