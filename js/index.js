document.querySelector("#Greet").style.display = "flex";
const bioButton = document.getElementById("bioButton");
const projectsButton = document.getElementById("projectsButton");
const galleryButton = document.getElementById("galleryButton");
const discographyButton = document.getElementById("discographyButton");
const contactButton = document.getElementById("contactButton");

const hero = document.getElementsByClassName("hero-content");

function openTab(tabName) {
	for (let i = 0; i < hero.length; i++) {
		hero[i].style.display = "none";
		document.getElementById(tabName).style.display = "flex";
	}
}

bioButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("Bio");
});

projectsButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("Projects");
});

galleryButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("Gallery");
});

discographyButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("Discography");
});

contactButton.addEventListener("click", () => {
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
	openTab("Contact");
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".hamburger-menu");
const navTabs = document.querySelector(".nav-tabs");

mobileMenuBtn.addEventListener("click", () => {
	const isActive = navTabs.classList.toggle("active");
	mobileMenuBtn.setAttribute("aria-expanded", isActive);
});
