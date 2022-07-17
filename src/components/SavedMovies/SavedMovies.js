import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

const SavedMovies = () => {
	return (
		<div className="movies">
			<SearchForm />
			<MoviesCardList />
		</div>
	);
};

export default SavedMovies;
