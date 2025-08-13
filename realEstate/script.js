// Nestico Real Estate Website JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
});

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern 2-Bedroom Condo",
    location: "Brooklyn, New York",
    price: 740000,
    type: "condo",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image: "/placeholder.svg?height=300&width=400",
    forSale: true,
    forRent: false,
    rentPrice: 0,
  },
  {
    id: 2,
    title: "Luxury 3-Bedroom House",
    location: "Manhattan, New York",
    price: 1250000,
    type: "house",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image: "/placeholder.svg?height=300&width=400",
    forSale: true,
    forRent: false,
    rentPrice: 0,
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    location: "Queens, New York",
    price: 450000,
    type: "apartment",
    bedrooms: 0,
    bathrooms: 1,
    sqft: 600,
    image: "/placeholder.svg?height=300&width=400",
    forSale: false,
    forRent: true,
    rentPrice: 2200,
  },
  {
    id: 4,
    title: "Spacious 4-Bedroom Villa",
    location: "Staten Island, New York",
    price: 950000,
    type: "villa",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    image: "/placeholder.svg?height=300&width=400",
    forSale: true,
    forRent: false,
    rentPrice: 0,
  },
  {
    id: 5,
    title: "Modern 1-Bedroom Apartment",
    location: "Bronx, New York",
    price: 380000,
    type: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 800,
    image: "/placeholder.svg?height=300&width=400",
    forSale: false,
    forRent: true,
    rentPrice: 1800,
  },
  {
    id: 6,
    title: "Penthouse Suite",
    location: "Manhattan, New York",
    price: 2500000,
    type: "condo",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    image: "/placeholder.svg?height=300&width=400",
    forSale: true,
    forRent: false,
    rentPrice: 0,
  },
];

// Sample agent data
const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    phone: "(555) 123-4567",
    email: "sarah@nestico.com",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    sales: 150,
    specialties: ["Luxury Homes", "First-time Buyers", "Investment Properties"],
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Real Estate Specialist",
    phone: "(555) 234-5678",
    email: "michael@nestico.com",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    sales: 120,
    specialties: ["Commercial Properties", "Condos", "Rentals"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Property Consultant",
    phone: "(555) 345-6789",
    email: "emily@nestico.com",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    sales: 180,
    specialties: ["Family Homes", "Relocation", "New Construction"],
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Real Estate Advisor",
    phone: "(555) 456-7890",
    email: "david@nestico.com",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    sales: 95,
    specialties: ["Waterfront Properties", "Luxury Condos", "Investment"],
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Senior Agent",
    phone: "(555) 567-8901",
    email: "lisa@nestico.com",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    sales: 140,
    specialties: ["Downtown Properties", "Young Professionals", "Rentals"],
  },
  {
    id: 6,
    name: "Robert Martinez",
    title: "Property Specialist",
    phone: "(555) 678-9012",
    email: "robert@nestico.com",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    sales: 110,
    specialties: ["Suburban Homes", "Families", "School Districts"],
  },
];

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

// Intersection Observer for counter animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      entry.target.classList.contains("stats-section")
    ) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe stats section
document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    observer.observe(statsSection);
  }
});

