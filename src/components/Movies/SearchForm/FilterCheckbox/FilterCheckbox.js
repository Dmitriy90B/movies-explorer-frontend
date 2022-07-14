import React from 'react';

const FilterCheckbox = () => {
	return (
		<div className="filter-checkbox">
			<input type="checkbox" id="check" />
			<label for="check"></label>
			<span className="filter-checkbox__span">Короткометражки</span>
		</div>
	);
};

export default FilterCheckbox;
