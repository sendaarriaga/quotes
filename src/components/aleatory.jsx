import React, { useEffect, useState } from "react";
import { loadQuotes} from "../api";
import './style/aleatory.css';
import QuoteList from "./quotelist";


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
