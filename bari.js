let menu = document.getElementById("men-ico");
let closeI = document.getElementById("close-ico");
let header = document.getElementById("header");
let darkMode = document.getElementById("darkMode");
let second_container = document.getElementById("container");
let third_container = document.getElementById("third-container");

menu.addEventListener("click", () => {
	header.style.width = "100%";
	menu.style.display = "none";
	closeI.style.display = "block";
});

closeI.addEventListener("click", () => {
	header.style.width = "0%";
	menu.style.display = "block";
	closeI.style.display = "none";
});

function darkmode() {
	document.body.classList.toggle("dark-mode");
	header.classList.toggle("light-mode");
	menu.classList.toggle("light-mode");
	closeI.classList.toggle("light-mode");
	second_container.classList.toggle("dark-mode");
	third_container.classList.toggle("dark-mode");
}
darkMode.addEventListener("click", darkmode);

/*change to arabic start */
const welcomeText = document.getElementById("welcomeText");
let arabicBtn = document.getElementById("lang-ar");
let englishBtn = document.getElementById("lang-en");
let changeDirection = document.getElementById("cont-title");
let stuff_text = document.querySelector(".third-title");
let card_holder = document.getElementById("card-holder");
let call_text = document.querySelector(".call-text");
call_text.style.opacity = 0;
let upper_text_button = document.getElementById("upper-text-button");

arabicBtn.addEventListener("click", () => {
	changeDirection.classList.add("rtl");
	changeDirection.innerHTML = `
        <p id="welcomeText">مرحبا بك في</p>
        <span class="ans"style="animation-delay: 1.9s; margin-left:-2px">STORE</span>
        <span class="ans"style="animation-delay: 1.2s;">I</span>
        <span class="ans"style="animation-delay: 1.1s;">R</span>
        <span class="ans"style="animation-delay: 1s;">A</span>
        <span class="ans"style="animation-delay: 0.9s; margin-right:0;">B</span>

    `;
	const spans = document.querySelectorAll(".cont-title span");
	spans.forEach((span) => span.classList.add("reversed-animation"));
	animation_logo();
	stuff_text.innerHTML = "المالكون";
	card_holder.classList.add("rtl");
	card_holder.innerHTML = `
        <div class="card">
                <img src="teacher logo.avif" alt="Teacher Photo" class="card-photo">
                <div class="card-content">
                    <h2 class="card-name">د. أحمد</h2>
                    <p class="card-experience">سنوات الخبرة: 10</p>
                    <p class="card-position">الوظيفة: معلم أول</p>
                    <p class="card-description">د. أحمد، معلم أول ذو خبرة 10 سنوات، يتفوق في تدريس الرياضيات وتحفيز الطلاب.</p>
                </div>
            </div>
            <div class="card">
                <img src="auro.jpg" alt="Teacher Photo" class="card-photo">
                <div class="card-content">
                    <h2 class="card-name">آنسة سلمى دودار</h2>
                    <p class="card-experience">سنوات الخبرة: 10</p>
                    <p class="card-position">الوظيفة: معلم أول</p>
                    <p class="card-description">سلمى معلمة ذات خبرة وشغف بتدريس الرياضيات وإلهام الطلاب.</p>
                </div>
            </div>
    `;
	call_text.innerHTML = "!اتصل الآن";
});

englishBtn.addEventListener("click", () => {
	changeDirection.classList.remove("rtl");
	changeDirection.innerHTML = `
        <p id="welcomeText">Welcome To</p>
        <span style="animation-delay: 0.9s;">B</span>
        <span style="animation-delay: 1.0s;">A</span>
        <span style="animation-delay: 1.1s;">R</span>
        <span style="animation-delay: 1.2s;">I</span>
        <span style="animation-delay: 1.5s;">STORE</span>

    `;
	animation_text();
	animation_logo();
	card_holder.classList.remove("rtl");
	card_holder.innerHTML = `
        <div class="card">
            <img src="teacher logo.avif" alt="Teacher Photo" class="card-photo">
            <div class="card-content">
                <h2 class="card-name">Dr. Ahmed</h2>
                <p class="card-experience">Years of Experience: 10</p>
                <p class="card-position">Position: Senior Teacher</p>
                <p class="card-description">Dr. Ahmed, a senior teacher with 10 years of experience, excels in teaching mathematics and motivating students.</p>
            </div>
        </div>
        <div class="card">
            <img src="auro.jpg" alt="Teacher Photo" class="card-photo">
            <div class="card-content">
                <h2 class="card-name">Ms. Salma Dwedar</h2>
                <p class="card-experience">Years of Experience: 10</p>
                <p class="card-position">Position: Senior Teacher</p>
                <p class="card-description">Jane is an experienced educator with a passion for teaching mathematics and inspiring students.</p>
            </div>
        </div>
    `;
	stuff_text.innerHTML = "owners";
	call_text.innerHTML = "call now!";
});
/*change to arabic finish*/

/*scroll to middle container start*/

function scrollToContainer() {
	const viewportHeight = window.innerHeight;
	window.scrollTo({
		top: viewportHeight,
	});
	animation_text();
	animation_logo();
	document.body.style.overflowY = "scroll";
}
window.onload = () => {
	window.scrollTo({
		top: 0,
	});
};

function animation_text() {
	const spans = document.querySelectorAll(".cont-title span");
	spans.forEach((span) => {
		span.classList.add("ans");
	});
}
function animation_logo() {
	const tweety_logo = document.getElementById("background-logo-container");
	tweety_logo.classList.add("background-logo-container-animation");
	setTimeout(() => {
		tweety_logo.classList.remove("background-logo-container-animation");
	}, 2601);
}
/*scroll to middle container ends*/

/* call text start */

function toggleOpacity() {
	const callText = document.querySelector(".call-text");
	let visible = false;

	setInterval(() => {
		if (visible) {
			callText.style.opacity = 0;
			visible = false;
		} else {
			callText.style.opacity = 1;
			visible = true;
		}
	}, 8000);
}

toggleOpacity();

setInterval(() => {
	call_text.style.opacity = 1;
	setTimeout(() => {
		call_text.style.opacity = 0;
	}, 4000);
}, 8000);

/* call text ends */
let view_product_btn = document.querySelector(".view-product-btn");

function redir(){
    window.open("./product.html",'_blank')
    // window.location.href = "";
}