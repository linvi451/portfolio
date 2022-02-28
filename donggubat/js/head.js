//메뉴 클릭 이벤트
const menuBtn = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
menuBtn.addEventListener('click',()=>{
  let menuH = menu.clientHeight;
  let menuSh = menu.scrollHeight;
  if(menuH != menuSh){
    menu.style.height = `${menu.scrollHeight}px`;
    menu.style.transition = `${0.5}s`;
  }else{
    menu.style.height = `${0}px`;
    menu.style.transition = `${0.5}s`;
  }
})
/* 검색버튼 클릭 이벤트*/
const searctBtn = document.querySelector('#search');
const search = document.querySelector('#searchBox');
searctBtn.addEventListener('click',()=>{
  search.style.display = "block";
})
search.addEventListener('click',(e)=>{
  if(e.target == search){
    search.style.display="none";
  }
})