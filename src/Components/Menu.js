import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import firebase from "firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Menu extends Component {
  constructor() {
    super();

    this.signout = this.signout.bind(this);
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
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/dashboard">Foodery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard/restaurants" disabled>
                Restaurants
              </Nav.Link>
              <Nav.Link href="/dashboard/my_requests" disabled>
                My Requests
              </Nav.Link>
              <Nav.Link href="/dashboard/add_items">Add Item</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-light" onClick={this.signout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Menu;
