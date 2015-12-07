import { firebaseRef } from "../firebase";

let currentTeamRef = null;
export function setCurrentTeam (teamId) {
	return dispatch => {
		if (currentTeamRef) currentTeamRef.off();
		currentTeamRef = firebaseRef.child("teams/" + teamId);
		currentTeamRef.on("value", snapshot => {
			dispatch(updateCurrentTeam(snapshot.val()));
		});
	};
}

function updateCurrentTeam (teamData) {
	return {
		type: "UPDATE_CURRENT_TEAM",
		teamData
	};
}
