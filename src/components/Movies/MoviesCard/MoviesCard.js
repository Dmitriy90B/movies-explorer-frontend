import React from 'react';
import movie from '../../../images/movie.jpg';

const MoviesCard = () => {
	return (
		<li>
			<div className="movies-card__items">
				<h2 className="movies-card__title">33 слова о дизайне</h2>
				<button
					type="submit"
					className="movies-card__button  movies-card__button_save"></button>
					{/* className="movies-card__button  movies-card__button_delete"></button> */}
				<time className="movies-card__time" datetime="">
					1ч 47м
				</time>
			</div>
			<img className="movies-card__image" src={movie} alt="Кадр из фильма" />
		</li>
	);
};

export default MoviesCard;
