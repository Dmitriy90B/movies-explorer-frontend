import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<header className="header ">
		{/* <header className="header header_login"> */}
			<div className="header__content">
				<Link className="header__logo" alt="Логотип" to="/"></Link>
				<Switch>
					<Route exact path="/">
						<nav>
							<ul className="header__links">
								<li>
									<Link className="header__link" to="/signup">
										Регистрация
									</Link>
								</li>
								<li>
									<Link className="header__link" to="/signin">
										Войти
									</Link>
								</li>
							</ul>
						</nav>
					</Route>
					<Route path="/">
						<nav>
							<ul className="header__links-account">
								<li>
									<NavLink
										activeClassName="header__link-movies_active"
										className="header__link-movies"
										to="/movies">
										Фильмы
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="header__link-movies_active"
										className="header__link-movies"
										to="/saved-movies">
										Сохранённые фильмы
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="header__link-account_active"
										className=" header__link-account"
										to="/profile">
										Аккаунт
									</NavLink>
								</li>
							</ul>
						</nav>
						<button
							className="header__burger"
							onClick={() => setMenuActive(!menuActive)}></button>
					</Route>
				</Switch>
				<Navigation active={menuActive} setActive={setMenuActive} />
			</div>
		</header>
	);
};

export default Header;
