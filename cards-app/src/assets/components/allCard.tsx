//import Chip from "../../../public/static/images/chip.png";
import "../../styles/allCard.css";
import "../../styles/addCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./card";
import { useEffect, useState } from "react";
import { URL } from "../../App";

const AllCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/cards`)
      .then((response) => setCards(response.data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/addCard");
  };

  return (
    <>
      <div className="allCard">
        <h1 className="title">Cards</h1>
        <br />
        <div className="buttons">
          <button className="button2" onClick={handleButtonClick}>
            Add cards
          </button>
        </div>
        <br />
        <div className="">
          <div>
            {cards.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCard;
