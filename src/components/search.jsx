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
          <select ref={searchRef} placeholder="Choose the category...">
            <option value="">--Please choose an option--</option>
            <option>age</option>
            <option>alone</option>
            <option>amazing</option>
            <option>anger</option>
            <option>architecture</option>
            <option>art</option>
            <option>attitude</option>
            <option>beauty</option>
            <option>best</option>
            <option>birthday</option>
            <option>business</option>
            <option>car</option>
            <option>change</option>
            <option>communications</option>
            <option>computers</option>
            <option>cool</option>
            <option>courage</option>
            <option>dad</option>
            <option>dating</option>
            <option>death</option>
            <option>design</option>
            <option>dreams</option>
            <option>education</option>
            <option>environmental</option>
            <option>equality</option>
            <option>experience</option>
            <option>failure</option>
            <option>faith</option>
            <option>family</option>
            <option>famous</option>
            <option>fear</option>
            <option>fitness</option>
            <option>food</option>
            <option>forgiveness</option>
            <option>freedom</option>
            <option>friendship</option>
            <option>funny</option>
            <option>future</option>
            <option>god</option>
            <option>good</option>
            <option>government</option>
            <option>graduation</option>
            <option>great</option>
            <option>happiness</option>
            <option>health</option>
            <option>history</option>
            <option>home</option>
            <option>hope</option>
            <option>humor</option>
            <option>imagination</option>
            <option>inspirational</option>
            <option>intelligence</option>
            <option>jealousy</option>
            <option>knowledge</option>
            <option>leadership</option>
            <option>learning</option>
            <option>legal</option>
            <option>life</option>
            <option>love</option>
            <option>marriage</option>
            <option>medical</option>
            <option>men</option>
            <option>mom</option>
            <option>money</option>
            <option>morning</option>
            <option>movies</option>
            <option>success</option>
          </select>
          <button onClick={doSearch}>Search</button>
      </div>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default QuoteSearch;
