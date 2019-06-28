import React, { Component } from "react";
import Comingsoon from "./Comingsoon";
import "../App.css";
import image_1 from "../assets/images/item_1.jpg";
import image_2 from "../assets/images/item_2.jpg";
import image_3 from "../assets/images/item_3.jpg";
import image_4 from "../assets/images/item_4.jpg";
import image_5 from "../assets/images/item_5.jpg";
import image_6 from "../assets/images/item_6.jpg";
import image_7 from "../assets/images/item_7.jpg";
import image_8 from "../assets/images/item_8.jpg";
import image_9 from "../assets/images/item_9.jpg";
import image_10 from "../assets/images/item_10.jpg";

class ItemCards extends Component {
  render() {
    return (
      <div className="container">
        <div className="cards">
          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_1 + ")"
              }}
            >
              <span className="card-title">
                <h3>Chicken Karahi</h3>
              </span>
            </span>
            <span className="card-summary">
              Chicken karahi also known as gosht karahi (when prepared with goat
              or lamb meat instead of chicken) and kadai chicken is a Pakistani
              dish noted for its spicy taste and usage of capsicum . This
              sumptuous gravy enjoyed best with naans or rotis will leave you
              craving for more.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_2 + ")"
              }}
            >
              <span className="card-title">
                <h3>Mutanjan</h3>
              </span>
            </span>
            <span className="card-summary">
              Mutanjan is a Pakistani variety of Zarda, a traditional South
              Asian sweet dish, made by boiling rice with food coloring, milk
              and sugar, and flavoured with cardamoms, raisins, saffron,
              pistachios or almonds. This fantastic innovation is a favourite at
              weddings and other such functions.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_3 + ")"
              }}
            >
              <span className="card-title">
                <h3>Aaloo Bukhary Ki Chutney</h3>
              </span>
            </span>
            <span className="card-summary">
              A Pakistani favourite, this innovative chutney recipe, aloo
              bukhare or plum ki chutney with chopped plum or aloo bukhara
              blended with sugar, salt, and other spices is an amazing
              accompaniment to meals or snacks.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_4 + ")"
              }}
            >
              <span className="card-title">
                <h3>Dum Pukht</h3>
              </span>
            </span>
            <span className="card-summary">
              Dum pukht or slow oven cooking is a cooking technique, in which
              meat and vegetables are cooked over a very low flame, generally in
              sealed containers. Oozing with flavour, this savoury dish is bound
              to leave you satiated.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_5 + ")"
              }}
            >
              <span className="card-title">
                <h3>Nihari</h3>
              </span>
            </span>
            <span className="card-summary">
              Nihari is a Pakistani stew consisting of slow-cooked stew or stew
              along with stew , garnished to taste and occasionally served with
              cooked stew . This melt-in-the-mouth mutton curry can be your
              source for instant happiness.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_6 + ")"
              }}
            >
              <span className="card-title">
                <h3>Shahi Tukda</h3>
              </span>
            </span>
            <span className="card-summary">
              This unique dessert is an absolute treat to the taste buds. Simple
              and easy to prepare, it has a distinct flavour of saffron and
              cardamom, and tastes delicious whether warm or chilled.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_7 + ")"
              }}
            >
              <span className="card-title">
                <h3>Chargha</h3>
              </span>
            </span>
            <span className="card-summary">
              Chargha is a Lahori whole cooked chicken. It is a nicely marinated
              chicken roasted and cooked on flaming coal. A whole chicken
              roasted to perfection is what dreams are made of!
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_8 + ")"
              }}
            >
              <span className="card-title">
                <h3>Paya</h3>
              </span>
            </span>
            <span className="card-summary">
              Mutton Paya, or gravied goat trotters, is very popular in Lahore.
              Onion, tomato and aromatic spices create a symphony that will
              leave you craving for more.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_9 + ")"
              }}
            >
              <span className="card-title">
                <h3>Chapli Kabab</h3>
              </span>
            </span>
            <span className="card-summary">
              Chapli kabab, also known as Peshawari Kabab, is a favourite
              amongst natives. The dish is prepared with simple spices and
              ingredients and it best complimented with raita, salad and hot
              naans.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>

          <a className="card" href="javascript:void();" onClick={Comingsoon}>
            <span
              className="card-header"
              style={{
                backgroundImage: "url(" + image_10 + ")"
              }}
            >
              <span className="card-title">
                <h3>Gushtaba</h3>
              </span>
            </span>
            <span className="card-summary">
              A dish made of minced mutton balls cooked in curd and spices,
              melt-in-your-mouth Gushtaba is sinfully delightful.
            </span>
            <span className="card-meta">ORDER NOW</span>
          </a>
        </div>
      </div>
    );
  }
}

export default ItemCards;
