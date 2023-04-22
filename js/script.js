/* JavaScript код */
'use strict';

let viewButtons = document.querySelectorAll('.card-view-button');
let themeButtons = document.querySelectorAll('.theme-button');

const courses = document.querySelector('.cards');

const cards = document.querySelectorAll('.cards-item');
const sortItems = document.querySelectorAll('.sort-item');

for (let viewButton of viewButtons) {
  viewButton.addEventListener('click', function(){
    document.querySelector('.card-view-buttons .active').classList.remove('active');
    viewButton.classList.add('active');
    courses.className = 'cards';
    courses.classList.add(viewButton.dataset.settingValue);
  });
}

for (let themeButton of themeButtons) {
  themeButton.addEventListener('click', function(){
    document.querySelector('.theme-list .active').classList.remove('active');
    themeButton.classList.add('active');
    document.documentElement.dataset['themeName'] = themeButton.dataset.settingValue;
  });
}

for (let sortItem of sortItems) {
  sortItem.addEventListener('click', function(){
  const order = [...cards].sort( function (a, b) {
  let raitingA = +a.querySelector(sortItem.dataset.sort).innerHTML;
  let raitingB = +b.querySelector(sortItem.dataset.sort).innerHTML;

  return raitingB - raitingA;
});
  for (let i = 0; i < order.length; i++){
    order[i].style.order = i;
  }
});
}

let hashtags = document.querySelectorAll('.hashtag')
for(let hashtag of hashtags){
  hashtag.addEventListener('click', function(){
    for(let card of cards){
      card.classList.remove('visually-hidden')
    }
    if(hashtag.innerText.toLowerCase() == 'all'){
      return;
    }
    for(let card of cards){
      let cardHashtag =card.dataset.hashtag.toLowerCase().split(/[ ,]+/)
      if(cardHashtag.includes(hashtag.innerText.toLowerCase())){
      }
      else{
        card.classList.add('visually-hidden');
      }
    }
});
}
/* let search = document.querySelector('#search');
search.addEventListener('input', function(event){
  for(let card of cards){
    card.classList.remove('visually-hidden');
  }
  for(let card of cards){
    if(card.innerText.toLowerCase().includes(search.value.toLowerCase())){

    }
    else{
      card.classList.add('visually-hidden')
    }
  }
}) */