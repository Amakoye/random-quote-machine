import React, { useReducer } from "react";
import axios from "axios";
import QuoteContext from "./quoteContext";
import QuoteReducer from "./quoteReducer";
import { SET_LOADING, GET_QUOTES, GET_RANDOM_QUOTE } from "../Types";

const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const QuoteState = (props) => {
  const initialState = {
    quotes: [],
    quote: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(QuoteReducer, initialState);

  //get quotes
  const getQuotes = async () => {
    setLoading();
    const res = await axios.get(`${URL}`);
    dispatch({
      type: GET_QUOTES,
      payload: res.data.items,
    });
  };

  //get random quote
  // const getRandomQuote = () => {};

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
};

export default QuoteState;
