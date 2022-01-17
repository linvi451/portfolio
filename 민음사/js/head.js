const searchBtn = document.querySelector(".user .fa-search");
const searchMobile = document.querySelector(".mypage .fa-search");
const closeBtn = document.querySelector(".close");
const search = document.querySelector('#search');


searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    search.style.display ="block";
})
searchMobile.addEventListener('click',(e)=>{
    e.preventDefault();
    search.style.display ="block";
});
closeBtn.addEventListener('click',(e)=>{
    search.style.display ="none";
});
window.addEventListener('click',(e)=>{
    if(e.target == search){
    search.style.display="none";
    }
});
//모바일
const menuBar = document.querySelector('#menu nav');
const navBars = document.querySelectorAll('.gnb>li');
const toggelBtn = document.querySelector('.toggleBtn');
const subs = document.querySelectorAll('.sub');
toggelBtn.addEventListener('click',(e)=>{
   menuBar.classList.toggle('on')
});