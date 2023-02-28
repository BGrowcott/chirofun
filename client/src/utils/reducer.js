import { useReducer } from "react";
import { SHOW_MODAL_EXAMPLE } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {

    case SHOW_MODAL_EXAMPLE:
      return {
        ...state,
        setModalExample: !state.setModalExample,
      };

    default:
      return state;
  }
};

export function useGlobalReducer(initialState) {
  return useReducer(reducer, initialState);
}
