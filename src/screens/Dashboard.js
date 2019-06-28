import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import ItemCards from "../Components/ItemCards";
import Footer from "../Components/Footer";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../App.css";
import firebase from "firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Dashboard extends Component {
  constructor() {
    super();

    this.signout = this.signout.bind(this);
  }
  authcheck() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
      } else {
        window.location.href = "/login";
      }
    });
  }

  signout() {
    Swal.fire({
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
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: error.message
            });
          });
      }
    });
  }

  render() {
    this.authcheck();
    return (
      <div>
        <Navbar btn_text="Logout" btn_onClick={this.signout} />
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
        <ItemCards />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
