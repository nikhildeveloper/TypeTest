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
gif= document.querySelector('.gif')
timeStart= document.querySelector('.time-start')
timeStop= document.querySelector('.time-stop')
min= document.querySelector('.min')
sec= document.querySelector('.sec')
texting= document.querySelector('.texting')
timer =document.querySelector('.timer')
var time;
var minutes
const app = new cons()
const key = '40a04830d2mshabe9414b355c6c4p11095djsnf22fde77863e'
main.style.display='none'
inputText.style.display='none'
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
    
    setTimeout(verification,500)
    
})

function verification(){

    if(type!==undefined && time!==undefined)
    {
    gif.style.display='none'
    main.style.display='flex'
    inputText.style.display='flex'
    alert('PLEASE START TIME FOR TEST')
    // document.body.style.backgroundColor='blue'
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
timeStart.addEventListener('click',function(e){
    count++
   
    id = window.setInterval(printMsg,1000)   
    texting.removeAttribute('disabled')
                                          
})
timeStop.addEventListener('click',stoping)

function stoping(){
    window.clearInterval(id)
    texting.disabled=true
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
    if(minutes===0 && seconds==0){
        stoping()
        texting.disabled=true
        timer.textContent='Time up'
        timer.style.color='red'
        
    }else{
       seconds=59
       minutes--
       if(minutes<=9){min.innerHTML=`0${minutes}`}
        else{min.innerHTML=minutes}
        sec.innerHTML=seconds
    }
   }
   
}




















// random.addEventListener('click',function(){
//     //words
//     if(type==='0'){
//         app.get("https://wordsapiv1.p.rapidapi.com/words/?random=true",key,"wordsapiv1.p.rapidapi.com",function(err,data){
//             if(err)
//             {
//                 alert(err)
//             }                                                                                              
//             else
//             {
//                 //randomtxt.textContent = data
//                 console.log(data)
//             }
//         })
//     }
//     else{//paragraphs
//         if(type==='1'|| type==='0')
//         {
//             app.get("https://contentai-net-text-generation.p.rapidapi.com/text-generation/api/?category=health-and-medicine",key, "contentai-net-text-generation.p.rapidapi.com",function(err,data){
//                 if(err)
//                 {
//                     alert(err)
//                 }
//                 else
//                 {
//                     //randomtxt.textContent = data
//                     console.log(data)
//                 }
//             })
//         }
//     }

// "https://wordsapiv1.p.rapidapi.com/sentences/?random=true"--> random words
//"https://baconator-bacon-ipsum.p.rapidapi.com/?sentences=1&paras=0&start-with-lorem=0&type=all-meat" -->sentences(meat)
//"https://baconator-bacon-ipsum.p.rapidapi.com/?sentences=0&paras=1&start-with-lorem=0&type=all-meat" -->paragraphs(meat)
//"https://mashape-community-skate-ipsum.p.rapidapi.com/1/1/JSON" -->paragraphs(skate)
// })