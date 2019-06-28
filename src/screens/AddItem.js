import React, { Component } from "react";
import Menu from "../Components/Menu";
import { Button } from "react-bootstrap";
import "../App.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import LinearProgress from "@material-ui/core/LinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import { additemtoDatabse, isUserLoggedIn } from "../config/firebase";

class AddItem extends Component {
  constructor() {
    super();

    this.state = {
      itemTitle: "",
      itemCategory: "",
      itemPrice: "",
      itemImage: "",
      itemDescription: "",
      submitBtnStatus: false,
      isSubmitClicked: false,
      SnackbarStatus: false,
      SnackbarMsg: ""
    };

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    isUserLoggedIn();
  }

  addItem() {
    const {
      itemTitle,
      itemCategory,
      itemPrice,
      itemImage,
      itemDescription
    } = this.state;

    if (itemTitle.length < 10) {
      this.setState({
        SnackbarStatus: true,
        SnackbarMsg: "Your Title should atleast 10 characters or long"
      });
    } else {
      if (itemCategory.length <= 2 || itemCategory.length > 10) {
        this.setState({
          SnackbarStatus: true,
          SnackbarMsg:
            "Your Category should atleast 3 characters and no longer than 10 characters "
        });
      } else {
        if (
          itemPrice === "" ||
          itemPrice === " " ||
          itemPrice === null ||
          itemPrice === undefined
        ) {
          this.setState({
            SnackbarStatus: true,
            SnackbarMsg: "Please enter Item Price to Continue"
          });
        } else {
          if (
            itemImage === "" ||
            itemImage === null ||
            itemImage === undefined
          ) {
            this.setState({
              SnackbarStatus: true,
              SnackbarMsg: "Please attach item image."
            });
          } else {
            if (itemDescription.length < 10 || itemDescription.length > 140) {
              this.setState({
                SnackbarStatus: true,
                SnackbarMsg:
                  "Your description should atleast 10 characters and no longer than 140 characters "
              });
            } else {
              this.setState({ submitBtnStatus: true, isSubmitClicked: true });
              const itemObj = {
                itemTitle,
                itemCategory,
                itemPrice,
                itemDescription
              };
              additemtoDatabse(itemImage, itemObj);
            }
          }
        }
      }
    }
  }

  render() {
    const {
      submitBtnStatus,
      isSubmitClicked,
      SnackbarMsg,
      SnackbarStatus
    } = this.state;

    return (
      <div>
        <Menu />
        <div className="container col-md-8 text-center">
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Add Item</Breadcrumb.Item>
          </Breadcrumb>
          <Jumbotron fluid>
            <Container>
              <h1>Add Items</h1>
            </Container>
          </Jumbotron>

          <div>
            <Form.Control
              disabled={submitBtnStatus}
              size="lg"
              type="text"
              placeholder="Item Title"
              onChange={e => {
                this.setState({ itemTitle: e.target.value });
              }}
            />
            <Form.Text className="text-muted text-left">
              Add a unique Title to boost your sales :-)
            </Form.Text>
            <br />
            <Form.Control
              disabled={submitBtnStatus}
              size="lg"
              type="text"
              placeholder="Item Category"
              onChange={e => {
                this.setState({ itemCategory: e.target.value });
              }}
            />
            <br />
            <Form.Control
              disabled={submitBtnStatus}
              size="lg"
              type="number"
              placeholder="Price"
              onChange={e => {
                this.setState({ itemPrice: e.target.value });
              }}
            />
            <br />
            <div className="text-left">
              <label>Select an Image</label>
              <Form.Control
                disabled={submitBtnStatus}
                size="lg"
                type="file"
                placeholder="Select Image"
                onChange={e => {
                  this.setState({ itemImage: e.target.files[0] });
                }}
              />
            </div>
            <br />
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="text-left"
            >
              <Form.Label>Description about Item</Form.Label>
              <Form.Control
                disabled={submitBtnStatus}
                as="textarea"
                rows="3"
                onChange={e => {
                  this.setState({ itemDescription: e.target.value });
                }}
              />
            </Form.Group>
            {isSubmitClicked && (
              <LinearProgress color="primary" style={{ margin: "4px" }} />
            )}
            <Button
              className="mb-5"
              variant="primary"
              size="lg"
              onClick={this.addItem}
              disabled={submitBtnStatus}
            >
              Submit
            </Button>
            <Snackbar
              open={SnackbarStatus}
              message={SnackbarMsg}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              autoHideDuration={3000}
              onClose={() => {
                this.setState({ SnackbarStatus: false });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;
