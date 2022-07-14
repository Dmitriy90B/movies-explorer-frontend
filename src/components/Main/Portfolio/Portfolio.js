import React from 'react';
import arrow from '../../../images/arrow.svg';

const Portfolio = () => {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<nav>
				<ul className="portfolio__list">
					<li className="portfolio__items">
						<p className="portfolio__item">Статичный сайт</p>
						<a
							className="portfolio__link"
							href="https://dmitriy90b.github.io/how-to-learn/"
							target="_blank"
							rel="noreferrer">
							<img src={arrow} alt="Ссылка на проект" />
						</a>
					</li>
					<li className="portfolio__items">
						<p className="portfolio__item">Адаптивный сайт</p>
						<a
							className="portfolio__link"
							href="https://dmitriy90b.github.io/russian-travel/"
							target="_blank"
							rel="noreferrer">
							<img src={arrow} alt="Ссылка на проект" />
						</a>
					</li>
					<li className="portfolio__items">
						<p className="portfolio__item">Одностраничное приложение</p>
						<a
							className="portfolio__link"
							href="https://dmitriy90b.github.io/mesto/"
							target="_blank"
							rel="noreferrer">
							<img src={arrow} alt="Ссылка на проект" />
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Portfolio;
