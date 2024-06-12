let bar = document.querySelector("#bar");
let list = document.querySelector(".list");

bar.addEventListener("click", () => {
  if (list.style.top == "-450px") {
    list.style.top = "0px";
    bar.classList.add("fa-xmark");
    bar.classList.remove("fa-bars");
    bar.style.color = "#000";
  } else {
    list.style.top = "-450px";
    bar.classList.add("fa-bars");
    bar.classList.remove("fa-xmark");
    bar.style.color = "#fee715";
  }
});

// ############### for text sliding ################## \\

// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const spanElement = document.getElementById("slideText");
  const textArray = ["HTML 5", "CSS 3", "JAVASCRIPT", "BOOTSTRAP", "ECMA 6"];

  let currentIndex = 0;
  let currentText = "";
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const fullText = textArray[currentIndex];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    spanElement.textContent = currentText;

    if (!isDeleting && currentText === fullText) {
      typeSpeed = 2000; // Kitni der rukna hai word complete hone ke baad
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textArray.length;
      typeSpeed = 500;
    } else {
      typeSpeed = isDeleting ? 50 : 100;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});


// ################## for Scroll button ###################### \\

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.querySelector('.up');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          scrollToTopButton.style.display = 'flex';
      } else {
          scrollToTopButton.style.display = 'none';
      }
  });

  scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
