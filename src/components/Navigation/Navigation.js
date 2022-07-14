import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ active, setActive }) => {
	const onClose = () => setActive(false);

	return (
		<div className={active ? 'popup popup_opened' : 'popup'} onClick={onClose}>
			<div className="popup__container" onClick={(e) => e.stopPropagation()}>
				<button
					type="button"
					className="popup__close"
					onClick={onClose}></button>
				<nav>
					<ul className="popup__links">
						<li className="popup__link-indent">
							<NavLink
								onClick={onClose}
								activeClassName="popup__link_active"
								className="popup__link"
								to="/"
								exact>
								Главная
							</NavLink>
						</li>
						<li className="popup__link-indent">
							<NavLink
								onClick={onClose}
								activeClassName="popup__link_active"
								className="popup__link"
								to="/movies">
								Фильмы
							</NavLink>
						</li>
						<li className="popup__link-indent">
							<NavLink
								onClick={onClose}
								activeClassName="popup__link_active"
								className="popup__link"
								to="/saved-movies">
								Сохранённые фильмы
							</NavLink>
						</li>
						<li className="popup__link-indent">
							<NavLink
								onClick={onClose}
								activeClassName="header__link-account_active"
								className="header__link-account header__link-account_indent"
								to="/profile">
								Аккаунт
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default Navigation;
