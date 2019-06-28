import React, { Component } from "react";
import Menu from "../Components/Menu";
import Restaurants from "../Components/Restaurants";
import Footer from "../Components/Footer";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../App.css";
import Swal from "sweetalert2";
import firebase from "firebase";
import withReactContent from "sweetalert2-react-content";
import { getItemsFromFirestore, isUserLoggedIn } from "../config/firebase";

const MySwal = withReactContent(Swal);

class Dash extends Component {
  constructor() {
    super();

    this.state = {
      dataInFireStore: getItemsFromFirestore()
    };

    this.signout = this.signout.bind(this);
  }

  componentDidMount() {
    isUserLoggedIn();
  }

  signout() {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then(result => {
      if (result.value) {
        firebase
          .auth()
          .signOut()
          .then(function() {
            window.location.href = "/login";
          })
          .catch(function(error) {
            MySwal.fire({
              type: "error",
              title: "Oops...",
              text: error.message
            });
          });
      }
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="col-md-6 mx-auto mt-5">
          <InputGroup className="mb-3">
            <FormControl placeholder="Seacrh your favorite dish..." />
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div
          style={{ width: "100%", height: "30px", backgroundColor: "#007BFF" }}
        >
          <span
            style={{
              padding: "8px",
              marginLeft: "10vw",
              color: "#007BFF",
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

export default Dash;
