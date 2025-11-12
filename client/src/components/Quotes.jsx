import React, { useEffect, useState } from "react";
import axios from "axios";

const Quotes = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  const fetchQuote = async () => {
    try {
    //   Add a cache-busting timestamp to ensure fresh results
      const response = await axios.get(  `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random?time=${Date.now()}`
      );

      const data = Array.isArray(response.data) ? response.data[0] : null;

      if (data) {
        setQuote({ content: data.q, author: data.a });
      }
    } catch (error) {
      console.error("Failed to fetch quote: ", error);
      setQuote({
        content: "Be kind to yourself — growth takes time.",
        author: "Unknown",
      });
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); // 👈 Only runs once on mount / page refresh

  return (
    <div className="p-4  rounded-lg shadow-md text-center">
      <p className="text-lg italic text-gray-800">"{quote.content}"</p>
      <p className="mt-2 text-sm text-gray-600">— {quote.author}</p>
    </div>
  );
};

export default Quotes;
