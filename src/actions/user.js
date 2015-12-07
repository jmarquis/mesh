import { firebaseRef, authenticate as fbAuthenticate } from "../firebase";

export function setUpAuthListener () {
	return dispatch => {
		firebaseRef.onAuth(authData => {
			if (authData) {
				firebaseRef.child("users/" + authData.uid).once("value", snapshot => {
					dispatch(updateUser(snapshot.val()));
					dispatch(updateAuthState(true));
				});
			} else {
				dispatch(updateAuthState(false));
			}
		});
	};
}

export function authenticate (email, password) {
	return dispatch => {
		dispatch(updateAuthState("loading"));
		fbAuthenticate(email, password)
			.catch(() => dispatch(updateAuthState(false)));
	};
}

function updateAuthState (authenticated) {
	return {
		type: "UPDATE_AUTH_STATE",
		authenticated
	};
}

function updateUser (userData) {
	return {
		type: "UPDATE_USER",
		userData
	}
}
