export const loadQuotes = async () => {
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes`,{ 
            headers: {
              'X-Api-Key': 'pYcZQSGvKJZCghIo/2ORmA==WmsjHmK8RmvrLvAq'
            }
          });
  const quotesload = await response.json();
  return quotesload;
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
