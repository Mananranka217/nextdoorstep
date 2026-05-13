const SHEET_URL = "https://script.google.com/macros/s/AKfycbzYasX4CxR3pgmixRN7JROfj1OwM15gr8IBRhg4NnAsKtvHOnmybA3Oj17FByQX7cyC/exec";

function handleEnquiryForm(form) {
  const note = form.querySelector(".form-note");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "there";

    const img = new Image();
    img.src = SHEET_URL + "?" + new URLSearchParams(data).toString();

    note.textContent = `Thanks, ${name}. Your enquiry has been submitted.`;
    note.classList.add("success");
    form.reset();
  });
}

document.querySelectorAll(".enquiry-form").forEach(handleEnquiryForm);

// Header scroll
const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });
}

// Desktop dropdowns — click to toggle, CSS :hover also handles reveal
const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

dropdownItems.forEach((item) => {
  const trigger = item.querySelector(".nav-dropdown-trigger");

  trigger.addEventListener("click", (e) => {
    // Anchor triggers navigate normally; just close other open dropdowns
    if (trigger.tagName === "A") {
      dropdownItems.forEach((other) => {
        if (other !== item) other.classList.remove("is-open");
      });
      return;
    }

    e.stopPropagation();
    const isOpen = item.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));

    dropdownItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("is-open");
        other.querySelector(".nav-dropdown-trigger").setAttribute("aria-expanded", "false");
      }
    });
  });
});

document.addEventListener("click", () => {
  dropdownItems.forEach((item) => {
    item.classList.remove("is-open");
    item.querySelector(".nav-dropdown-trigger").setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dropdownItems.forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".nav-dropdown-trigger").setAttribute("aria-expanded", "false");
    });
  }
});

// Active nav link
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".top-nav .nav-link").forEach((link) => {
  const href = link.getAttribute("href").split("#")[0].split("/").pop() || "index.html";
  if (href === currentPage) link.classList.add("active");
});

document.querySelectorAll(".nav-item.has-dropdown[data-page]").forEach((item) => {
  if (item.dataset.page + ".html" === currentPage) {
    item.querySelector(".nav-dropdown-trigger").classList.add("active");
  }
});

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      mobileMenu.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  });
}

// Mobile accordion
document.querySelectorAll(".mobile-accordion-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const accordion = btn.closest(".mobile-accordion");
    const isOpen = accordion.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
});
