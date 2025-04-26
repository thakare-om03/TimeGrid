import React, { useState, useEffect } from 'react';

const quotes = [
  {
    text: "How you spend this time is going to determine the quality of your life.",
    author: "Dino Ambrosi"
  },
  {
    text: "The body, mind, and character that you will have in the future are being actively shaped by how you choose to use your time today.",
    author: "Dino Ambrosi"
  },
  {
    text: "Don't let yourself get to the age of 90 only to look back on your life and realize that while you were trying to avoid FOMO, you actually missed out on living.",
    author: "Dino Ambrosi"
  },
  {
    text: "That free time is your most valuable resource. Do not give it away for free.",
    author: "Dino Ambrosi"
  }
];

const QuoteRotator: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4">
      <div className="container mx-auto px-4">
        <blockquote className="text-center">
          <p className="text-lg md:text-xl italic text-slate-200 transition-opacity duration-500">
            "{quotes[currentQuote].text}"
          </p>
          <footer className="mt-2 text-teal-400 font-medium">
            — {quotes[currentQuote].author}
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteRotator;