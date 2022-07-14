import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const ProfileButtons = () => {
	return (
		<div className="profile__buttons">
			<button type="" className="profile__button">
				Редактировать
			</button>
			<Link
				type="submit"
				className="profile__button profile__button_sign-out"
				to="/">
				Выйти из аккаунта
			</Link>
		</div>
	);
};

export default ProfileButtons;
