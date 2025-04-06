// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header scroll effect
const header = document.querySelector("header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(10, 10, 10, 0.95)"
    header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)"
  } else {
    header.style.backgroundColor = "rgba(10, 10, 10, 0.9)"
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For demonstration, we'll just log it and show an alert
    console.log("Form submitted:", { name, email, subject, message })

    // Show success message
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Animation on scroll
window.addEventListener("scroll", revealElements)

function revealElements() {
  const elements = document.querySelectorAll(".project-card, .detail-item, .timeline-item, .skill-category")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".project-card, .detail-item, .timeline-item, .skill-category")

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger initial reveal
  revealElements()
})

