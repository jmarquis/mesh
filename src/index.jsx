import "./styles/externals";
import "./styles/base";

import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { createHistory } from "history";
import { Router, Route, IndexRoute, Redirect } from "react-router";
import { syncReduxAndRouter, routeReducer } from "redux-simple-router";

import * as reducers from "./reducers";

const combinedReducers = combineReducers({
	router: routeReducer,
	...reducers
});

const logger = createLogger({
	level: "info",
	collapsed: true
});

const store = compose(
	applyMiddleware(thunk, logger)
)(createStore)(combinedReducers);

const history = createHistory();

syncReduxAndRouter(history, store, state => state.router);

import Auth from "./components/Auth";
import Team from "./components/Team";

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/">
				<IndexRoute component={Auth}/>
				<Route path="/teams/:teamId" component={Team}></Route>
			</Route>
			<Redirect path="*" to="/"/>
		</Router>
	</Provider>
), document.getElementById("root"));
