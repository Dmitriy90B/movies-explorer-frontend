import React from 'react';
import search from '../../../images/search.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
	return (
		<form className="search-form">
			<div className="search-form__grid">
				<input
					type="text"
					name="name"
					className="search-form__input"
					id="name-movie"
					autoComplete="off"
					placeholder="Фильм"
				/>
				<button type="submit" className="search-form__save-button">
					<img src={search} alt="Поиск" />
				</button>
			</div>
			<FilterCheckbox />
		</form>
	);
};

export default SearchForm;