// Load featured properties on homepage
function loadFeaturedProperties() {
  const container = document.getElementById("featuredProperties");
  if (!container) return;

  const featuredProperties = properties.slice(0, 4);

  container.innerHTML = featuredProperties
    .map(
      (property) => `
        <div class="col-lg-6 mb-4" data-aos="fade-up">
            <div class="property-card">
                <img src="${property.image}" alt="${
        property.title
      }" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${property.title}</h5>
                    <p class="text-muted mb-2">
                        <i class="fas fa-map-marker-alt me-2"></i>${
                          property.location
                        }
                    </p>
                    <div class="property-features mb-3">
                        ${
                          property.bedrooms > 0
                            ? `<span><i class="fas fa-bed me-1"></i>${property.bedrooms} bed</span>`
                            : '<span><i class="fas fa-home me-1"></i>Studio</span>'
                        }
                        <span><i class="fas fa-bath me-1"></i>${
                          property.bathrooms
                        } bath</span>
                        <span><i class="fas fa-ruler-combined me-1"></i>${
                          property.sqft
                        } sqft</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="property-price">$${property.price.toLocaleString()}</div>
                        <a href="property-detail.html?id=${
                          property.id
                        }" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Load all properties
function loadProperties(filter = {}) {
  const container = document.getElementById("propertiesGrid");
  if (!container) return;

  let filteredProperties = properties;

  // Apply filters
  if (filter.type && filter.type !== "") {
    filteredProperties = filteredProperties.filter(
      (p) => p.type === filter.type
    );
  }

  if (filter.bedrooms && filter.bedrooms !== "") {
    const minBedrooms = parseInt(filter.bedrooms);
    filteredProperties = filteredProperties.filter(
      (p) => p.bedrooms >= minBedrooms
    );
  }

  if (filter.bathrooms && filter.bathrooms !== "") {
    const minBathrooms = parseInt(filter.bathrooms);
    filteredProperties = filteredProperties.filter(
      (p) => p.bathrooms >= minBathrooms
    );
  }

  if (filter.priceRange && filter.priceRange !== "") {
    const [min, max] = filter.priceRange
      .split("-")
      .map((p) => parseInt(p.replace("+", "")));
    if (max) {
      filteredProperties = filteredProperties.filter(
        (p) => p.price >= min && p.price <= max
      );
    } else {
      filteredProperties = filteredProperties.filter((p) => p.price >= min);
    }
  }

  // Update results count
  const resultsCount = document.getElementById("resultsCount");
  if (resultsCount) {
    resultsCount.textContent = `Showing ${filteredProperties.length} properties`;
  }

  container.innerHTML = filteredProperties
    .map(
      (property) => `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="property-card">
                <img src="${property.image}" alt="${
        property.title
      }" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${property.title}</h5>
                    <p class="text-muted mb-2">
                        <i class="fas fa-map-marker-alt me-2"></i>${
                          property.location
                        }
                    </p>
                    <div class="property-features mb-3">
                        ${
                          property.bedrooms > 0
                            ? `<span><i class="fas fa-bed me-1"></i>${property.bedrooms} bed</span>`
                            : '<span><i class="fas fa-home me-1"></i>Studio</span>'
                        }
                        <span><i class="fas fa-bath me-1"></i>${
                          property.bathrooms
                        } bath</span>
                        <span><i class="fas fa-ruler-combined me-1"></i>${
                          property.sqft
                        } sqft</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="property-price">$${property.price.toLocaleString()}</div>
                        <a href="property-detail.html?id=${
                          property.id
                        }" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Load properties for sale
function loadBuyProperties() {
  const container = document.getElementById("buyPropertiesGrid");
  if (!container) return;

  const buyProperties = properties.filter((p) => p.forSale).slice(0, 6);

  container.innerHTML = buyProperties
    .map(
      (property) => `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="property-card">
                <img src="${property.image}" alt="${
        property.title
      }" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${property.title}</h5>
                    <p class="text-muted mb-2">
                        <i class="fas fa-map-marker-alt me-2"></i>${
                          property.location
                        }
                    </p>
                    <div class="property-features mb-3">
                        ${
                          property.bedrooms > 0
                            ? `<span><i class="fas fa-bed me-1"></i>${property.bedrooms} bed</span>`
                            : '<span><i class="fas fa-home me-1"></i>Studio</span>'
                        }
                        <span><i class="fas fa-bath me-1"></i>${
                          property.bathrooms
                        } bath</span>
                        <span><i class="fas fa-ruler-combined me-1"></i>${
                          property.sqft
                        } sqft</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="property-price">$${property.price.toLocaleString()}</div>
                        <a href="property-detail.html?id=${
                          property.id
                        }" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Load rental properties
function loadRentProperties() {
  const container = document.getElementById("rentPropertiesGrid");
  if (!container) return;

  const rentProperties = properties.filter((p) => p.forRent).slice(0, 6);

  container.innerHTML = rentProperties
    .map(
      (property) => `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="property-card">
                <img src="${property.image}" alt="${
        property.title
      }" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${property.title}</h5>
                    <p class="text-muted mb-2">
                        <i class="fas fa-map-marker-alt me-2"></i>${
                          property.location
                        }
                    </p>
                    <div class="property-features mb-3">
                        ${
                          property.bedrooms > 0
                            ? `<span><i class="fas fa-bed me-1"></i>${property.bedrooms} bed</span>`
                            : '<span><i class="fas fa-home me-1"></i>Studio</span>'
                        }
                        <span><i class="fas fa-bath me-1"></i>${
                          property.bathrooms
                        } bath</span>
                        <span><i class="fas fa-ruler-combined me-1"></i>${
                          property.sqft
                        } sqft</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="property-price">$${property.rentPrice.toLocaleString()}/month</div>
                        <a href="property-detail.html?id=${
                          property.id
                        }" class="btn btn-success">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Load agents
