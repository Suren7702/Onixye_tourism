document.addEventListener("DOMContentLoaded", () => {
  // 1. PRELOADER HIDE
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }, 800);
    });
  }

  // 2. NAVBAR SCROLL EFFECT & MOBILE MENU TOGGLE
  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // 3. DESTINATION FILTERING
  const stateBtns = document.querySelectorAll(".state-btn");
  const destinationCards = document.querySelectorAll(".destination-card");

  stateBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      stateBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedState = btn.getAttribute("data-state");

      destinationCards.forEach((card) => {
        const cardState = card.getAttribute("data-state");
        if (selectedState === "all" || cardState === selectedState) {
          card.style.display = "block";
          setTimeout(() => (card.style.opacity = "1"), 50);
        } else {
          card.style.opacity = "0";
          setTimeout(() => (card.style.display = "none"), 300);
        }
      });
    });
  });

  // 4. ITINERARY BUILDER ACTION
  const buildItineraryBtn = document.getElementById("buildItinerary");
  if (buildItineraryBtn) {
    buildItineraryBtn.addEventListener("click", () => {
      const destination = document.getElementById("tripDestination").value;
      const days = document.getElementById("tripDays").value;
      const style = document.getElementById("travelStyle").value;

      const phoneNumber = "918124888800";
      const textMessage = `Hello Onixye Tourism! I would like to build a custom itinerary:\n- Destination: ${destination.toUpperCase()}\n- Duration: ${days} Days\n- Style: ${style.toUpperCase()}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  // 5. ENQUIRY FORM SUBMISSION (WhatsApp Direct)
  const travelForm = document.getElementById("travelForm");
  if (travelForm) {
    travelForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const destination = document.getElementById("destination").value;
      const travelType = document.getElementById("travelType").value;
      const message = document.getElementById("message").value;

      const whatsappNum = "918124888800";
      const formattedMessage = `*New Trip Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Destination:* ${destination}\n*Travel Type:* ${travelType}\n*Message:* ${message}`;

      const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(url, "_blank");
    });
  }

  // 6. FAQ ACCORDION
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach((other) => other.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  // 7. GALLERY LIGHTBOX
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      lightboxImg.src = item.getAttribute("data-full");
      lightboxCaption.textContent = item.getAttribute("data-caption") || "";
      lightbox.classList.add("open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // 8. PACKAGE DETAILS MODAL
  const packageData = {
    "malaysia-singapore": {
      title: "Malaysia & Singapore",
      days: "6 DAYS",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85",
      description: "A city-and-theme-park getaway covering Kuala Lumpur's icons and Singapore's family attractions, with comfortable stays and private transfers throughout.",
      includes: ["Return flights", "Genting Highlands cable car & city tour", "Kuala Lumpur city tour", "Murugan Temple visit", "Bird's Park entry", "Sentosa Island day", "Hotel stays with breakfast"]
    },
    "kolkata-darjeeling": {
      title: "Kolkata, Darjeeling, Gangtok & Kalimpong",
      days: "MULTI-CITY",
      image: "https://images.unsplash.com/photo-1544634076-a90160ddf22e?auto=format&fit=crop&w=1200&q=85",
      description: "A Himalayan circuit through tea estates, monasteries and colonial hill towns, moving from Kolkata up through Darjeeling, Gangtok and Kalimpong.",
      includes: ["Kolkata city tour", "Darjeeling tea garden visit", "Toy train ride (subject to availability)", "Gangtok monastery & viewpoint tour", "Kalimpong sightseeing", "Hotel stays with breakfast", "Private vehicle transfers"]
    },
    "bangkok-pattaya": {
      title: "Bangkok & Pattaya",
      days: "5 DAYS",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85",
      description: "A classic Thailand break mixing Bangkok's city energy with Pattaya's beaches and island-hopping, plus the popular Alcazar cabaret show.",
      includes: ["Two-way flights", "Bangkok city tour", "Alcazar Show tickets", "Coral Island day trip", "Pattaya beach time", "Hotel stays with breakfast"]
    },
    "dubai-abudhabi": {
      title: "Dubai & Abu Dhabi",
      days: "5 DAYS",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
      description: "Skyline views, desert adventure and a taste of Emirati culture across Dubai and Abu Dhabi, wrapped into one smooth five-day plan.",
      includes: ["Two-way flights", "Dubai city tour", "Abu Dhabi city tour", "Dhow Cruise dinner", "Desert Safari with belly dance show", "Free time for Dubai shopping", "Hotel stays with breakfast"]
    },
    "andaman-maldives": {
      title: "Andaman, Port Blair & Maldives",
      days: "ISLAND ESCAPE",
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=85",
      description: "Turquoise lagoons, coral reefs and overwater villas — a beach-first itinerary across Port Blair, the Andaman islands and the Maldives.",
      includes: ["Return flights", "Port Blair sightseeing & Cellular Jail", "Havelock Island beach time", "Snorkelling / water activities", "Maldives resort stay", "Airport transfers"]
    }
  };

  const packageModal = document.getElementById("packageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDays = document.getElementById("modalDays");
  const modalDescription = document.getElementById("modalDescription");
  const modalIncludes = document.getElementById("modalIncludes");
  const modalEnquire = document.getElementById("modalEnquire");
  const packageModalClose = document.getElementById("packageModalClose");

  document.querySelectorAll(".view-details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-package");
      const data = packageData[key];
      if (!data || !packageModal) return;

      modalImage.src = data.image;
      modalImage.alt = data.title;
      modalTitle.textContent = data.title;
      modalDays.textContent = data.days;
      modalDescription.textContent = data.description;
      modalIncludes.innerHTML = "";
      data.includes.forEach((point) => {
        const li = document.createElement("li");
        li.textContent = point;
        modalIncludes.appendChild(li);
      });

      const msg = `Hello Onyxe Tourism! I'm interested in the ${data.title} package. Could you share more details and pricing?`;
      modalEnquire.href = `https://wa.me/918124888800?text=${encodeURIComponent(msg)}`;

      packageModal.classList.add("open");
    });
  });

  function closePackageModal() {
    if (packageModal) packageModal.classList.remove("open");
  }

  if (packageModalClose) packageModalClose.addEventListener("click", closePackageModal);
  if (packageModal) {
    packageModal.addEventListener("click", (e) => {
      if (e.target === packageModal) closePackageModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closePackageModal();
    }
  });

  // 9. SCROLL REVEAL ANIMATION
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((element) => observer.observe(element));
});