// Asynchronous Function: a function that takes too long to execute and
//   we don't want to wait to get the result back.
//   An async function ALWAYS returns a Promise<...>
//
// async: mark a function that needs to call other asynchronous functions
//

export const loadQuotes = async () => {
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes?limit=1`,{ 
            headers: {
              'x-api-key': 'pYcZQSGvKJZCghIo/2ORmA==WmsjHmK8RmvrLvAq'
            }
          });
  const quotes = await response.json();
  return quotes;
};

export const searchQuotes = async (category) => {
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes?limit=10&category=`+category,{ 
            headers: {
              'X-Api-Key': 'pYcZQSGvKJZCghIo/2ORmA==WmsjHmK8RmvrLvAq'
            }
          });
  const quotes = await response.json();
  return quotes;
};
