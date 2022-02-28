const menuBtnes = document.querySelectorAll('.menuLine>li');
const tabMenues = document.querySelectorAll('.proMenu>li');
//메뉴 버튼 클릭 시 탭 메뉴 전환
menuBtnes.forEach((menuBtn,index)=>{
  menuBtnes[index].addEventListener('click',()=>{
    tabMenues.forEach(tabMenu=>tabMenu.classList.remove('on'));
    tabMenues[index].classList.add('on');
    console.log(index);
  })
})
//이미지 삽입
const productBoxes = document.querySelectorAll('.product>li');
const productImges = document.querySelectorAll('.proImg>img');
let i = 0; 
productImges.forEach((proImg,index)=>{
  console.log(productImges.length)
  let imgSrc = productImges[index].getAttribute('src');
  let imgNum = imgSrc.substring(0);
  if(imgNum==''){
    if(i >= 24){
      i =0;
    }
    i+=1;
    proImg.setAttribute('src',`img/product/product${i}.jpg`);
    proImg.setAttribute('alt',`product${i}`);
  }
})
const moreBtn = document.querySelector('.productBox>button');