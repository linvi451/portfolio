
//신간&인기도서
const newBtn1 = document.querySelector('#bookSlide .bookBtn:first-child');
const newBtn2 = document.querySelector('#bookSlide .bookBtn:nth-child(2)');
const bookBest = document.querySelector('.bookBest');
const bookNew = document.querySelector('.bookNew');
newBtn1.addEventListener('click',()=>{
    newBtn2.classList.remove('clicked');
    newBtn1.classList.add('clicked');
    bookNew.classList.add('show');
    bookBest.classList.remove('show');
});
newBtn2.addEventListener('click',()=>{
    newBtn2.classList.add('clicked');
    newBtn1.classList.remove('clicked');
    bookNew.classList.remove('show');
    bookBest.classList.add('show');
});

//신간도서
const bookNew2 = document.querySelectorAll('.bookNew>li');
const bookBest2 = document.querySelectorAll('.bookBest>li');
bookNew2.forEach(newBook=>newBook.addEventListener('click',function(e){
    e.preventDefault();
    bookNew2.forEach(newBook=>newBook.classList.remove('selected'));
    newBook.classList.add('selected');
}));
bookBest2.forEach(best=>best.addEventListener('click',function(e){
    e.preventDefault();
    bookBest2.forEach(best=>best.classList.remove('selected'));
    best.classList.add('selected');
}));


//category
const genres = document.querySelectorAll('.genre>li');
genres.forEach(genre=>genre.addEventListener('click',(e)=>{
    e.preventDefault();
    genres.forEach(genre=>genre.classList.remove('check'));
    genre.classList.add('check');
}));



