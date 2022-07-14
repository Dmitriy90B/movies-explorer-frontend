import React from 'react';

const ProfileButtonSave = () => {
	return (
		<div className="profile__buttons-save">
			<span id="" className="profile__error">
				При обновлении профиля произошла ошибка.
			</span>
			<button
				type="submit"
				className="user__save-button user__save-button_disabled">
				{/* className="user__save-button user__save-button_enable"> */}
				Сохранить
			</button>
		</div>
	);
};

export default ProfileButtonSave;
