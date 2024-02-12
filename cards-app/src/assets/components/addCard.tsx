import "../../styles/addCard.css";
import Chip from "../../../public/static/images/chip.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../../App";
import axios from "axios";

const AddCard = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState({
    cardNumber: "",
    titularName: "",
    dateExpireMonth: "",
    dateExpireYear: "",
    cvvNumber: "",
  });

  

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [ccMonth, setCcMonth] = useState("1");
  const [ccYear, setCcYear] = useState("2023");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]{5,20}$/.test(name)) {
      setError(
        "El nombre titular debe contener solo letras y tildes, con un máximo de 20 caracteres y un mínimo de 5 caracteres."
      );
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      setError2(
        "El número de tarjeta debe contener solo números y tener exactamente 16 caracteres."
      );
      setTimeout(() => {
        setError2("");
      }, 5000);
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      setError3(
        "El número de tarjeta debe contener solo números y tener exactamente 3 caracteres."
      );
      setTimeout(() => {
        setError3("");
      }, 5000);
      return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    if (
      parseInt(ccYear, 10) < currentYear ||
      (parseInt(ccYear, 10) === currentYear &&
        parseInt(ccMonth, 10) < currentMonth)
    ) {
      setError3(
        "La fecha de vencimiento no puede ser anterior al mes y año actuales."
      );
      setTimeout(() => {
        setError3("");
      }, 5000);
      return;
    }

    setCard({
      titularName: name,
      cardNumber: cardNumber,
      dateExpireYear: ccYear,
      dateExpireMonth: ccMonth,
      cvvNumber: cvv,
    });

    axios.post(`${URL}/card`, card)
  .then(() => {
    navigate("/");
  })
  .catch((error) => {
    console.error("AxiosError:", error);
  });


  };

  const handleReset = () => {
    setName("");
    setCardNumber("");
    setCcMonth("1");
    setCcYear("2023");
    setCvv("");
    setError("");

    navigate("/");
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <img
              src="https://i.ibb.co/PYss3yv/map.png"
              className="map-img"
              width="70px"
            />
            <div className="row">
              <img src={Chip} width="50px" />
              <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" />
            </div>
            <div className="row card-no">
              <p>{cardNumber}</p>
            </div>
            <div className="row card-holder">
              <p>CARD HOLDER</p>
              <p>VALID TILL</p>
            </div>
            <div className="row name">
              <p>{name}</p>
              <p>{ccMonth + "/" + ccYear}</p>
            </div>
          </div>
          <div className="back">
            <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" />
            <div className="bar"></div>
            <div className="row card-cvv">
              <div>
                <img src="https://i.ibb.co/S6JG8px/pattern.png" />
              </div>
              <p>{cvv}</p>
            </div>
            <div className="row card-text">
              <p>
                Esta tarjeta es propiedad exclusiva del titular y es
                intransferible. Su uso está estrictamente limitado al titular
                mencionado en la tarjeta. Cualquier intento de transferir, ceder
                o utilizar esta tarjeta por parte de otra persona sin la
                autorización expresa del titular está prohibido y puede dar
                lugar a consecuencias legales.
              </p>
              <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" />
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="padding">
          <div className="row2">
            <div className="col-sm-6">
              <div className="card-form">
                <div className="card-header">
                  <h2 className="title">Credit Card Information</h2>
                  <br />
                </div>
                <div className="card-body">
                  <form>
                    <div className="row2">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="name">Card Holder</label>
                          <input
                            className="form-control"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <small className="error">{error}</small>
                    </div>

                    <div className="row2">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="ccnumber">Credit Card Number</label>
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              min={16}
                              max={16}
                              placeholder="0000 0000 0000 0000"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="mdi mdi-credit-card"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <small className="error">{error2}</small>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-4">
                        <label htmlFor="ccmonth">Month</label>
                        <select
                          className="form-control"
                          id="ccmonth"
                          value={ccMonth}
                          onChange={(e) => setCcMonth(e.target.value)}>
                          {[...Array(12).keys()].map((month) => (
                            <option key={month + 1} value={month + 1}>
                              {month + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="ccyear">Year</label>
                        <select
                          className="form-control"
                          id="ccyear"
                          value={ccYear}
                          onChange={(e) => setCcYear(e.target.value)}>
                          {[...Array(7).keys()].map((year) => (
                            <option key={2022 + year} value={2022 + year}>
                              {2022 + year}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label htmlFor="cvv">CVV/CVC</label>
                          <input
                            className="form-control"
                            id="cvv"
                            type="text"
                            min={3}
                            max={3}
                            placeholder="123"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <small className="error">{error3}</small>

                    <div className="card-footer row">
                      <button onClick={handleSubmit}
                        className="btn btn-sm btn-success float-right"
                        type="submit">
                        <i className="mdi mdi-gamepad-circle"></i> Save
                      </button>

                      <button
                        className="btn btn-sm btn-danger"
                        type="button"
                        onClick={handleReset}>
                        <i className="mdi mdi-lock-reset"></i> Cancel
                      </button>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
