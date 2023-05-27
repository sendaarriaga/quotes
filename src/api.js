// Asynchronous Function: a function that takes too long to execute and
//   we don't want to wait to get the result back.
//   An async function ALWAYS returns a Promise<...>
//
// async: mark a function that needs to call other asynchronous functions
//

export const loadQuotes = async () => {
  const response = await fetch(`https://type.fit/api/quotes`);
  const quotes = await response.json();
  return quotes;
};

export const searchQuotes = async (query) => {
  const queryParams = query !== "" ? `?quote_id=${query}` : "";
  const response = await fetch(`https://type.fit/api/quotes`
    //`https://https://type.fit/api/quotes/:${queryParams}`
  );
  const quotes = await response.json();
  return quotes;
};
