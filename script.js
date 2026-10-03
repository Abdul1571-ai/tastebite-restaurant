const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".food-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle("hidden", category !== "all" && card.dataset.category !== category);
    });
  });
});

const form = document.getElementById("reservationForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;

  toast.textContent = `Thanks ${name}! Your ${guests} reservation request for ${date} has been received.`;
  toast.classList.add("show");
  form.reset();

  setTimeout(() => toast.classList.remove("show"), 4500);
});

document.getElementById("year").textContent = new Date().getFullYear();
