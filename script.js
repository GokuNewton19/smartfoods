// Animate on scroll
const items = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));

// Video play buttons
document.querySelectorAll(".video-box").forEach(box => {
  const video = box.querySelector("video");
  const btn = box.querySelector(".play-btn");

  btn.addEventListener("click", () => {
    video.play();
    video.setAttribute("controls", true);
    btn.style.display = "none";
  });
});
