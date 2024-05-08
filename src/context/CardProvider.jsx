import React, { createContext, useEffect, useState } from "react";

export const CardContext = createContext(null);

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("crud-16-cards")) || [];
    setCards(savedCards);
  }, []);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
