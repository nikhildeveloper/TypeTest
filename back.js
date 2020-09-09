
txt = document.querySelector('p')

inputs = JSON.parse(sessionStorage.getItem('inputs'))
console.log(inputs[0].time)
txt.textContent = inputs[0].time
if(inputs[0].time===undefined||inputs[0].type===undefined)
{
    alert('please go back and enter !!')
    var blurDiv = document.createElement("div");
    blurDiv.id = "blurDiv";
    blurDiv.style.cssText = "position:absolute; top:0; right:0; width:" + screen.width + "px; height:" + screen.height + "px; background-color: #000000; opacity:0.5; filter:alpha(opacity=50)";
     
    document.getElementsByTagName("body")[0].appendChild(blurDiv);
}