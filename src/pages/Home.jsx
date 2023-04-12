import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import logo from "../assets/logo.png";

export default function Home() {
  const [round, setround] = useState(false);
  const [pickup, setpickup] = useState(" ");
  const [drop, setdrop] = useState("");
  const [date, setdate] = useState("");
  const [returndate, setreturndate] = useState("");
  const [time, settime] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);

  const roundtrip = () => setround(!round);

  const pickuplocation = (e) => setpickup(e.target.value);

  const droplocation = (e) => setdrop(e.target.value);

  const dateValue = (e) => setdate(e.target.value);

  const returndateValue = (e) => setreturndate(e.target.value);

  const timevalue = (e) => settime(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setisSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="headerdiv">

      {/* this div is only visible when the user click Book button on the form */}

        {isSubmitted && (
          <div className="successdiv">
            <h3>Booking Confirmed</h3>
            <p>
              Booking From:<span>{pickup}</span>
            </p>
            <p>
              Booking To:<span>{drop}</span>
            </p>
            <p>
              Date:<span>{date}</span>
            </p>
            <p>
              Time:<span>{time}</span>
            </p>

            <button
              onClick={() => {
                setisSubmitted(false);
                window.location.reload();
              }}
            >
              Thank You
            </button>
          </div>
        )}
        ;


        <div className="row wrapper">
          <div className="col-lg-5 col-md-6 col-sm-12 formColumn">

          {/* form div to book the cab */}
            <form className="bookForm" onSubmit={handleSubmit}>
              <div className="content">
                <div className="formLogo">
                  <img src={logo} className="formLogo" alt="" />
                </div>
                <button className="tripbutton">One-Way</button>
                <button className="tripbutton" onClick={roundtrip}>
                  Round-Trip
                </button>
                <label for="pickup-location">Pickup Location:</label>
                <br />
                <input
                  type="text"
                  id="pickup-location"
                  name="pickup-location"
                  value={pickup}
                  onChange={pickuplocation}
                  required
                />
                <br />
                <br />
                <label for="drop-location">Drop Location:</label>
                <br />
                <input
                  type="text"
                  id="drop-location"
                  name="drop-location"
                  value={drop}
                  onChange={droplocation}
                  required
                />
                <br /> <br />
                <label for="date">Date:</label> <br />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={dateValue}
                  required
                />
                <br />
                <br />
                {round && (
                  <>
                    <label for="date">Return-Date:</label>
                    <br />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={returndate}
                      onChange={returndateValue}
                      required
                    />
                    <br />
                    <br />
                  </>
                )}
                <label for="time">Time:</label>
                <br />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={time}
                  onChange={timevalue}
                  required
                />
                <br />
                <br />
                <button className="confirmbtn">BOOK NOW</button>
              </div>
            </form>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 imageColumn"></div>
        </div>
      </div>
    </>
  );
}
