import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Restaurants from "../Components/Restaurants";
import Footer from "../Components/Footer";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar
          btn_text="Login"
          btn_onClick={() => {
            window.location.href = "/login";
          }}
        />
        <Slider />
        <div className="col-md-6 mx-auto mt-5">
          <InputGroup className="mb-3">
            <FormControl placeholder="Seacrh your favorite dish..." />
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div style={{ width: "100vw", backgroundColor: "#3F51B5" }}>
          <span
            style={{
              padding: "8px",
              marginLeft: "10vw",
              color: "#3F51B5",
              fontWeight: "800",
              backgroundColor: "white",
              boxShadow: "0px 5px 10px grey",
              cursor: "default"
            }}
          >
            Popular Items
          </span>
        </div>
        <Restaurants />
        <Footer />
      </div>
    );
  }
}

export default Home;
