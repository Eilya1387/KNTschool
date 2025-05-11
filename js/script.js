if (window.innerWidth >= 768) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './animate.css';
  document.head.appendChild(link);
  new WOW({
  boxClass:     'wow',      
  animateClass: 'animate__animated', 
  offset:       100,        
  mobile:       false,       
  live:         true        
}).init();
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
  const progress = (scrollTop / windowHeight) * 100; 
  document.getElementById('progress-bar').style.width = progress + '%';
});
}
const images = document.querySelectorAll(".photo");

images.forEach((image) => {
  image.addEventListener("mousemove", (event) => {
    const rect = image.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2; 
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2; 

    image.style.transform = `rotateX(${y * 15}deg) rotateY(${x * 15}deg)`;
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

//scroll button
document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.querySelector(".scroll-btn");
  var stickyfooter = document.querySelector(".sticky-footer");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollButton.classList.add("active");
      stickyfooter.classList.add("active");
    } else {
      scrollButton.classList.remove("active");
      stickyfooter.classList.remove("active");
    }
  });

  scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//end

//div-slide
const slider = document.querySelector(".slider-container");
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});
//end-div-slide

// news

const mbtn = document.getElementById("m-btn");
function inHeght() {
  const mNews = document.querySelector(".news-master");
  const remToPixel = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  let currentHeight =
    parseFloat(getComputedStyle(mNews).maxHeight) / remToPixel;
  let newHeight = currentHeight + 33;
  mNews.style.maxHeight = newHeight + "rem";
  console.log("Current Height (rem):", currentHeight);
  console.log("New Height (rem):", newHeight);
  if (newHeight > 120) {
    mbtn.style.display = "none";
    mNews.style.maxHeight="100%";
  }
}

// end-news

const body = document.querySelector("body");
var resbtn = document.getElementById("res-btn");
var resitems = document.getElementById("items-res");
var isopen = false;
function side() {
  if (isopen == true) {
    isopen = false;
    resitems.style.visibility = "hidden";
    resitems.style.width = "0%";
    body.style.overflowY = "scroll";
    console.log(isopen);
  } else {
    isopen = true;
    resitems.style.width = "50%";
    resitems.style.visibility = "visible";

    body.style.overflowY = "hidden";
  }
}




