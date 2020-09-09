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
        console.log(startbtn)
    }

})
startbtn.addEventListener('click',function(){

    outer.style.display='none'
    main.style.display='block'
})

random.addEventListener('click',function(){
  
        
        
        
    
        app.get('http://api.quotable.io/random',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        randomtxt.textContent = data.content
    }
})

    
})