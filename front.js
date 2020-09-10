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
var time;
const app = new cons()

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
submitbtn.addEventListener('click',function(){
    if(time===undefined||type===undefined)
    {
        alert('enter details')
    }
    else{
       
        startbtn.removeAttribute('disabled')
        startbtn.classList.add('startbtn')
       
    }

})
startbtn.addEventListener('click',function(){

    outer.style.display='none'
    main.style.display='block'
})

random.addEventListener('click',function(){
  
        console.log('1')
        app.get("https://mashape-community-skate-ipsum.p.rapidapi.com/1/1/JSON",function(err,data){
    if(err){
        console.log(err)
    }
    else{
         //randomtxt.textContent = data
        console.log(data)
    }
})

// "https://wordsapiv1.p.rapidapi.com/sentences/?random=true"--> random words
//"https://baconator-bacon-ipsum.p.rapidapi.com/?sentences=1&paras=0&start-with-lorem=0&type=all-meat" -->sentences
//"https://baconator-bacon-ipsum.p.rapidapi.com/?sentences=0&paras=1&start-with-lorem=0&type=all-meat" -->paragraphs
})