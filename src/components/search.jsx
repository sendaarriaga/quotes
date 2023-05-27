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
          <div className="title">{quote.text}</div>
          <div className="tagline">{quote.author}</div>
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
    searchQuotes(search).then((quotes) => setQuotes(quotes));
  }, [search]);

  const doSearch = (event) => {
    event.preventDefault();
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  return (
    <div className="quote-search">
      <form onSubmit={doSearch}>
        <input type="text" ref={searchRef} />
        <button>Search</button>
      </form>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default QuoteSearch;
