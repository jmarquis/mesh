export function user (state = null, action) {
	switch (action.type) {

		case "UPDATE_USER":
			return action.userData;

		default:
			return state;

	}
}
