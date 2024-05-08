import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CardContext } from "../../context/CardProvider";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Input = styled.input`
  border: 2px solid blue;
  border-radius: 10px;
`;

const Msg = styled.p`
  font-size: 30px;
  color: blue;
`;

const CreateCard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { cards, setCards } = useContext(CardContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const card = {};
    card.id = uuid();
    card.score = 0;
    card.name = inputValue;
    const newCards = [...cards, card];
    setCards(newCards);
    localStorage.setItem("crud-16-cards", JSON.stringify(newCards));
    setInputValue("");
    setIsUpdating(true);
    setTimeout(() => {
      navigate(`/`);
      setIsUpdating(false);
    }, 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="header">
        <Link to={`/`}>Back</Link>
        <h6>CreateCard</h6>
      </div>
      <div className="left"></div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input value={inputValue} onChange={handleChange} autoFocus />
        </form>
        <div>
          {cards?.map((card) => {
            return <span key={card.id}>{card.name}, </span>;
          })}
        </div>
      </div>
      <div className="right"></div>
      <div className="footer">{isUpdating && <Msg>Creating...</Msg>}</div>
    </div>
  );
};

export default CreateCard;