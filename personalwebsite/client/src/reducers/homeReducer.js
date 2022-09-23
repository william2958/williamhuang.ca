import {HOME_HIGHLIGHT_LOADED} from "../actions/types";

const INITIAL_STATE = {
	type: null,
	highlight: null
}

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case HOME_HIGHLIGHT_LOADED:
			return {
				...state,
				type: action.payload.type,
				highlight: action.payload.highlight
			}
		default:
			return state;
	}

}
