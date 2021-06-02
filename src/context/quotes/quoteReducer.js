/* eslint-disable import/no-anonymous-default-export */
import { SET_LOADING, GET_QUOTES, GET_RANDOM_QUOTE } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
        loading: false,
      };

    case GET_RANDOM_QUOTE:
      return {
        ...state,
        quote: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
