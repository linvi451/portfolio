const mainM = document.querySelector('.subMategory');
const mainC = document.querySelectorAll('.mainCategory>li');
const subM = document.querySelectorAll('.subCategory');
const subC = document.querySelectorAll('.subCategory>li');
const allM = document.querySelectorAll('.allCate');
const allC = document.querySelectorAll('.allCate>li');
mainC.forEach((mainc,index)=>mainc.addEventListener('click',()=>{
    mainC.forEach(mainc=>mainc.classList.remove('on'));
    mainc.classList.add('on');
    subM[index].classList.add('on');
}));
subC.forEach((subc,index)=>subc.addEventListener('click',()=>{
    subC.forEach(subc=>subc.classList.remove('on'));
    subc.classList.add('on');
    allM[index].classList.add('on');
}));
allC.forEach(allc=>allc.addEventListener('click',()=>{
    allC.forEach(allc=>allc.classList.remove('on'));
    allc.classList.add('on');

}));
const filter1 = document.querySelectorAll('.filter01>li');
const filter2 = document.querySelectorAll('.filter02>li');
filter1.forEach(fil1=>fil1.addEventListener('click',()=>{
    filter1.forEach(fil1=>fil1.classList.remove('on'));
    fil1.classList.add('on');
}));
filter2.forEach(fil2=>fil2.addEventListener('click',()=>{
    filter2.forEach(fil2=>fil2.classList.remove('on'));
    fil2.classList.add('on');
}));
/*이미지 추가*/
const imgBoxes= document.querySelectorAll('.bigBox >.proImg>img');
imgBoxes.forEach((imgB,index)=>{
    let imgSrc = imgBoxes[index].getAttribute('src');
    let imgN = imgSrc.substring(11,12);
    let i= index;
    if(imgN<=imgBoxes.length-1){
        i++;
        imgBoxes[index].setAttribute('src',`img/product${i}.jpg`);
        imgBoxes[index].setAttribute('alt',`product${i}`);
        
    }else{
        i=1;
    }
}); 
/*클릭시 하트*/
const heartList = document.querySelectorAll('.right>i');
heartList.forEach(heart=>heart.addEventListener('click',()=>{
    heart.classList.toggle('fas');
}));
/*더보기*/
const moreBtn = document.querySelector('.more');
const proBox =document.querySelector('.proBox');
const proList =document.querySelector('.proBox>li');
const proWrap =document.querySelector('.productWrap');
moreBtn.addEventListener('click',()=>{
    addBox();
});
function addBox(){
    //proWrap.append(proBox.cloneNode(true));
    proWrap.append(proBox.cloneNode(true));
};

    