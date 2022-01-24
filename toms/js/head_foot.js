//footer Menu
const footMenu = document.querySelector('#foot .footMain');
const footBtn = document.querySelector('#foot>.up');
footBtn.addEventListener('click',()=>{
    footBtn.classList.toggle('on');
    footMenu.classList.toggle('on');
});