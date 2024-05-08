import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const [score, setScore] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    getScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getScore = async () => {
    try {
      const { data } = await axios(`https://api.github.com/users/${card.name}`);
      setScore(data.public_repos);
    } catch (error) {
      setErrMsg(error);
    }
  };

  // if (errMsg) {
  //   return <p>Error</p>;
  // }

  return (
    <div>
      <span>{card.name}</span>
      <span>score: {score}</span>

      <Link to={`/update/${card.id}`}>Update</Link>
      <Link to={`/delete/${card.id}`}>Delete</Link>
    </div>
  );
};

export default Card;
