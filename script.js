// ---------- Typing effect ----------
const roles = [
  "Web Developer",
  "Software Engineer",
  "AI-Driven Builder",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingEl = document.getElementById("typing");

function type() {
  const current = roles[roleIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingEl.textContent = current.substring(0, charIndex);

  let delay = deleting ? 50 : 100;

  if (!deleting && charIndex === current.length) {
    deleting = true;
    delay = 1500;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

if (typingEl) {
  type();
}

// ---------- Mobile menu ----------
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ---------- Fade-in on scroll ----------
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// ---------- Highlight the current section in the nav ----------
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));