function loadAgents() {
  const container = document.getElementById("agentsGrid");
  if (!container) return;

  container.innerHTML = agents
    .map(
      (agent) => `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="agent-card">
                <img src="${agent.image}" alt="${
        agent.name
      }" class="agent-photo">
                <h5 class="mb-2">${agent.name}</h5>
                <p class="text-primary mb-2">${agent.title}</p>
                <div class="agent-rating mb-2">
                    ${"★".repeat(Math.floor(agent.rating))} ${agent.rating}
                </div>
                <p class="text-muted mb-3">${agent.sales} properties sold</p>
                <div class="agent-specialties mb-3">
                    ${agent.specialties
                      .map(
                        (specialty) =>
                          `<span class="badge bg-light text-dark me-1">${specialty}</span>`
                      )
                      .join("")}
                </div>
                <div class="agent-contact mb-3">
                    <p class="mb-1">
                        <i class="fas fa-phone text-primary me-2"></i>
                        <a href="tel:${
                          agent.phone
                        }" class="text-decoration-none">${agent.phone}</a>
                    </p>
                    <p class="mb-0">
                        <i class="fas fa-envelope text-primary me-2"></i>
                        <a href="mailto:${
                          agent.email
                        }" class="text-decoration-none">${agent.email}</a>
                    </p>
                </div>
                <button class="btn btn-primary w-100" onclick="contactAgent('${
                  agent.name
                }')">
                    <i class="fas fa-comments me-2"></i>Contact Agent
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Apply filters
function applyFilters() {
  const filter = {
    type: document.getElementById("propertyType")?.value || "",
    priceRange: document.getElementById("priceRange")?.value || "",
    bedrooms: document.getElementById("bedrooms")?.value || "",
    bathrooms: document.getElementById("bathrooms")?.value || "",
  };

  loadProperties(filter);
}

// Set view (grid/list)
function setView(viewType) {
  const buttons = document.querySelectorAll(".btn-group button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Implementation for different views would go here
  console.log("View changed to:", viewType);
}

// Mortgage calculator
function calculateMortgage() {
  const homePrice = parseFloat(document.getElementById("homePrice").value) || 0;
  const downPayment =
    parseFloat(document.getElementById("downPayment").value) || 0;
  const interestRate =
    parseFloat(document.getElementById("interestRate").value) || 0;
  const loanTerm = parseInt(document.getElementById("loanTerm").value) || 30;

  if (homePrice <= 0 || downPayment < 0 || interestRate <= 0) {
    document.getElementById("mortgageResult").innerHTML =
      '<div class="alert alert-warning">Please enter valid values</div>';
    return;
  }

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  document.getElementById("mortgageResult").innerHTML = `
        <div class="alert alert-success">
            <h6>Monthly Payment: $${monthlyPayment.toFixed(2)}</h6>
            <small>Loan Amount: $${loanAmount.toLocaleString()}</small>
        </div>
    `;
}

// Property detail mortgage calculator
function calculateDetailMortgage() {
  const homePrice =
    parseFloat(document.getElementById("detailHomePrice").value) || 0;
  const downPayment =
    parseFloat(document.getElementById("detailDownPayment").value) || 0;
  const interestRate =
    parseFloat(document.getElementById("detailInterestRate").value) || 0;
  const loanTerm = 30; // Fixed at 30 years for simplicity

  if (homePrice <= 0 || downPayment < 0 || interestRate <= 0) {
    document.getElementById("detailMortgageResult").innerHTML =
      '<div class="alert alert-warning">Please enter valid values</div>';
    return;
  }

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  document.getElementById("detailMortgageResult").innerHTML = `
        <div class="alert alert-success">
            <h6>Monthly Payment: $${monthlyPayment.toFixed(2)}</h6>
            <small>Loan Amount: $${loanAmount.toLocaleString()}</small>
        </div>
    `;
}

// Change main image in property detail
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  if (mainImage && thumbnail) {
    mainImage.src = thumbnail.src;
  }
}

// Open gallery (placeholder function)
function openGallery() {
  alert("Gallery feature would open here with all property images");
}

// Load similar properties
function loadSimilarProperties() {
  const container = document.getElementById("similarProperties");
  if (!container) return;

  const similarProperties = properties.slice(0, 3);

  container.innerHTML = similarProperties
    .map(
      (property) => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="property-card">
                <img src="${property.image}" alt="${
        property.title
      }" class="card-img-top">
                <div class="card-body">
                    <h6 class="card-title">${property.title}</h6>
                    <p class="text-muted small mb-2">
                        <i class="fas fa-map-marker-alt me-1"></i>${
                          property.location
                        }
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="property-price h6">$${property.price.toLocaleString()}</div>
                        <a href="property-detail.html?id=${
                          property.id
                        }" class="btn btn-sm btn-primary">View</a>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Floating chat functionality
let chatOpen = false;

function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatOpen = !chatOpen;

  if (chatOpen) {
    chatWindow.classList.add("active");
  } else {
    chatWindow.classList.remove("active");
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message === "") return;

  const chatBody = document.getElementById("chatBody");

  // Add user message
  const userMessage = document.createElement("div");
  userMessage.className = "message user-message";
  userMessage.innerHTML = `
        <div class="avatar">
            <img src="/placeholder.svg?height=30&width=30" alt="User">
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
  chatBody.appendChild(userMessage);

  // Clear input
  input.value = "";

  // Simulate agent response
  setTimeout(() => {
    const agentMessage = document.createElement("div");
    agentMessage.className = "message agent-message";
    agentMessage.innerHTML = `
            <div class="avatar">
                <img src="/placeholder.svg?height=30&width=30" alt="Agent">
            </div>
            <div class="message-content">
                <p>Thank you for your message! I'll get back to you shortly with more information.</p>
            </div>
        `;
    chatBody.appendChild(agentMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);

  chatBody.scrollTop = chatBody.scrollHeight;
}

// Contact agent function
function contactAgent(agentName) {
  const chatBody = document.getElementById("chatBody");
  chatBody.innerHTML = `
        <div class="message agent-message">
            <div class="avatar">
                <img src="/placeholder.svg?height=30&width=30" alt="Agent">
            </div>
            <div class="message-content">
                <p>Hi! This is ${agentName}. How can I help you with your real estate needs today?</p>
            </div>
        </div>
    `;
  toggleChat();
}

// Form submissions
document.addEventListener("DOMContentLoaded", function () {
  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show success message
      const alert = document.createElement("div");
      alert.className = "alert alert-success mt-3";
      alert.innerHTML =
        '<i class="fas fa-check-circle me-2"></i>Thank you! Your message has been sent successfully.';

      contactForm.appendChild(alert);

      // Reset form
      setTimeout(() => {
        contactForm.reset();
        alert.remove();
      }, 3000);
    });
  }

  // Property inquiry form
  const propertyInquiry = document.getElementById("propertyInquiry");
  if (propertyInquiry) {
    propertyInquiry.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show success message
      const alert = document.createElement("div");
      alert.className = "alert alert-success mt-3";
      alert.innerHTML =
        '<i class="fas fa-check-circle me-2"></i>Your inquiry has been sent to the agent!';

      propertyInquiry.appendChild(alert);

      // Reset form
      setTimeout(() => {
        propertyInquiry.reset();
        alert.remove();
      }, 3000);
    });
  }

  // Chat input enter key
  const chatInput = document.getElementById("chatInput");
  if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }

  // Load appropriate content based on page
  const currentPage = window.location.pathname.split("/").pop();

  switch (currentPage) {
    case "index.html":
    case "":
      loadFeaturedProperties();
      break;
    case "properties.html":
      loadProperties();
      break;
    case "buy.html":
      loadBuyProperties();
      break;
    case "rent.html":
      loadRentProperties();
      break;
    case "agents.html":
      loadAgents();
      break;
    case "property-detail.html":
      loadSimilarProperties();
      break;
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Add scrolled class styles
const style = document.createElement("style");
style.textContent = `
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(10px);
    }
`;
document.head.appendChild(style);
