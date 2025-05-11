//بخش توضیحات

const texts = [
  "در مسیر تحقق رؤیاهای شما گام برمی‌داریم.",
  "خلاقیت، تلاش و موفقیت؛ شعار ماست.",
  "هنرستان ما مسیر موفقیت شما را هموار می‌کند.",
  "آینده شما با دانش و مهارت شکل می‌گیرد."
];

const images = [
"../images/photo_2025-04-20_20-03-12.jpg",
"../images/photo_21_2025-04-20_20-31-57.jpg",
"../images/photo_14_2025-04-20_20-31-57.jpg",
"../images/photo_17_2025-04-20_20-31-57.jpg"

];

let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;

const typedText = document.getElementById("typed-text");
const sliderImage = document.getElementById("slider-image");

function type() {
  if (charIndex < texts[textIndex].length) {
    typedText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(() => {
      typedText.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      type();
    }, 2000); 
  }
}

function changeImage() {
  let imgIndex = 0;
  setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[imgIndex];
      sliderImage.style.opacity = 1;
    }, 500);
  }, 4000);
}

type();
changeImage();






