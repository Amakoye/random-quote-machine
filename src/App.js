import React from "react";
class App extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="text">
            Definiteness of purpose is the starting point of all achievement.
          </span>
        </div>
        <div className="quote-author">
          <p id="author">-Abraham Lincoln</p>
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
          <button className="button" id="new-quote">
            New quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
