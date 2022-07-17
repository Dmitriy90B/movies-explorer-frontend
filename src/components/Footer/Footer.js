import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<h3 className="footer__title">
				Учебный проект Яндекс.Практикум х BeatFilm.
			</h3>
			<div className="footer__column">
				<p className="footer__text">© 2020</p>
				<nav>
					<ul className="footer__links">
						<li>
							<a
								href="https://practicum.yandex.ru"
								className=" footer__link"
								target="_blank"
								rel="noreferrer">
								Яндекс.Практикум
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Dmitriy90B"
								className=" footer__link"
								target="_blank"
								rel="noreferrer">
								Github
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
