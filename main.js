let button = document.querySelector('#button');
let hackerNewsItems = document.querySelector('#hackerNewsItems');
let hackerTitle = document.querySelector('#hackerTitle');
let hackerBy = document.querySelector('#hackerBy');
let hackerScore = document.querySelector('#hackerScore');
let hackerDes = document.querySelector('#hackerDes');



button.addEventListener('click', () => {
let getTopNewStories = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();
    console.log(data);
    for(let i = 0; i < 100;i++){

    let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
    let storyData = await storyResponse.json();
    console.log(storyData);

    hackerNewsItems.innerHTML +=`
    <div class = "card text-bg-light mb-3"> Title Of Article 
    <h5> <a href=${storyData.url}> ${storyData.hackerTitle}</a> </h5>
    Author: ${storyData.hackerBy}
    <div class="card-subtitle mb-2 text-muted">
     Score: ${storyData.hackerScore} 
     Comments: ${storyData.hackerDes}
    </div>`
}

}
getTopNewStories();
})
// IF YOU CLICK ON THE UNDEFINED LINKS IT WILL TAKE YOU TO THE DIFFERENT ARTICLES I COULDN'T FIGURE OUT HOW TO CHANGE
//THAT SO THAT EACH ARTICLE TITLE SHOWS UP!!!!!