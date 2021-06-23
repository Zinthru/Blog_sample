import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import CreatePost from './pages/CreatePost'
import Post from '../pages/Post'
import './App.css';

function App () {

	return (
		<>
		<Router>
			<Switch>
            <Route exact path ="/" exact render={(props)=> <MainPage />}/>
            <Route exact path ="/createpost" exact render={(props)=> <CreatePost />} />
			<Route exact path ="/post/:postId" exact render={(props)=> <Post />} />
			</Switch>
		</Router>
		</>
	);
};