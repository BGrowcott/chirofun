import { useReducer } from "react";
import { LOAD_REVIEWS, SHOW_MODAL_EXAMPLE } from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case SHOW_MODAL_EXAMPLE:
			return {
				...state,
				setModalExample: !state.setModalExample,
			};

		case LOAD_REVIEWS:
			return {
				...state,
				reviews: [...action.reviews],
				rating: action.rating,
				userRatingCount: action.userRatingCount
			};

		default:
			return state;
	}
};

export function useGlobalReducer(initialState) {
	return useReducer(reducer, initialState);
}
