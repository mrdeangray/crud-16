import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/CardProvider";
import Card from "../../Card";
import "./read-cards.css"
const ReadCards = () => {
  const { cards } = useContext(CardContext);
  return (
    <div className="read-cards">
      <div className="header">
        <h6>ReadCards</h6>
        <Link to={`/create`}>
          <button>Create Card</button>
        </Link>
      </div>
      <div className="left"></div>
      <div className="main">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div className="right">

      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ReadCards;
