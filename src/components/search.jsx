import React, { useEffect, useRef, useState } from "react";
import { searchQuotes } from "../api";
import './style/search.css';

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
          <div className="category">Category of {quote.category}</div>
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
      <p>Search by category:</p>
      <div className="category">
          <input type="text" ref={searchRef} placeholder="Write the category..."/>
          <button onClick={doSearch}>Search</button>
      </div>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default QuoteSearch;
