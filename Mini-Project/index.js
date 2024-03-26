let posts= [ 
    { userName: 'janeFit',
        url: "https://www.bodybuilding.com/images/2020/february/generic-training-inset-1-700xh.jpg",
        caption: 'asldjng fnoeun ssflnbrotun' 

},
{ userName: 'janeFit',
        url: "https://hips.hearstapps.com/hmg-prod/images/kettlebellswing-1584708644.jpg?resize=980:*",
        caption: 'asldjng fnoeun ssflnbrotun' 

},
{ userName: 'joeyGrind',
        url: "https://hips.hearstapps.com/hmg-prod/images/split-squat-1588600231.jpg?resize=980:*",
        caption: 'asldjng fnoeun ssflnbrotun' 

},
{ userName: 'joeyGrind',
        url: "https://greenhealthycooking.com/wp-content/uploads/2017/09/Lundberg-Rice-Meal-Prep-Image.jpg",
        caption: 'asldjng fnoeun ssflnbrotun' 

},
]
let userName;

function createAccount()    {

userName = document.getElementById('newUserName').value;
window.location.assign('/homepage.html');

}

function loadAccount()    {
window.location.assign('/homepage.html');
}

posts.forEach(post => {if(post.userName == ''){post.userName = userName; loadPosts(post.userName, post.url, post.caption);}else{loadPosts(post.userName, post.url, post.caption);}})
//posts.forEach(post => loadPosts(post.userName, post.url, post.caption));
function loadPosts(name, url, caption){
    let template = document.getElementById('SelfWork-Template').content.cloneNode(true);
    template.querySelector('.card-header').innerText ='@'+ name;
    template.querySelector('.card-img-top').src = url;
    template.querySelector('.card-text').innerText = caption;
    document.querySelector('#post-list').appendChild(template);

}