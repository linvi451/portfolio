const gameBord = document.querySelector('.game-container')
const keybord = document.querySelector('.key-container');
const massageBord = document.querySelector('.massage-container');
/*단어 설정*/
let wordle
const getWordle = ()=>{
  fetch('http://localhost:4500/word')
  .then(response => response.json())
  .then(json =>{
    //console.log(json)
    wordle = json.toUpperCase()
  })
  .catch(err=>console.log(err))
}
getWordle()
/*단어창*/
const wordBlankes= [
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  
]
wordBlankes.forEach((wordBlank,wordIndex)=>{
  const blankRows = document.createElement('div');
  blankRows.setAttribute('id',`blank${wordIndex}`);
  wordBlank.forEach((blank,index)=>{
    const blankElements = document.createElement('div');
    blankElements.setAttribute('id',`blank${wordIndex}-${index}`);
    blankElements.classList.add('blank');
    blankRows.append(blankElements);
  })
  gameBord.append(blankRows)
})
/*칸 설정*/ 
let startRow = 0;
let startBlank = 0;
let isGameOver = false

/* 키보드 설정*/
const keys = [
  'Q','W','E','R','T','Y','U','I','O','P',
  ,'A','S','D','F','G','H','J','K','L','ENTER',
  'Z','X','C','V','B','N','M',"<<"
]

keys.forEach(key=>{
  const buttonElement = document.createElement('button');
  buttonElement.textContent = key;
  buttonElement.setAttribute('id',key);
  buttonElement.addEventListener('click',()=>clicked(key))
  keybord.append(buttonElement);
})

/* 단어 입력 */
const clicked = (letter)=>{
  console.log('clicked!',letter)
  //단어 지우기
  if(letter === "<<"){
    deleteWord()
    return
  }
  if(letter ==="ENTER"){
    check();
    console.log('엔터');
    return
  }
  addLetter(letter)
}
/* 단어 표시 */
const addLetter = (letter)=> {
  if(startBlank<5 && startRow<6){
    const blankNum = document.querySelector(`#blank${startRow}-${startBlank}`);
    blankNum.textContent=letter;
    wordBlankes[startRow][startBlank] = letter;
    blankNum.setAttribute('data',letter);
    startBlank++;
    console.log('wordBlankes',wordBlankes);
    
  }
}
/*단어 지우기*/
const deleteWord = () => {
  if(startBlank>0){
    startBlank--;
    const blankNum = document.querySelector(`#blank${startRow}-${startBlank}`);
    blankNum.textContent ='';
    wordBlankes[startRow][startBlank] = ''; 
    blankNum.setAttribute('data','');
    
  }
}
/* 단어 제출 */
const check  = () => {
  const guess = wordBlankes[startRow].join('');
  console.log('guess',guess)
  if(startBlank >4){
    fetch(`http://localhost:4500/check/?word=${guess}`)
      .then(response=> response.json())
      .then(json=>{
        console.log(json)
        if(json == 'Entry word not found'){
          console.log(json,'적절한 단어가 아닙니다!')
          showMassge('적절한 단어가 아닙니다!');
          massageBord.style.display = "block";
          massageBord.classList.add('on');
          return
        }else{
          console.log(`the answer is... ${wordle}`);
          flipBlank();
          if(wordle == guess){
            showMassge('정답입니다!')
            massageBord.style.display = "block";
            massageBord.classList.add('on');
            isGameOver = true;
            return
          }else{
            if(startRow>=5){
              isGameOver = false;
              showMassge(`게임 오버! 정답은 ${wordle} 입니다!`); 
              massageBord.style.display = "block";
              massageBord.classList.add('on');
              return
            }
            if (startRow < 5){
              startRow++;
              startBlank = 0;
            }
          }
        }
      }).catch(err => console.log(err))
  }
}
//메시지 보이기
const showMassge = (massage) => {
  const massageElement = document.createElement('p');
  massageElement.textContent = massage;
  massageBord.append(massageElement);
  setTimeout(()=>{

    massageBord.style.transition=`${0.2}s`  
    massageBord.style.opacity=`${0}`
  },2000);
} 
/* 타일 색 바꾸기 */
const flipBlank = ()=>{
  const rowTiles = document.querySelector(`#blank${startRow}`).childNodes;
  rowTiles.forEach((tile,index)=>{
    const dataLetter = tile.getAttribute('data');
    setTimeout(()=>{
      tile.classList.add('fliping')
      if(dataLetter == wordle[index]){
        tile.classList.add('green-overlay');
        addColorKey(dataLetter,'green-overlay')
      }else if(wordle.includes(dataLetter)){
        tile.classList.add('yellow-overlay');
        addColorKey(dataLetter,'yellow-overlay')
      }else{
        tile.classList.add('grey-overlay');  
        addColorKey(dataLetter,'grey-overlay')
      }
    },700*index)
  })
}
/* 키보드 색상 */
const addColorKey = (keyLetter, color) =>{
  const key = document.getElementById(keyLetter);
  key.classList.add(color); 
}