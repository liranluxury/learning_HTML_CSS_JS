function get_random_color() 
{
   let color = "";
    for(let i = 0; i < 3; i++) {
       let sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}
let startTime = new Date().getTime();

const makeShareVizible = function(){
    let shape = document.getElementById("shape");
    let top = Math.random() * 400;
    let left = Math.random() * 700;
    let width = Math.random() * 200 + 40;
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = width + "px";

    if(Math.random() < 0.3) {
        shape.style.boderRadius = "50%";
        shape.style.background =  get_random_color();
        shape.style.borderBottom = "0";
    } else  if(Math.random() >= 0.3 && Math.random() <= 0.7 ) {
        shape.style.borderRadius = "0";
        shape.style.background = get_random_color();
        shape.style.borderBottom = "0";
    } else  if(Math.random() > 0.7) {
    shape.style.borderRadius = "0";  
    shape.style.left = "0";
    shape.style.width = "0";
    shape.style.borderLeft = "50px solid transparent";
    shape.style.borderRight = "50px solid transparent";
    shape.style.borderBottom = "100px solid" + get_random_color();
    shape.style.background =  "transparent";
}
shape.style.display = "block";
    startTime = new Date().getTime();
}
setTimeout(makeShareVizible,  Math.random() * 2000);

document.getElementById("shape").onclick = function(){
    let shape = document.getElementById("shape");
    shape.style.display = "none";
    let finishTime = new Date().getTime();
    const reactionTime = (finishTime - startTime) / 1000;
    document.getElementById("reactionTime").innerHTML = reactionTime + " seconds";
    setTimeout(makeShareVizible,  Math.random() * 2000);
}