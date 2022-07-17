import React from 'react';
import photo_2022 from '../../../images/photo_2022.jpg';

const AboutMe = () => {
	return (
		<section id="about-me" className="about-me">
			<h2 className="heading">Студент</h2>
			<div className="about-me__grid">
				<div className="about-me__content">
					<h3 className="about-me__title">Виталий</h3>
					<p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
					<p className="about-me__text">
						Я родился и живу в Саратове, закончил факультет экономики СГУ. У
						меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
						бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
						Контур». После того, как прошёл курс по веб-разработке, начал
						заниматься фриланс-заказами и ушёл с постоянной работы.
					</p>
					<nav>
						<ul className="about-me__links">
							<li>
								<a
									href="https://github.com/Dmitriy90B"
									className="about-me__link"
									target="_blank"
									rel="noreferrer">
									Github
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<img className="about-me__item" src={photo_2022} alt="Фото" />
			</div>
		</section>
	);
};

export default AboutMe;
