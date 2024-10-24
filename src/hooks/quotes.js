// Create a new file: src/hooks/quotes.js (note the lowercase 'q')
export const quotes = [
    { text: "The only way to do great work is to love what you do", author: "Steve Jobs" },
    { text: "Don't count the days, make the days count", author: "Muhammad Ali" },
    { text: "Done is better than perfect", author: "Sheryl Sandberg" },
    { text: "Focus on being productive instead of busy", author: "Tim Ferriss" },
    { text: "Small progress is still progress", author: "Anonymous" },
    { text: "Your time is limited, don't waste it", author: "Steve Jobs" },
    { text: "Quality is not an act, it is a habit", author: "Aristotle" },
    { text: "Start where you are. Use what you have. Do what you can", author: "Arthur Ashe" }
  ];
  
  export const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };