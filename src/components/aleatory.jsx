import React, { useEffect, useRef, useState } from "react";
import { loadQuotes } from "../api";


function AleatoryQuote (){
    const [quotes, setQuotes] = useState(loadQuotes);
    if (quotes === null) {
      return <div>Loading...</div>;
    }
    if (quotes.length === 0) {
      return <div>No quotes.</div>;
    }
    return (
        <div className="quotes-list">
          {quotes.map((quote) => (
            <div className="quote">
              <div className="title">{quote.quote}</div>
              <div className="author">{quote.author}</div>
              <div className="category">{quote.category}</div>
            </div>
          ))}
        </div>
    )
}

export default AleatoryQuote;
