
txt = document.querySelector('p')

inputs = JSON.parse(localStorage.getItem('inputs'))
console.log(inputs[0].time)
txt.textContent = inputs[0].time
if(inputs[0].time===undefined||inputs[0].type===undefined)
{
    alert('please go back and enter !!')
}