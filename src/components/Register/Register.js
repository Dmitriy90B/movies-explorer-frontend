import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

	return (
		<section className="user">
			<form className="user__form">
				<Link
					className="header__logo header__logo_indent"
					alt="Логотип"
					to="/"></Link>
				<h2 className="user__title">Добро пожаловать!</h2>
				<label for="name" className="user__label">
					Имя
				</label>
				<input
					id="name"
					name="name"
					type="text"
					className="user__input"
					required
					autoComplete="off"
				/>
				<label for="email" className="user__label">
					E-mail
				</label>
				<input
					id="email"
					name="email"
					type="email"
					className="user__input"
					required
					autoComplete="off"
				/>
				<label for="password" className="user__label">
					Пароль
				</label>
				<input
					id="password"
					name="password"
					type="password"
					className="user__input"
					required
					autoComplete="off"
				/>
				<span id="" className="user__error">
					Пользователь с таким email уже существует.
				</span>
				<button type="submit" className="user__save-button">
					Зарегистрироваться
				</button>
				<div className="user__sign">
					<p className="user__text">Уже зарегистрированы?&#160;&#160;</p>
					<Link to="/signin" className="user__link">
						Войти
					</Link>
				</div>
			</form>
		</section>
	);
};

export default Register;
