document.querySelector("#Greet").style.display = "flex";
const projectsButton = document.querySelector("#projectsButton");
const galleryButton = document.querySelector("#galleryButton");
const discographyButton = document.querySelector("#discographyButton");
const aboutButton = document.querySelector("#aboutButton");

const hero = document.getElementsByClassName("hero-content");

function openTab(tabName) {
	for (let i = 0; i < hero.length; i++) {
		hero[i].style.display = "none";
		document.querySelector(tabName).style.display = "flex";
	}
}

projectsButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("#Projects");
});

galleryButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("#Gallery");
});

discographyButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("#Discography");
});

aboutButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("#About");
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".hamburger-menu");
const navTabs = document.querySelector(".nav-tabs");

mobileMenuBtn.addEventListener("click", () => {
	const isActive = navTabs.classList.toggle("active");
	mobileMenuBtn.setAttribute("aria-expanded", isActive);
});

// Overlay toggle
const overlay = document.querySelector("#overlay");

overlay.addEventListener("click", () => {
	overlay.style.display = "none";
});

// Polybox click
const polybox = document.querySelector(".project-polybox");

polybox.addEventListener("click", () => {
	overlay.style.display = "block";
});
