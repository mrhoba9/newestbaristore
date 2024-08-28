/*header starts */
let header = document.querySelector(".header");
let nav_ul_a = document.querySelectorAll(".nav-ul a");
document.getElementById("menu-icon").addEventListener("click", function () {
	header.classList.add("show");
	document.getElementById("menu-icon").classList.add("hidden");
	document.getElementById("close-icon").classList.remove("hidden");
});
document.getElementById("close-icon").addEventListener("click", function () {
	selected();
});
function selected() {
	document.getElementById("menu-icon").classList.remove("hidden");
	document.getElementById("close-icon").classList.add("hidden");
	header.classList.remove("show");
}
nav_ul_a.forEach((element) => {
	element.addEventListener("click", () => {
		slippersSection.classList.remove("hide");
		tShirtsSection.classList.remove("hide");
		pantsSection.classList.remove("hide");
		boxersSection.classList.remove("hide");
		shortsSection.classList.remove("hide");
		socksSection.classList.remove("hide");
		maiosSection.classList.remove("hide");
		perfumeSection.classList.remove("hide");
		setTimeout(() => {
			click_scroll();
		}, 1000);
	});
	if(window.innerWidth >=901){
		document.getElementById("menu-icon").style.display = "none";
	}
});
function click_scroll() {
	if (window.innerWidth >= 901) {
		const newScrollY = window.scrollY - 143;

		window.scrollTo({
			top: newScrollY,
			behavior: "smooth",
		});
	}
}
/*header ends */

/*suggestion starts */
document.addEventListener("DOMContentLoaded", () => {
	const items = document.querySelectorAll(".item");

	items.forEach((item) => {
		const suggestionsContainer = item.querySelector(".suggestions");
		const suggestions = item.getAttribute("data-suggestions").split(", ");

		suggestions.forEach((suggestion) => {
			const suggestionElement = document.createElement("div");
			suggestionElement.classList.add("suggestion-item");
			suggestionElement.textContent = suggestion;
			suggestionsContainer.appendChild(suggestionElement);
		});
	});
});
/*suggestion ends */

/*download starts */
document.querySelectorAll(".product-btn").forEach((button) => {
	button.addEventListener("click", function () {
		// Find the closest parent card element
		var card = button.closest(".product");

		// Select the image within that specific card
		var image = card.querySelector("img");

		// Create a download link
		var link = document.createElement("a");
		link.href = image.src;
		link.download = image.alt;

		// Append the link to the body, trigger the download, then remove the link
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});
});

/*download ends */

/*category icon starts */
let category_search = document.getElementById("category_search");
let pop_div_holder = document.getElementById("pop_div_holder");

category_search.onclick = () => {
	pop_div_holder.classList.remove("hide");
	pop_div_holder.classList.add("show-block");
};
// divs in category
const tshirtDiv = document.getElementById("category-tshirt");
const pantsDiv = document.getElementById("category-pants");
const boxersDiv = document.getElementById("category-boxers");
const shortsDiv = document.getElementById("category-shorts");
const socksDiv = document.getElementById("category-socks");
const slippersDiv = document.getElementById("category-slippers");
const maiosDiv = document.getElementById("category-maios");
const perfumeDiv = document.getElementById("category-perfume");


//section in the body carry the cards
const tShirtsSection = document.getElementById("T-Shirts");
const pantsSection = document.getElementById("Pants");
const boxersSection = document.getElementById("Boxers");
const shortsSection = document.getElementById("Shorts");
const socksSection = document.getElementById("Socks");
const slippersSection = document.getElementById("Slippers");
const maiosSection = document.getElementById("Maios");
const perfumeSection = document.getElementById("Perfume");
const category_reset = document.getElementById("category-reset");

// Add event listeners for each section
tshirtDiv.addEventListener("click", () => {
	tShirtsSection.classList.remove("hide");
	pantsSection.classList.add("hide");
	boxersSection.classList.add("hide");
	shortsSection.classList.add("hide");
	socksSection.classList.add("hide");
	slippersSection.classList.add("hide");
	maiosSection.classList.add("hide");
	perfumeSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

pantsDiv.addEventListener("click", () => {
	pantsSection.classList.remove("hide");
	tShirtsSection.classList.add("hide");
	boxersSection.classList.add("hide");
	shortsSection.classList.add("hide");
	socksSection.classList.add("hide");
	slippersSection.classList.add("hide");
	maiosSection.classList.add("hide");
	perfumeSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

boxersDiv.addEventListener("click", () => {
	boxersSection.classList.remove("hide");
	tShirtsSection.classList.add("hide");
	pantsSection.classList.add("hide");
	shortsSection.classList.add("hide");
	socksSection.classList.add("hide");
	slippersSection.classList.add("hide");
	maiosSection.classList.add("hide");
	perfumeSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

shortsDiv.addEventListener("click", () => {
	shortsSection.classList.remove("hide");
	tShirtsSection.classList.add("hide");
	pantsSection.classList.add("hide");
	boxersSection.classList.add("hide");
	socksSection.classList.add("hide");
	slippersSection.classList.add("hide");
	maiosSection.classList.add("hide");
	perfumeSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

socksDiv.addEventListener("click", () => {
	socksSection.classList.remove("hide");
	tShirtsSection.classList.add("hide");
	pantsSection.classList.add("hide");
	boxersSection.classList.add("hide");
	shortsSection.classList.add("hide");
	slippersSection.classList.add("hide");
	maiosSection.classList.add("hide");
	perfumeSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

slippersDiv.addEventListener("click", () => {
	slippersSection.classList.remove("hide");
	tShirtsSection.classList.add("hide");
	pantsSection.classList.add("hide");
	boxersSection.classList.add("hide");
	shortsSection.classList.add("hide");
	socksSection.classList.add("hide");
	maiosSection.classList.add("hide");
	perfumeSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

maiosDiv.addEventListener("click", () => {
	maiosSection.classList.remove("hide");
	tShirtsSection.classList.add("hide");
	pantsSection.classList.add("hide");
	boxersSection.classList.add("hide");
	shortsSection.classList.add("hide");
	socksSection.classList.add("hide");
	slippersSection.classList.add("hide");
	perfumeSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

perfumeDiv.addEventListener("click", () => {
	perfumeSection.classList.remove("hide");
	tShirtsSection.classList.add("hide");
	pantsSection.classList.add("hide");
	boxersSection.classList.add("hide");
	shortsSection.classList.add("hide");
	socksSection.classList.add("hide");
	slippersSection.classList.add("hide");
	maiosSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Reset</p>`;
});

category_reset.addEventListener("click", () => {
	perfumeSection.classList.remove("hide");
	tShirtsSection.classList.remove("hide");
	pantsSection.classList.remove("hide");
	boxersSection.classList.remove("hide");
	shortsSection.classList.remove("hide");
	socksSection.classList.remove("hide");
	slippersSection.classList.remove("hide");
	maiosSection.classList.remove("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	category_reset.innerHTML = `<p class="product-label">Close</p>`;
});

function scroller() {
	window.scrollTo(0, 0);
}
window.onload = () => {
	scroller();
};

/*loading start*/
window.addEventListener("load", function () {
	const loadingspinner = document.querySelector(".loading");
	setTimeout(function () {
		loadingspinner.style.display = "none";
		document.body.style.overflowY = "scroll";
	}, 5650);
});
/*loading finish*/
