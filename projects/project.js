// ----------------------
// 1. GSAP Scroll Animation
// ----------------------

function loaderAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      end: "150% top",
      scrub: 2,
      pin: true,
      // markers: true,
    }
  });

  tl
    .to("#top", { top: "-50%" }, 'a')
    .to("#bottom", { bottom: "-50%" }, 'a')
    .to("#top-h1", { top: "60%" }, 'a')
    .to("#bottom-h1", { bottom: "-30%" }, 'a')
    .to(".content", {
      delay: -0.2,
      marginTop: "0%",
      opacity: 1
    });
}

loaderAnimation();

 function goHome() {
            // Replace with your actual home page URL
            window.location.href = '../index.html'; // or '/' for root
        }

// ----------------------
// 2. Project Filtering
// ----------------------

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Set active class
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || filterValue === category) {
        card.classList.remove("hidden");
        card.classList.add("fade-in");
      } else {
        card.classList.add("hidden");
        card.classList.remove("fade-in");
      }
    });
  });
});

// ----------------------
// 3. Hover Animation
// ----------------------

projectCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
  });
});

// ----------------------
// 4. Parallax Mouse Movement
// ----------------------

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const deltaX = (mouseX - cardCenterX) * 0.02;
    const deltaY = (mouseY - cardCenterY) * 0.02;

    const image = card.querySelector(".project-image");
    if (image) {
      image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      image.style.transition = "transform 0.2s ease";
    }
  });
});



