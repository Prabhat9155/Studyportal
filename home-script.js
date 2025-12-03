// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Animate hamburger menu
  const bars = mobileMenu.querySelectorAll('.bar');
  bars[0].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
  bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
  bars[2].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const bars = mobileMenu.querySelectorAll('.bar');
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar Active Link on Scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Add shadow to navbar on scroll
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Feedback Modal
const feedbackBtn = document.getElementById('feedback-btn');
const feedbackModal = document.getElementById('feedback-modal');
const closeModal = document.querySelector('.close');

feedbackBtn.addEventListener('click', (e) => {
  e.preventDefault();
  feedbackModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
  feedbackModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === feedbackModal) {
    feedbackModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Rating Stars
const ratingStars = document.querySelectorAll('.rating-stars i');
const ratingInput = document.getElementById('rating');

ratingStars.forEach((star, index) => {
  star.addEventListener('click', () => {
    const rating = index + 1;
    ratingInput.value = rating;

    // Update star display
    ratingStars.forEach((s, i) => {
      if (i < rating) {
        s.classList.remove('far');
        s.classList.add('fas', 'active');
      } else {
        s.classList.remove('fas', 'active');
        s.classList.add('far');
      }
    });
  });

  star.addEventListener('mouseenter', () => {
    const rating = index + 1;
    ratingStars.forEach((s, i) => {
      if (i < rating) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});

document.querySelector('.rating-stars').addEventListener('mouseleave', () => {
  const currentRating = parseInt(ratingInput.value) || 0;
  ratingStars.forEach((s, i) => {
    if (i < currentRating) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
});

// Feedback Form Submission
const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    rating: document.getElementById('rating').value,
    message: document.getElementById('message').value,
    timestamp: new Date().toISOString()
  };

  // Store feedback in localStorage
  let feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
  feedbacks.push(formData);
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

  // Show success message
  alert('Thank you for your feedback! We appreciate your input. 🙏');

  // Reset form and close modal
  feedbackForm.reset();
  ratingInput.value = '0';
  ratingStars.forEach(star => {
    star.classList.remove('fas', 'active');
    star.classList.add('far');
  });
  feedbackModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe feature cards, topic cards, and other elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.feature-card, .topic-card, .about-content');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Social Media Share Functionality
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const platform = link.title.toLowerCase();
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out StudyPortal Bihar - An amazing interactive learning platform! 📚');

    let shareUrl = '';

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'instagram':
        alert('To share on Instagram, please screenshot and post! 📸');
        return;
      case 'github':
        window.open('https://github.com', '_blank');
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  });
});

// Counter Animation for Stats
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + (element.textContent.includes('+') ? '+' : '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
    }
  }, 16);
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        animateCounter(stat, target);
      });
      entry.target.dataset.animated = 'true';
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  statsObserver.observe(heroStats);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroPattern = document.querySelector('.hero-pattern');
  if (heroPattern) {
    heroPattern.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Feature card tilt effect on mouse move
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// Loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);

  if (konamiCode.join('').includes(konamiSequence.join(''))) {
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
      document.body.style.animation = 'none';
    }, 5000);
  }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);

console.log('%c🎨 StudyPortal Bihar - Designed with love from Bihar! 💚', 'font-size: 20px; color: #FF6B35; font-weight: bold;');
console.log('%c👨‍💻 Developed by Prabhat Kumar', 'font-size: 14px; color: #8B4513;');
