let btnShare = document.querySelector('#js--btn-share');
let shareCard = document.querySelector('.article__share--card');

shareCard.style.display = 'none';

btnShare.addEventListener('click', (e) => {
	btnShare.classList.toggle('active');

	if (shareCard.style.display == 'none') {
		shareCard.style.display = 'flex';
	} else {
		shareCard.style.display = 'none';
	}
});
