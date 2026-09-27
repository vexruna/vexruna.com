const htitle = document.getElementById("hero-title");
const htext = document.getElementById("hero-text");

const bioButton = document.getElementById("bioButton");
const projectsButton = document.getElementById("projectsButton");
const galleryButton = document.getElementById("galleryButton");
const discographyButton = document.getElementById("discographyButton");
const contactButton = document.getElementById("contactButton");

const BioTitle = "Bio";
const BioText =
	"I like psychological horror games.<br><br>My favorite season is autumn.";

const projectsTitle = "Projects";
const projectsText = "";

const galleryTitle = "Gallery";
const galleryText = "";

const discographyTitle = "Discography";
const discographyText = "";

const contactTitle = "Contact";
const contactText = "";

function getHero(title, text) {
	htitle.innerHTML = title;
	htext.innerHTML = text;
}

bioButton.addEventListener("click", () => {
	getHero(BioTitle, BioText);
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
});

projectsButton.addEventListener("click", () => {
	getHero(projectsTitle, projectsText);
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
});

galleryButton.addEventListener("click", () => {
	getHero(galleryTitle, galleryText);
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
});

discographyButton.addEventListener("click", () => {
	getHero(discographyTitle, discographyText);
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
});

contactButton.addEventListener("click", () => {
	getHero(contactTitle, contactText);
	navTabs.classList.remove("active");
	mobileMenuBtn.setAttribute("aria-expanded", "false");
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".hamburger-menu");
const navTabs = document.querySelector(".nav-tabs");

mobileMenuBtn.addEventListener("click", () => {
	const isActive = navTabs.classList.toggle("active");
	mobileMenuBtn.setAttribute("aria-expanded", isActive);
});
