import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

	return (
		<div className="user">
			<form className="user__form">
				<Link
					className="header__logo header__logo_indent"
					alt="Логотип"
					to="/"></Link>
				<h2 className="user__title">Рады видеть!</h2>
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
					При авторизации произошла ошибка. Токен не передан или передан не в
					том формате.
				</span>
				<button
					type="submit"
					className="user__save-button user__save-submit_login">
					Войти
				</button>
				<div className="user__sign">
					<p className="user__text">Ещё не зарегистрированы?&#160;&#160;</p>
					<Link to="/signup" className="user__link">
						Регистрация
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
