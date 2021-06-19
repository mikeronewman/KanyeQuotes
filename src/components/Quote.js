import axios from 'axios';
import {useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState(''); 

  async function fetchQuote() {
    const result = await axios(
      'https://api.kanye.rest/'
    );
    setQuote(JSON.stringify(result.data.quote));
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <h1 className="quote">
        {quote}
      </h1>

      <button onClick={fetchQuote}>ANOTHA ONE</button>
    </>
  );
}

export default Quote;
