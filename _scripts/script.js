// on document load...
$(document).ready(function () {
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
			}
			else {

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

	// arata numarul la hover la CTA
	let oldTel = document.querySelector('.cta').innerText;

	document.querySelector('.cta').addEventListener('mouseover', function (e) {
	
		const tel = e.target.getAttribute('href').substring(4).replace('-', '.');
	
		e.target.innerText = tel;
	});

	document.querySelector('.cta').addEventListener('mouseout', function (e) {
		
		e.target.innerText = oldTel;
	});

	// schimbare categorii la meniuri
	$('.menu-category').on('click', function() {
		
			removeCurrent();

            $(this).addClass('current');

            $('.bottom-left').attr('src','_img/placeholder_' + this.dataset.category + '.png');
            
            if(this.dataset.category == 'pizza' || this.dataset.category == 'inghetata') {
                        
                $(".pizza-only").fadeIn();

                $(".icecream-only").fadeIn();
            }
            else {
                
                $(".pizza-only").fadeOut();

                $(".icecream-only").fadeOut();
            }
            if(this.dataset.category == 'bauturi') {

                $(".no-drinks").fadeOut();
            }
            else {
                
                $(".no-drinks").fadeIn();
            }
            setTimeout(
                () => {

                    $('[data-menufor="' + this.dataset.category + '"]').fadeIn(300);

                    $('.bottom-left').fadeIn(300);
                }
                , 400);
		})
	

	// sageata de scroll to top
	window.onscroll = function () {
		
        scrollFunction();
	};
});

function removeCurrent() {
    $('.menu-category').removeClass('current');
    $('.bottom-left').hide();
    $('.submenu').fadeOut(300);
}

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


