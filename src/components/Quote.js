/* eslint-disable no-undef */
import React, { useState } from "react";
import { quotesData } from "../data";
import { COLORS } from "../bgColors";

const Quote = () => {
  // set a default random quote
  let quote = quotesData[Math.floor(Math.random() * quotesData.length)];
  // apply a default styling on page load
  let bgColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const tweetButton = document.getElementById("tweet-quote");
    const nextQuoteBtn = document.querySelector("button");
    body.style.background = bgColor;
    body.style.color = bgColor;
    tweetButton.style.background = bgColor;
    nextQuoteBtn.style.background = bgColor;
    //console.log(bgColor);
  });

  // set new style on next quote
  const setBackground = () => {
    let bgColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const body = document.querySelector("body");
    const tweetButton = document.getElementById("tweet-quote");
    const nextQuoteBtn = document.querySelector("button");
    body.style.background = bgColor;
    body.style.color = bgColor;
    tweetButton.style.background = bgColor;
    nextQuoteBtn.style.background = bgColor;
    //console.log(bgColor);
  };

  const [randomQuote, setRandomQuote] = useState(quote);

  //set a random quote
  const getRandomQuote = () => {
    let newQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
    setRandomQuote(() => {
      return newQuote;
    });
    setBackground();
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
      <div className="quote-buttons" id="quote-buttons">
        <a
          href="twitter.com/intent/tweet"
          className="tweet-btn btn"
          id="tweet-quote"
          target="_blank"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <button
          className="next-quote btn"
          id="new-quote quote-btn"
          onClick={getRandomQuote}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
