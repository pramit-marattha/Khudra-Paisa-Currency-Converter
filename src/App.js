import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';
import "./components/buttonmain.css";

const App = () => {
  const [uSDAUD, setUSDAUD] = useState("");
  const [first, setFirst] = useState("NPR");
  const [second, setSecond] = useState("USD");
  const [rate, setRate] = useState([]);

  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=6a81da0cb63eed724edc`,
    })
      .then((response) => {
        setRate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Khudra Paisa Currency Converter</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
      </Navbar>


      <br />
      <div style={{ marginLeft: "38%" }}>
        <div
          style={{
            height: "100%",
            width: "444px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
        </div>
        <h2>Today's Currency Rate</h2>
      </div>
      <div style={{ marginLeft: "38%" }}>
        <div
          style={{
            height: "100%",
            width: "490px",
            borderRadius: "10px",
            display: "flex",
            backgroundColor: '#FBDA61',
            backgroundImage: 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "monospace"
          }}
        >
          1 {first} = {rate[`${first}_${second}`]} {second}
        </div>
        <br />
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <h6>to</h6>
        <input
          type="text"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />

      </div>

      <br></br>


      <div style={{ marginLeft: "39%" }}>
        <div
          style={{
            height: "100%",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
        </div>
        <button
          onClick={() => {
            getRate(first, second);
          }}
        >
          Convert
        </button>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

render(<App />, document.querySelector("#root"));

export default App;