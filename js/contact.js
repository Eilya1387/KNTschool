const texts = [
  [
    "هنرستان پسرانه خواجه نصیرالدین طوسی ناحیه 1 قزوین در استان قزوین از جمله بهترین مدارس دولتی می‌باشد.",
    "این مدرسه به دانش‌آموزان فنی و حرفه‌ای در رشته‌ها‌ی حسابداری، شبکه و نرم‌افزار رایانه و نقشه‌کشی معماری، خدمات آموزشی ارائه می‌نماید.",
  ],
];

const colors = ["#051937"];
let index = 0;
const textElement = document.getElementById("text");

function typeText(parts, partIndex = 0, charIndex = 0) {
  if (partIndex < parts.length) {
    if (charIndex < parts[partIndex].length) {
      const span = document.createElement("span");
      span.textContent = parts[partIndex][charIndex];
      span.style.color = colors[(index + partIndex) % colors.length];
      textElement.appendChild(span);
      setTimeout(() => typeText(parts, partIndex, charIndex + 1), 50);
    } else {
      setTimeout(() => typeText(parts, partIndex + 1, 0), 50);
    }
  } else {
    setTimeout(() => clearText(), 1000000);
  }
}

function clearText() {
  textElement.textContent = "";
  index = (index + 1) % texts.length;
  setTimeout(() => typeText(texts[index]), 100);
}

typeText(texts[index]);

document.querySelectorAll(".faq-title").forEach((title) => {
  title.addEventListener("click", () => {
    const parent = title.closest(".faq-item");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    parent.classList.toggle("active");
  });
});
