import React, { useEffect, useRef, useState } from "react";
import { loadQuotes, searchQuotes } from "../api";


const QuoteList = ({ quotes }) => {
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
  );
};

function QuoteSearch() {
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    searchQuote(search).then((quotes) => setQuotes(quotes));
  }, [search]);

  const doSearch = (event) => {
    event.preventDefault();
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  return (
    <div className="quote-search">
      <div className="category">
          <h3>By Quote:</h3>
          <input type="text" ref={searchRef} placeholder="Write the quote..."/>
          <button onClick={doSearch}>Search</button>
      </div>
      <div className="author">
          <h3>By Category:</h3>
          <input type="text" ref={searchRef} placeholder="Write the author..."/>
          <button onClick={doSearch}>Search</button>
      </div>
      <div className="category">
          <h3>By Category:</h3>
          <input type="text" ref={searchRef} placeholder="Write the category..."/>
          <button onClick={doSearch}>Search</button>
      </div>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default QuoteSearch;
