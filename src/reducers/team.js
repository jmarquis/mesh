export function team (state = null, action) {
	switch (action.type) {

		case "UPDATE_CURRENT_TEAM":
			return action.teamData;

		default:
			return state;

	}
}
