import React from 'react';

const AboutProject = () => {
	return (
		<section id="about-project" className="about-project">
			<h2 className="heading">О проекте</h2>
			<ul className="about-project__table">
				<li>
					<h3 className="about-project__title">
						Дипломный проект включал 5 этапов
					</h3>
					<p className="about-project__subtitle">
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности и финальные доработки.
					</p>
				</li>
				<li>
					<h3 className="about-project__title">
						На выполнение диплома ушло 5 недель
					</h3>
					<p className="about-project__subtitle">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать, чтобы успешно защититься.
					</p>
				</li>
			</ul>

			<ul className="about-project__week">
				<li>
					<p className="about-project__text about-project__text_color_green">
						1 неделя
					</p>
					<p className="about-project__text">Back-end</p>
				</li>
				<li>
					<p className="about-project__text about-project__text_color">
						4 недели
					</p>
					<p className="about-project__text">Front-end</p>
				</li>
			</ul>
		</section>
	);
};

export default AboutProject;
