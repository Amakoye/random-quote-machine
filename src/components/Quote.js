import React, { useState } from "react";
import { quotesData } from "../data";

const Quote = () => {
  /*   let quotes = quotesData; */
  //console.log(quotes);
  // set a default random quote
  let quote = quotesData[Math.floor(Math.random() * quotesData.length)];
  //console.log(quote);

  const [randomQuote, setRandomQuote] = useState(quote);

  //set a random quote
  const getRandomQuote = () => {
    let newQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
    setRandomQuote(() => {
      return newQuote;
    });
  };

  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">{randomQuote.quote}</span>
      </div>
      <div className="quote-author">
        <p id="author">-{randomQuote.author}</p>
      </div>
      <div className="quote-buttons">
        <a
          href="twitter.com/intent/tweet"
          className="button "
          id="tweet-quote"
          target="_blank"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <button className="button" id="new-quote" onClick={getRandomQuote}>
          New quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
