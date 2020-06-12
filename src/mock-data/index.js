import avatar from '../assets/image/avatar.jpg';

export const navListData = [
	{
		label: 'О компании',
		slug: '/',
	},    {
		label: 'Услуги',
		slug: '/',
	},    {
		label: 'О продукте',
		slug: '/',
	},    {
		label: 'Контакты',
		slug: '/',
	},
];

export const promoContent = [
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <b>dolore magna aliqua.</b>',
	'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	'<mark>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT!</mark>'
];

const reviewDefault = {
	author: 'Roger Stevenson',
	content: 'American skeptic producer and author Brian Dunning believes Polybius to be an urban legend that grew out of exaggerated and distorted tales of an early release version of Tempest that caused problems with photosensitive epilepsy, motion sickness, and vertigo.',
	avatar,
	slug: '/'
};

export const reviewsData = new Array(7).fill(reviewDefault);

export const promoTitle = 'О Компании';
