import React from 'react';
import landing from '../../../images/landing.svg';

const Promo = () => {
	return (
		<section className="promo">
			<div className="promo__content">
				<img className="promo__logo" src={landing} alt="Логотип" />
				<h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
			</div>
		</section>
	);
};

export default Promo;
