
const navTxt = document.querySelector("nav");
const main = document.getElementById('main');

window.addEventListener('scroll',()=>{
    let winTop = window.pageYOffset;
    let mainHeight = main.offsetHeight;
    if(winTop<mainHeight){
         navTxt.classList.remove('change');
    }else{
        navTxt.classList.add('change');
    }
    console.log(mainHeight);
});
const boxes = document.querySelectorAll('.boxwrap>.box');
const links = document.querySelectorAll('.smallBox>a');
boxes.forEach((box,index)=>box.addEventListener('mouseover',()=>{
    //box.classList.remove('on');
    box.classList.add('on');
    links.forEach(link=>{
        links[index].classList.add('on');
    });
}));
boxes.forEach((box,index)=>box.addEventListener('mouseout',()=>{
    boxes[index].classList.remove('on');
    links.forEach(link=>{
        links[index].classList.remove('on');
    });
}));
boxes.forEach((box,index)=>box.addEventListener('click',()=>{
    boxes.forEach(box=>box.classList.remove('selected'));
    box.classList.add('selected');
    links.forEach(link=>{
        links[index].classList.add('on');
    });
}));
const work = document.querySelector('#work');
window.addEventListener('click',(e) =>{
    if(e.target == work){
        boxes.forEach(box=>box.classList.remove('selected'));
    }
})
//메뉴 스크롤
let count = 0;
const menuArr = Array.prototype.slice.call(document.querySelectorAll('nav>a'));
const sectionArr = Array.prototype.slice.call(document.querySelectorAll('section'))
menuArr.forEach((menu,index)=>menu.addEventListener('click',(e)=>{
    e.preventDefault();
    count=index;
    let secTop = window.pageYOffset + sectionArr[count].getBoundingClientRect().top;
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top:secTop
    })

}));
//전체 스크롤
const sections = document.querySelectorAll('section');
sections.forEach(section=>section.addEventListener('mousewheel',scrolling));
function scrolling(e){
    e.preventDefault();
    let delta = e.wheelDelta;
    let i = sectionArr.indexOf(this);
    if(delta<0){//마우스 휠을 올린 경우
        let el;
        (i<sections.length-1)?el =this.nextElementSibling : el = this;
        //현재 마우스를 이벤트가 발생된 요소의 순번 (i)이 article요소의 갯수-1 보다 작으면 this의 다음요소를 , 그렇지 않으면 this 를 변수 el 에 저장
        let elTop = window.pageYOffset + el.getBoundingClientRect().top;
        //el 요소의 y축 절대 좌표값을 elTop 변수에 할당;
        window.scrollTo({
            //window 에 srcollTo API를 이용하여 elTop 위치로 부드럽게 스크롤 이동.
             behavior:"smooth",
             left:0,
             top:elTop
        });
    }else if(delta>0){
        let el;
        (i>0)? el = this.previousElementSibling : el =this; 
        //i가 0보다 크면 this의 이전요소를 , 0보다 작으면 this를 el 변수에 저장.
        let elTop = window.pageYOffset + el.getBoundingClientRect().top;
        //el 요소의 y축 절대 좌표값을 elTop 변수에 할당;
        window.scrollTo({
            //window 에 srcollTo API를 이용하여 elTop 위치로 부드럽게 스크롤 이동.
             behavior:"smooth",
             left:0,
             top:elTop
        });
    }
}