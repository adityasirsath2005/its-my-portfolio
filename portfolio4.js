let a=setTimeout(function(){
const image = document.createElement("img")
const name=document.createElement("h1")
//image.src = "C:\Users\Desktop\HTML.html\JS\devloperpng1.jpg"
image.src = "1757854216260.jpg"
image.alt = "devloper png"
image.width="280"
//image.height="400"
image.style.borderRadius="50%px";
image.style.border="3px solid #38bdf8"
image.style.position="relative"
image.style.marginLeft="1230px"
image.style.top="-1657px"
name.innerText="Hello  I am Aditya"
name.style.position="relative"
name.style.left="620px"
name.style.top="50px"
name.style.color="blue"
name.style.fontFamily="cursive"
name.style.textDecoration="underline"
document.body.appendChild(image)
document.body.appendChild(name)
},2000);

const phrases = [
"Aditya Sirsath",
"web devloper",
"web designer",
"problem solver"
];

const changingTextElement = document.getElementById('changing-text');

let currentphraseindex = 0;
function changeText(){
changingTextElement.textContent = phrases[currentphraseindex];
currentphraseindex = (currentphraseindex + 1) % phrases.length; }
changingTextElement.style.typewriteeffect
changeText();
setInterval(changeText,2000);

