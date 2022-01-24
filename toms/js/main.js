const newBoxes= document.querySelectorAll('.newBox .proBox>img');
const likeBoxes =document.querySelectorAll('.likeBox .proBox>img');
newBoxes.forEach((newB,index)=>{
    let imgSrc = newBoxes[index].getAttribute('src');
    let imgN = imgSrc.substring(7,8);
    let i= index;
    if(imgN<=newBoxes.length-1){
        i++;
        newBoxes[index].setAttribute('src',`img/new${i}.png`);
        newBoxes[index].setAttribute('alt',`new${i}`);
        
    }else{
        i=1;
    }
});
likeBoxes.forEach((likeB,index)=>{
    let imgSrc = likeBoxes[index].getAttribute('src');
    let imgN = imgSrc.substring(7,8);
    let i= index;
    if(imgN<=likeBoxes.length-1){
        i++;
        likeBoxes[index].setAttribute('src',`img/like${i}.png`);
        likeBoxes[index].setAttribute('alt',`like${i}`);
        
    }else{
        i=1;
    }
});
let count1 =0; //클릭 횟수
let count2 =0; //클릭 횟수
let count3 =0; //클릭 횟수
const newB = document.querySelector('.newBox .wrapBox');
const likeB = document.querySelector('.likeBox .wrapBox');
const proB = document.querySelector('.proBox');
const proW = proB.clientWidth;
console.log(proW);
const newPrev= document.querySelector('.newBox .prev');
const newNext= document.querySelector('.newBox .next');
const likePrev= document.querySelector('.likeBox .prev');
const likeNext= document.querySelector('.likeBox .next');
newPrev.addEventListener('click',()=>{
    moveLeft();
});
newNext.addEventListener('click',()=>{
    moveRight();
});
likePrev.addEventListener('click',moveLeft2);
likeNext.addEventListener('click',moveRight2);

//newPrev
function moveLeft(){
    count1--;
    if(count1<0){
        count1=0;
    }
        newB.style.transform=`translateX(${proW*(-count1)}px)`;
        newB.style.transition=`${0.5}s`;
}
//newNext
function moveRight(){
    count1++;
         if(count1>3){
             count1=3;
         }
            newB.style.transform=`translateX(${-(proW*count1)}px)`;
            newB.style.transition=`${0.5}s`;
}
//like
function moveLeft2(){
    count2--;
    if(count2<0){
        count2=0;
    }
        likeB.style.transform=`translateX(${proW*(-count2)}px)`;
        likeB.style.transition=`${0.8}s`;
}
function moveRight2(){
    count2++;
         if(count2>3){
             count2=3;
         } 
            likeB.style.transform=`translateX(${-(proW*count2)}px)`;
            likeB.style.transition=`${0.5}s`;
}
//promo

const showBox = document.querySelector('.imgWrap>.show');
const imgBoxes = document.querySelectorAll('.imgBox');
const imgB = document.querySelector('.imgBox');
const imgbW = imgB.getBoundingClientRect().width;
const prevBtn= document.querySelector('.smallBox2>.prev');
const nextBtn= document.querySelector('.smallBox2>.next');
prevBtn.addEventListener('click',()=>{
    count3--;
    if(count3<0){
        count3=0;
    }
        showBox.style.transform=`translateX(${((imgbW+10)*(-count3*2))}px)`;
        showBox.style.transition=`${0.5}s`;
    });

nextBtn.addEventListener('click',()=>{
    count3++;
    if(count3>(imgBoxes.length-1)/2){
        count3=((imgBoxes.length/2)-1);
    }
        showBox.style.transform=`translateX(${-((imgbW+10)*(count3*2))}px)`;
        showBox.style.transition=`${0.8}s`;  
});