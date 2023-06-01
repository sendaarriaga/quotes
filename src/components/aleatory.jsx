import React, { useEffect, useState } from "react";
import { loadQuotes} from "../api";
import './style/aleatory.css';


const QuoteList = ({ quotes }) => {
  
  if (quotes === null) {
    return <div>Loading...</div>;
  }
  if (quotes.length === 0) {
    return <div>No quotes.</div>;
  }
  return (
    <div className="quote">
      {quotes.map((quote) => (
        <div className="quote">
          <div className="title">{quote.quote}</div>
          <div className="author">{quote.author}</div>
        </div>
      ))}
    </div>
  );
};

function AleatoryQuote() {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    loadQuotes().then((quotes) => setQuotes(quotes));
  }, []);

  return (
    <div className="quote-aleatory">
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default AleatoryQuote;
