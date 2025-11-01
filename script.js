// ======= Responsive Navbar Toggle =======
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ======= Dark Mode Toggle =======
const darkToggle = document.getElementById("darkToggle");
const body = document.body;

// Load dark mode preference from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  darkToggle.textContent = "☀️";
}

// Add click event to toggle dark mode
darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Change icon and save preference
  if (body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
// ======= Scroll Reveal Animation =======
const revealElements = document.querySelectorAll(".about, .hero, .about-image, .about-content");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

// Add CSS animation trigger
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// ======= Add to Cart Button Animation =======
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "✔ Added!";
    btn.style.backgroundColor = "#2ecc71";

    // Revert button back after 1.5s
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.style.backgroundColor = "";
    }, 1500);
  });
});

// ======= Feature Section Scroll Animation =======
const featureItems = document.querySelectorAll(".feature-item");

function revealFeatures() {
  const triggerBottom = window.innerHeight * 0.9;

  featureItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealFeatures);
revealFeatures();

// Add CSS transition effect when visible
const style = document.createElement("style");
style.innerHTML = `
  .feature-item {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.6s ease;
  }
  .feature-item.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// ======= Order Form Submission =======
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create confirmation popup
  const confirmBox = document.createElement("div");
  confirmBox.className = "confirm-box";
  confirmBox.textContent = "🎉 Your order has been placed successfully!";
  document.body.appendChild(confirmBox);

  // Animate popup
  confirmBox.style.opacity = "1";
  confirmBox.style.transform = "translateY(0)";

  // Reset form fields
  orderForm.reset();

  // Remove popup after delay
  setTimeout(() => {
    confirmBox.style.opacity = "0";
    confirmBox.style.transform = "translateY(-30px)";
    setTimeout(() => confirmBox.remove(), 500);
  }, 2500);
});

// ======= Confirmation Popup Styling =======
const confirmStyle = document.createElement("style");
confirmStyle.innerHTML = `
  .confirm-box {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 50px);
    background-color: #2ecc71;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 9999;
  }
  body.dark .confirm-box {
    background-color: #27ae60;
  }
`;
document.head.appendChild(confirmStyle);

// ======= Contact Form Submission =======
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create popup
  const messageBox = document.createElement("div");
  messageBox.className = "confirm-box";
  messageBox.textContent = "📩 Message sent successfully! We'll contact you soon.";
  document.body.appendChild(messageBox);

  // Animate popup
  messageBox.style.opacity = "1";
  messageBox.style.transform = "translateY(0)";

  // Reset form
  contactForm.reset();

  // Remove popup after delay
  setTimeout(() => {
    messageBox.style.opacity = "0";
    messageBox.style.transform = "translateY(-30px)";
    setTimeout(() => messageBox.remove(), 500);
  }, 2500);
});

// ======= Smooth Scroll for Footer Links =======
document.querySelectorAll('.footer a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ======= Reviews Section Animation =======
const reviewCards = document.querySelectorAll(".review-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

reviewCards.forEach(card => observer.observe(card));
