const mainM = document.querySelector('.subMategory');
const mainC = document.querySelectorAll('.mainCategory>li');
const subM = document.querySelectorAll('.subCategory');
const subC = document.querySelectorAll('.subCategory>li');
const allM = document.querySelector('.allCategory');
const allC = document.querySelectorAll('.allCategory>li');
mainC.forEach((main,index)=>main.addEventListener('click',()=>{
    mainC.forEach(main=>main.classList.remove('on'));
    subM.forEach(subm=>subm.classList.remove('on'));
    main.classList.add('on');
    subM[index].classList.add('on');
}));
subC.forEach(sub=>sub.addEventListener('click',()=>{
    subC.forEach(sub=>sub.classList.remove('on'));
    sub.classList.add('on');
    allM.style.display="flex";
}));
allC.forEach(all=>all.addEventListener('click',()=>{
    allC.forEach(all=>all.classList.remove('on'));
    all.classList.add('on');
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

    