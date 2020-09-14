timeElements = document.querySelector('.time-list')
typeElements = document.querySelector('.type-list')
startbtn = document.querySelector('.start')
submitbtn = document.querySelector('.submit')
times = document.querySelectorAll('.time')
types = document.querySelectorAll('.type')
outer = document.querySelector('.outer')
random = document.querySelector('#random')
main = document.querySelector('#main')
randomtxt = document.querySelector('#randomtxt')
content = document.querySelector('.content')
img= document.querySelector('.img')
inputText = document.querySelector('.input-text')
testText = document.querySelector('.test-text')
gif= document.querySelector('.gif')
timeStart= document.querySelector('.time-start')
timeStop= document.querySelector('.time-stop')
min= document.querySelector('.min')
sec= document.querySelector('.sec')
texting= document.querySelector('.texting')
timer =document.querySelector('.timer')
result =document.querySelector('.result')
resulttext1 =document.querySelector('#resultText1')
resulttext2 =document.querySelector('#resultText2')
h=document.querySelector('#h')
var time;
var minutes
var wordCount=0

const app = new cons()
const key = '40a04830d2mshabe9414b355c6c4p11095djsnf22fde77863e'
main.style.display='none'
inputText.style.display='none'
result.style.display='none'
timeElements.addEventListener('click',function(e){
    time = e.target.value
    for(i=0;i<4;i++){
        if(e.target===times[i]){
            e.target.classList.add('selected')
        }
        else
        {
            if(times[i].classList.contains('selected'))
            {
            times[i].classList.remove('selected')
            }
        }
    }
    if(time==='10')
    {min.innerHTML=time}
    else
    {min.innerHTML=`0${time}`}
    minutes=Number(time)
    
})

var type;
typeElements.addEventListener('click',function(e){
    type = e.target.value
    for(i=0;i<3;i++){
        if(e.target===types[i]){
            e.target.classList.add('selected')
        }
        else
        {
            if(types[i].classList.contains('selected'))
            {
            types[i].classList.remove('selected')
            }
        }
    }
   
})

startbtn.addEventListener('click',function(e){
    outer.style.display='none'
    gif.style.display='block'
    document.body.style.background = 'white'
    h.textContent=''
    setTimeout(verification,500)
    
})

function verification(){
    document.body.style.background = '#0d3136'
    h.textContent='Typing Test'
    if(type!==undefined && time!==undefined)
    {
    gif.style.display='none'
    main.style.display='flex'
    inputText.style.display='flex'
    //alert('PLEASE START TIME FOR TEST')
    apicall()
    // document.body.style.backgroundColor='blue'
    minutes=Number(time)
    if(minutes<=9){min.innerHTML=`0${minutes}`}
        else{min.innerHTML=minutes}
    }  
    else{
        outer.style.display='flex'
        gif.style.display='none'
        alert('Please enter both TIME and TYPE')
    }

}


 var id=0
 var seconds=60
 let count=0
texting.addEventListener('click',function(e){
    count++
   
    id = window.setInterval(printMsg,1000)   
    texting.removeAttribute('disabled')
                                          
})
timeStop.addEventListener('click',stoping)

let dis=0
function stoping(){
    window.clearInterval(id)
    if(dis===0){
        texting.disabled=true
        timeStop.textContent='Start'
        dis=1
        //console.log('stop')
    }
    else
    {
    if(dis===1){
        texting.disabled=false
        dis=0
        timeStop.textContent='Stop'
        
    }
}
    
}
function printMsg()
{
    
    if(count===1){
        minutes=minutes-1
        if(minutes<=9){min.innerHTML=`0${minutes}`}
        else{min.innerHTML=minutes}
        count++
    }

    seconds--
    if(seconds<=9){sec.innerHTML=`0${seconds}`}
    else{sec.innerHTML=seconds}
   if(seconds===0){
    if(minutes===0 && seconds===0){
        stoping()
        timer.style.color='red'
        timeStop.disabled=true
        result.style.display='flex'
        document.body.style.pointerEvents='none'
        result.style.pointerEvents='all'
        wordCountCalculate()
        accuracy()
        wpm = speed()
        acc = calcAccuracy()
        
        resulttext1.textContent=`WPM : ${wpm}`
        if(isNaN(acc))
        {
        resulttext2.textContent=`Accuracy : ${0}`
        }
        else{
            resulttext2.textContent=`Accuracy : ${acc}`
        }
        
    }else{
       seconds=59
       minutes--
       if(minutes<=9){min.innerHTML=`0${minutes}`}
        else{min.innerHTML=minutes}
        sec.innerHTML=seconds
    }
   }
   
}




