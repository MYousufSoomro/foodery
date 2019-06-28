import React, { Component } from "react";
import Comingsoon from "./Comingsoon";
import "../App.css";
import firebase from "firebase";
import LinearProgress from "@material-ui/core/LinearProgress";

class Restaurants extends Component {
  constructor() {
    super();

    this.state = {
      dataInFirestore: []
    };

    this.getItemsFromFirestore();
  }

  getItemsFromFirestore() {
    var data = [];
    firebase
      .firestore()
      .collection("items")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          data.push({ item_id: doc.id, data: doc.data() });
        });
      })
      .then(() => {
        this.setState({ dataInFirestore: data });
      });
  }

  renderItemsfromFirestore() {
    const { dataInFirestore } = this.state;
    return dataInFirestore.map((item, index) => {
      console.log("item.data.downloadURL ====>>>", item.data.downloadURL);
      return (
        <a className="card" href="void();" onClick={Comingsoon}>
          <span
            className="card-header"
            style={{
              backgroundImage: "url(" + item.data.downloadURL + ")"
            }}
          >
            <span className="card-title">
              <h3>{item.data.itemTitle}</h3>
            </span>
          </span>
          <span className="card-summary">{item.data.itemDescription}</span>
          <span className="card-meta">Price: {item.data.itemPrice}</span>
        </a>
      );
    });
  }

  render() {
    const { dataInFirestore } = this.state;
    return (
      <div className="container">
        <div className="cards">{this.renderItemsfromFirestore()}</div>
        {!dataInFirestore.length && (
          <p>
            Your Food is cooking.....
            <LinearProgress color="secondary" />
          </p>
        )}
      </div>
    );
  }
}

export default Restaurants;
