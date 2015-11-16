import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { createHistory } from "history";
import { Route, Redirect } from "react-router";
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

import App from "./components/App";

render((
	<Provider store={store}>
		<ReduxRouter>
			<Route path="/" component={App}>

			</Route>
			<Redirect path="*" to="/"/>
		</ReduxRouter>
	</Provider>
), document.getElementById("root"));
