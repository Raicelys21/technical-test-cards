import Chip from "../../../public/static/images/chip.png";

interface CardProps {
  card: {
    cardNumber: number;
    titularName: string;
    dateExpireMonth: string;
    dateExpireYear: string;
    cvvNumber: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  const {cardNumber, titularName, dateExpireMonth, dateExpireYear } = card;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="front">
          <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" width="70px" />
          <div className="row">
            <img src={Chip} width="50px" alt="Chip" />
            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" alt="Visa Logo" />
          </div>
          <div className="row card-no">
            <p>{cardNumber.toString().substring(0, 2) + "** **** **** " + cardNumber.toString().substring(cardNumber.toString().length - 4)}</p>
          </div>
          <div className="row card-holder">
            <p>CARD HOLDER</p>
            <p>VALID TILL</p>
          </div>
          <div className="row name">
            <p>{titularName}</p>
            <p>{dateExpireMonth + "/" + dateExpireYear}</p>
          </div>
        </div>
        <div className="back">
          <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" alt="Map" />
          <div className="bar"></div>
          <div className="row card-cvvNumber">
            <div>
              <img src="https://i.ibb.co/S6JG8px/pattern.png" alt="Pattern" width="100%"/>
            </div>
            <p>***</p>
          </div>
          <div className="row card-text">
            <p>
              Esta tarjeta es propiedad exclusiva del titular y es intransferible. Su uso está estrictamente limitado al titular mencionado en la tarjeta. Cualquier intento de transferir, ceder o utilizar esta tarjeta por parte de otra persona sin la autorización expresa del titular está prohibido y puede dar lugar a consecuencias legales.
            </p>
            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="50px" alt="Visa Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
