import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
	return (
		<section>
			<ul className="movies-card__list">
				{[...Array(11)].map(() => (
					<MoviesCard />
				))}
			</ul>
			<button type="submit" className="movies-card__disclose">
				Ещё
			</button>
		</section>
	);
};

export default MoviesCardList;
