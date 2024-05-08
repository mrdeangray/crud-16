import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CardContext } from "../../context/CardProvider";

import { Link, useNavigate, useParams } from "react-router-dom";


const Msg = styled.p`
  font-size: 30px;
  color: blue;
`;

const DeleteCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);
  const { cards, setCards } = useContext(CardContext);
  const [currCard, setCurrCard] = useState({});

  useEffect(() => {
    const curr = cards.find((card) => card.id === id);
    setCurrCard(curr);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();
  
    const newCards = cards.filter(card=>card.id !==id)
  
    setCards(newCards);
    localStorage.setItem("crud-16-cards", JSON.stringify(newCards));

    setIsUpdating(true);
    setTimeout(() => {
      navigate(`/`);
      setIsUpdating(false);
    }, 2000);
  };



  return (
    <div>
      <div className="header">
        <Link to={`/`}>Back</Link>
        <h6>Update: {currCard.name}</h6>
      </div>
      <div className="left"></div>
      <div className="main">
   <button onClick={handleDelete}>Delete {currCard.name}</button>
        <div>
          {cards?.map((card) => {
            return <span key={card.id}>{card.name}, </span>;
          })}
        </div>
      </div>
      <div className="right"></div>
      <div className="footer">{isUpdating && <Msg>Updating...</Msg>}</div>
    </div>
  );
};


export default DeleteCard