function apicall()
{
    texting.value=null
    //words
    if(type==='0'){
        
        app.get("https://wordsapiv1.p.rapidapi.com/words/?random=true",key,"wordsapiv1.p.rapidapi.com",function(err,data){
            if(err)
            {
                alert(err)
            }                                                                                              
            else
            {
                
                let matter0 = data.word.replace(/  +/g, ' ').trim();
                
                testWords = matter0.split(' ')
                injection(matter0)
            }
        })
    }
    else{//sentences
        if(type==='2')
        {
            
            app.get("https://mashape-community-skate-ipsum.p.rapidapi.com/1/1/JSON" ,key,"mashape-community-skate-ipsum.p.rapidapi.com",function(err,data){
               
                if(err)
                {
                    alert(err)
                }
                else
                {
                    //randomtxt.textContent = data
                    let matter0 = data[0].replace(/  +/g, ' ').trim();
                    let matter1 = matter0.split('')
                    let matter2 = matter1.slice(23,80)
                    final = matter2.join('').trim()
                    testWords = final.split(' ')
                    injection(final.trim())
                }
            })

        }
        else{//paragraphs
            
            app.get("https://mashape-community-skate-ipsum.p.rapidapi.com/1/1/JSON" ,key,"mashape-community-skate-ipsum.p.rapidapi.com",function(err,data){
               
                if(err)
                {
                    alert(err)
                }
                else
                {
                    //randomtxt.textContent = data
                    let matter0 = data[0].replace(/  +/g, ' ').trim();
                    let matter1 = matter0.split('')
                    let matter2 = matter1.slice(36,210)
                    final = matter2.join('').trim()
                    testWords = final.split(' ')
                    
                    injection(final.trim())

                }
            })
        }
    }


}


var arrTest
var splitTxt
let chspan
let testWords
function injection(txtContent)
{
    splitTxt=txtContent.split('')
    splitTxt.forEach((character) =>{
        chspan =document.createElement('span')
        chspan.innerText = character
    
        testText.appendChild(chspan)
    })
    
}

texting.addEventListener('input',()=>{
    
    const arrayTest = testText.querySelectorAll('span')
    const arrayLetters = texting.value.split('')
    let correct = true
    arrayTest.forEach((testCharacter,index)=>{
        const inputChar = arrayLetters[index]
        if(inputChar == null)
        {
            
            testCharacter.classList.remove('correct')
            testCharacter.classList.remove('incorrect')
            correct=false
        }
        else {
            if(inputChar === testCharacter.innerText)
            {

            testCharacter.classList.add('correct')
           testCharacter.classList.remove('incorrect')
               correct=true
                
            }
            else{
            
            testCharacter.classList.remove('correct')
            testCharacter.classList.add('incorrect')
            correct=false
            }
        }
        
    })
    
    if(correct){
        wordCountCalculate()
        accuracy()
        apicall()
        testText.innerText=''
    }

})

function funcclose()
{
    result.style.display='none'
    wordCount=0
    correctLettersCount=0
    totalCountLetters=0
    result.style.pointerEvents
    document.body.style.pointerEvents='all'
    main.style.display='none'
    inputText.style.display='none'
    outer.style.display='flex'
    timer.style.color='black'
    stoping()
     id=0
     seconds=60
     count=0
     timeStop.disabled=false
     texting.value=null
     testText.innerText=''
}
function speed()
{
    let T = Number(time)
    return wordCount/T
}

function wordCountCalculate()
{
    const arrayWords = texting.value.split(' ')
    
        testWords.forEach((word,index)=>{
        const testWord = arrayWords[index]
        if(testWord === word)
        {
            wordCount++
            //console.log('yes',wordCount)
        }

    })
}
let correctLettersCount=0
let totalCountLetters=0
function accuracy()
{
    const arrayTest = testText.querySelectorAll('span')
    const arrayLetters = texting.value.split('')
    totalCountLetters = totalCountLetters + arrayLetters.length
    //console.log('totcountletter ',totalCountLetters)
    arrayTest.forEach((letter,index)=>{
        if(letter.classList.contains("correct")){
            correctLettersCount++
        }
        
    })
}
function calcAccuracy(){
    //console.log('correctletter ',correctLettersCount)
    let res=(correctLettersCount/totalCountLetters)*100
    return res.toFixed(2)
}
