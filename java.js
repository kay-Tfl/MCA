var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("main-loader").style.display = "none";
  document.getElementById("body").style.display = "block";
}
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Musician", "Fashion Designer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
var dialog  = document.getElementById("dialog");
var openDialog = document.getElementById("book");
openDialog.addEventListener('click',function () {
  dialog.showModal();
})
 
var sliderIndex = 0
slider()
function slider() {
  let imgSlider = document.getElementsByClassName("img");
  for (let i = 0; i < imgSlider.length; i++) {
    imgSlider[i].style.display = "none";    
  }
  sliderIndex++
  if (sliderIndex >= imgSlider.length) {
    sliderIndex = 0
  }
  imgSlider[sliderIndex].style.display = "block";
  setTimeout(slider,2000);
}
function myfunc(){
  alert("The video has not been uploaded yet")
}
var backtop = document.querySelector(".back-to-top");
window.addEventListener('scroll',function () {
  if(window.pageYOffset > 100){
    backtop.classList.add("active");
  }else{
    backtop.classList.remove("active")
  }
})
function navigate() {
  const navBar = document.getElementById("nav-bars");
  navBar.classList.toggle("menu")


}
