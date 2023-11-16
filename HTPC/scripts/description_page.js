const descriptionData = JSON.parse(localStorage.getItem('descriptionData'));
if (descriptionData !== null)
{
    console.log(descriptionData.title);
    console.log(descriptionData.description);
    document.querySelector('.title').textContent = descriptionData.title;
    document.querySelector('.description').textContent = descriptionData.description;
}