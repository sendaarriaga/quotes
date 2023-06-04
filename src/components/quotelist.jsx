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

  
export default QuoteList;
  