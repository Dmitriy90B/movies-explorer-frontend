import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

const App = () => {
	return (
		<div className="page">
			<Switch>
				<Route exact path="/">
					<Header />
					<Main />
					<Footer />
				</Route>

				<Route path="/signup">
					<Register />
				</Route>

				<Route path="/signin">
					<Login />
				</Route>

				<Route path="/movies">
					<Header />
					<Movies />
					<Footer />
				</Route>

				<Route path="/saved-movies">
					<Header />
					<SavedMovies />
					<Footer />
				</Route>

				<Route path="/profile">
					<Header />
					<Profile />
				</Route>

				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
