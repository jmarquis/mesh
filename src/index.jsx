import "./styles/externals";
import "./styles/base";

import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { createHistory } from "history";
import { Route, IndexRoute, Redirect } from "react-router";
import { ReduxRouter, routerStateReducer, reduxReactRouter } from "redux-router";

import * as reducers from "./reducers";

const combinedReducers = combineReducers({
	router: routerStateReducer,
	...reducers
});

const logger = createLogger({
	level: "info",
	collapsed: true
});

const store = compose(
	applyMiddleware(thunk, logger),
	reduxReactRouter({ createHistory })
)(createStore)(combinedReducers);

import Auth from "./components/Auth";
import Team from "./components/Team";

render((
	<Provider store={store}>
		<ReduxRouter>
			<Route path="/">
				<IndexRoute component={Auth}/>
				<Route path="/teams/:teamId" component={Team}></Route>
			</Route>
			<Redirect path="*" to="/"/>
		</ReduxRouter>
	</Provider>
), document.getElementById("root"));
