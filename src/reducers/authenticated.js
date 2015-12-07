export function authenticated (state = "loading", action) {
	switch (action.type) {

		case "UPDATE_AUTH_STATE":
			return action.authenticated;

		default:
			return state;

	}
}
