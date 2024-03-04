// intersection observer la header
const header = document.querySelector('.hero');
const nav = document.querySelector('.desktop-nav');
const logo = document.getElementById('logo');

const headerObserver = new IntersectionObserver(
	function (entries) {
		const [entry] = entries;
		if (!entry.isIntersecting) {
			nav.classList.add('faded');
			logo.setAttribute('src', '_img/logo_dark.png');
		} else {
			nav.classList.remove('faded');
			logo.setAttribute('src', '_img/logo.png');
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: `-50px`,
	}
);

headerObserver.observe(header);

// arata numarul la CTA
let oldTel = document.querySelector('.cta').innerText;
document.querySelector('.cta').addEventListener('mouseover', function (e) {
	const tel = e.target.getAttribute('href').substring(4).replace('-', '.');
	e.target.innerText = tel;
});
document.querySelector('.cta').addEventListener('mouseout', function (e) {
	e.target.innerText = oldTel;
});

// sageata de scroll to top
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 480 ||
		document.documentElement.scrollTop > 480
	) {
		document.getElementById('scrollButton').style.display = 'block';
	} else {
		document.getElementById('scrollButton').style.display = 'none';
	}
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
