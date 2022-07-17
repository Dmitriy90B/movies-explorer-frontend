import React, { useState } from 'react';
import ProfileButtons from './ProfileButtons/ProfileButtons';
import ProfileButtonSave from './ProfileButtonSave/ProfileButtonSave';

const Profile = () => {
	return (
		<div className="profile">
			<form className="profile__form">
				<h2 className="profile__title">Привет, Виталий!</h2>
				<div className="profile__form-item profile-border">
					<label for="profile-name" className="profile__label">
						Имя
					</label>
					<input
						id="profile-email"
						name="name"
						type="text"
						className="profile__input"
						autoComplete="off"
					/>
				</div>
				<div className="profile__form-item">
					<label for="profile-email" className="profile__label">
						E-mail
					</label>
					<input
						id="profile-email"
						name="email"
						type="email"
						className="profile__input"
						autoComplete="off"
					/>
				</div>
			</form>
			<ProfileButtons />
			{/* <ProfileButtonSave /> */}
		</div>
	);
};

export default Profile;
