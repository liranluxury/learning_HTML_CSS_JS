// document.getElementById("header").innerHTML = "What is the DOM?";
// let a = document.getElementsByClassName("firstThreeElements");
// console.log(a);
// console.log(a[1].innerHTML);
console.log(document.getElementsByTagName("li")[1].innerHTML);
console.log(document.getElementsByTagName("li")[2].innerHTML);
console.log(document.querySelectorAll(".firstThreeElements")[2]);
// console.log(document.getElementsByTagName("body")[0]);

// console.log(document.querySelector("#header").innerHTML);
// document.querySelector("#header").innerHTML = "AAAAAAAAAAA";
// console.log(document.querySelector("#header").innerHTML);
// console.log(document.querySelectorAll(".firstThreeElements"));

const li3 = document.getElementById("thirdElement");
// li3.style.color = "red";
// li3.style.fontSize = " 40px";
// li3.classList.add("stylish");
li3.classList.toggle("stylish");

const image = document.getElementsByTagName("img");
image[0].getAttribute("src");
image[0].setAttribute("src", "images/IMG_0042.jpg");

const link = document.getElementsByTagName("a");
link[0].getAttribute("href");
link[0].setAttribute("href", "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence");

const h1 = document.getElementById("header");
console.log(h1.innerHTML);

h1.addEventListener("click", function() {
    this.style.color = "pink";
});
h1.addEventListener("click", function() {
    this.style.fontFamily = "Arial";
});

const liElements = document.querySelectorAll("li");
console.log(liElements);

for(let i = 0; i < liElements.length; i++){
    liElements[i].addEventListener("click", function(){
        this.style.color = "green";
    });
}

const button = document.querySelector("button");

const isBackgroundApply = 0;

button.addEventListener("click", function(){
    if (isBackgroundApply === 0){
        document.querySelector("body").style.background = "blue";
        isBackgroundApply = 1;
    } else {
            document.querySelector("body").style.background = "white";
            isBackgroundApply = 0;
        }
    });
