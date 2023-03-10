export function menuBurgerActivate() {
	if (window.innerWidth < 1390) {
		const menuIcon = document.querySelector('.menu-burger');
		const navigation = document.querySelector('.navigation');
		const body = document.querySelector('body');

		menuIcon.onclick = function () {
			menuIcon.classList.toggle('active');
			navigation.classList.toggle('active');
			body.classList.toggle('lock');
		}

		navigation.onclick = function () {
			menuIcon.classList.remove('active');
			navigation.classList.remove('active');
			body.classList.remove('lock');
		}

		const item = document.querySelector('.header__body');
		const search = document.querySelector('.search_mb');
		const closeBtn = document.querySelector('.searchbar__close-icon');
		search.onclick = function () {
			item.classList.add('active');
		}

		closeBtn.onclick = function () {
			item.classList.remove('active');
		}
	}

	const searchbarContainer = document.querySelector('.searchbar');
	searchbarContainer.onclick = (e) => {
		let target = e.target;
		if (target.classList.contains('search_icon')) {
			goToSearchPage();
		} else if (target.classList.contains('searchbar__close-icon')) {
			emptyInput();
		}
	};
	document.querySelector('.searchbar__text').onsearch = () => goToSearchPage();


	function goToSearchPage() {
		const inputText = document.querySelector('.searchbar__text').value;
		if (inputText != '') {
			window.location.href = './search-page.php?requestText=' + inputText;
		}
	}
	function emptyInput() {
		document.querySelector('.searchbar__text').value = '';
	}
}

export function cartActivate() {
	const myCartBtn = document.querySelector('.mycart');
	const myCartBtnMb = document.querySelector('.mycart_mb');
	const myCartBody = document.querySelector('.mycart-popup');
	const body = document.querySelector('body');

	//openPopup
	myCartBtn.onclick = () => {
		myCartBody.classList.add('active');
		body.classList.add('lock');
	};
	myCartBtnMb.onclick = () => {
		myCartBody.classList.add('active');
		body.classList.add('lock');
	};

	//closePopup
	myCartBody.onclick = function (e) {
		let target = e.target;

		if (target.closest('.mycart-popup__goback') || target == myCartBody) {
			myCartBody.classList.remove('active');
			body.classList.remove('lock');
		}
	}
}
