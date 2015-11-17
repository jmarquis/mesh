import Firebase from "firebase";

export const firebaseRef = new Firebase("https://mesh-dev.firebaseio.com");

export function authenticate (email, password) {
	return new Promise((resolve, reject) => {
		if (firebaseRef.getAuth()) resolve();
		else if (email && password) {
			firebaseRef.authWithPassword({
				email,
				password
			}, (error, authData) => {
				if (error) {
					reject();
				} else {
					resolve();
				}
			});
		} else {
			reject();
		}
	});
}
