// ============================================
// MOBILE MENU TOGGLE - FIXED & IMPROVED
// ============================================

// Get elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

// Function to toggle menu
function toggleMenu() {
    navLinks.classList.toggle("active");
    
    // Change icon
    if (navLinks.classList.contains("active")) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        // Prevent body scroll when menu is open
        document.body.style.overflow = "hidden";
    } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "auto";
    }
}

// Toggle menu on button click
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleMenu();
    });
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    const isClickInside = navLinks.contains(event.target);
    const isClickOnButton = mobileMenuBtn.contains(event.target);
    
    if (!isClickInside && !isClickOnButton && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "auto";
    }
});

// Close menu when clicking on any nav link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        if (window.innerWidth <= 768 && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = "auto";
        }
    });
});

// Close menu on window resize (if screen becomes larger)
window.addEventListener("resize", function() {
    if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "auto";
    }
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================

const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
        // Skip for resume buttons
        if (this.classList.contains("nav-resume-btn") || 
            this.id.includes("ResumeBtn")) {
            return;
        }

        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768 && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = "auto";
            }
        }
    });
});

// ============================================
// FORM SUBMISSION
// ============================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(
            `Thank you, ${name}! Your message has been sent. I'll get back to you at ${email} soon.`
        );

        contactForm.reset();
    });
}

// ============================================
// RESUME DOWNLOAD FUNCTIONALITY
// ============================================

const downloadResumeBtn = document.getElementById("downloadResumeBtn");
const headerResumeBtn = document.getElementById("headerResumeBtn");

function downloadResume() {
    const resumeContent = `
RITIKA NAINANI
================================================================================
+91 8962986639 | nainaniritika04@gmail.com
LinkedIn: linkedin.com/in/ritika-nainani-1378b8255/
GitHub: github.com/RitikaNainani25
Location: Gwalior, Madhya Pradesh

================================================================================
SUMMARY
================================================================================
Seeking a Software Development Internship to apply my programming, web 
development, and problem-solving skills. Eager to learn, contribute to 
real-world projects, and grow as a Software Engineer.

================================================================================
EDUCATION
================================================================================
• B.Tech in Computer Science Engineering
  Amity University Gwalior (2022 - 2026)
  CGPA: 8.76/10

• Higher Secondary (Class XII)
  MP Board of Secondary Education (2022)
  Percentage: 84%

• Secondary (Class X)
  MP Board of Secondary Education (2020)
  Percentage: 89%

================================================================================
SKILLS
================================================================================
• Programming Languages: C, C++, Python, JavaScript, SQL
• Web Development: HTML, CSS, JavaScript, React.js, REST APIs
• Databases & Tools: MySQL, Git, GitHub, Figma, Bootstrap, Tailwind CSS,
  Visual Studio Code, Power BI
• Core CS: Data Structures & Algorithms, OOP, DBMS, Operating Systems,
  Problem Solving

================================================================================
PROJECTS
================================================================================
1. IoT-Based Intelligent Temperature Monitoring System
   • Built an IoT-based temperature monitoring system using NodeMCU ESP8266
     and DHT22 to automatically control a cooling fan based on real-time
     sensor readings
   • Automated cloud logging by integrating Python and Make.com to send
     live temperature data to Google Sheets for remote monitoring
   • Technologies: NodeMCU ESP8266, Python, Arduino, Make.com, IoT

2. Weather App
   • Developed a responsive weather application using the OpenWeatherMap API
     to display real-time weather information for searched cities
   • Implemented asynchronous API requests, dynamic DOM updates, and input
     validation for a smooth user experience
   • Technologies: HTML, CSS, JavaScript, REST API

3. Product Reviews Analysis Chatbot
   • Developed an NLP-based chatbot to classify product reviews into
     Positive, Neutral, and Negative sentiments using machine learning
     techniques
   • Performed text preprocessing, tokenization, TF-IDF vectorization, and
     sentiment prediction to automate customer feedback analysis
   • Technologies: Python, NLP, Machine Learning, NLTK

================================================================================
ACHIEVEMENTS
================================================================================
• Maps Appathon by MapmyIndia (Tryst'25, IIT Delhi, Mar 2025):
  Developed a location-based prototype to address real-world navigation
  challenges in a national-level hackathon

• LeetCode 50 Days Badge (2025):
  Earned for maintaining a 50+ day coding streak, demonstrating consistency
  and strong problem-solving skills

• CodeChef Diamond Streak Badge:
  Achieved a 100-day coding streak, showcasing dedication to competitive
  programming and algorithmic thinking

================================================================================
CERTIFICATIONS
================================================================================
• Introduction to Internet of Things (Elite) – NPTEL (IIT Kharagpur)
  October 2025

• Maps Appathon Participation – Tryst'25, IIT Delhi
  March 2025

• Introduction to Git & GitHub – Microsoft Learn Student Ambassador
  March 2024

• Database Concepts & Relational Models – Infosys Springboard
  August 2023

================================================================================
Last Updated: ${new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
})}
================================================================================`;

    const blob = new Blob([resumeContent], {
        type: "text/plain;charset=utf-8"
    });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ritika_Nainani_Resume.txt";

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    alert("✅ Resume downloaded successfully as 'Ritika_Nainani_Resume.txt'!");
}

// Attach download functionality to both resume buttons
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        downloadResume();
    });
}

if (headerResumeBtn) {
    headerResumeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        downloadResume();
    });
}

// ============================================
// IMAGE ERROR HANDLING
// ============================================

const profileImg = document.querySelector(".myImg");
const headerImg = document.querySelector(".header-img");

function handleImageError(imgElement, fallbackIcon = false) {
    if (fallbackIcon) {
        const container = document.createElement("div");
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.backgroundColor = "var(--dark-card)";
        container.style.borderRadius = "50%";

        const icon = document.createElement("i");
        icon.className = "fas fa-user-circle";
        icon.style.fontSize = fallbackIcon === "header" ? "1.5rem" : "4rem";
        icon.style.color = "var(--primary)";

        container.appendChild(icon);
        imgElement.parentNode.replaceChild(container, imgElement);
    } else {
        imgElement.onerror = null;
        imgElement.src =
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231A1A2E'/><text x='50' y='50' font-family='Arial' font-size='14' fill='%236C63FF' text-anchor='middle' dy='.3em'>RN</text></svg>";
    }
}

if (profileImg) {
    profileImg.onerror = function() {
        handleImageError(profileImg);
    };
}

if (headerImg) {
    headerImg.onerror = function() {
        handleImageError(headerImg, "header");
    };
}

// ============================================
// INITIALIZE HEADER ON LOAD
// ============================================

if (window.scrollY > 50) {
    header.classList.add("scrolled");
}

// ============================================
// KEYBOARD ACCESSIBILITY - ESC key closes menu
// ============================================

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "auto";
    }
});

// ============================================
// CONSOLE LOG FOR DEBUGGING
// ============================================

console.log("✅ Website loaded successfully!");
console.log("📱 Mobile menu is ready to use!");

// Check if elements exist
console.log("Mobile Menu Button:", mobileMenuBtn ? "✅ Found" : "❌ Not Found");
console.log("Nav Links:", navLinks ? "✅ Found" : "❌ Not Found");