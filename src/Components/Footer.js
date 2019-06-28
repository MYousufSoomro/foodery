import React, { Component } from "react";
import Comingsoon from "./Comingsoon";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <section id="footer">
          <div class="container">
            <div class="row text-center text-xs-center text-sm-left text-md-left">
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h5>Search by Cities</h5>
                <ul class="list-unstyled quick-links">
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Islamabad
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Karachi
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Lahore
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Peshawar
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Quetta
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h5>Search by Items</h5>
                <ul class="list-unstyled quick-links">
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Chicken Karachi
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Nihari
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      BBQ
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Paya
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Biryani
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h5>Popular Chains</h5>
                <ul class="list-unstyled quick-links">
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      KFC
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Pizza Nest
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Javed Nihari
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Student Biryani
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();" onClick={Comingsoon}>
                      <i class="fa fa-angle-double-right" />
                      Darbar Haleem
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul class="list-unstyled list-inline social text-center">
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/MYousuf88/">
                      <i class="fa fa-facebook" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.twitter.com/MYousufSoomro/">
                      <i class="fa fa-twitter" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.instagram.com/MYousufSoomro/">
                      <i class="fa fa-instagram" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://pk.linkedin.com/in/myousufsoomro">
                      <i class="fa fa-linkedin" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="mailto:yousuf@gharana.pk" target="_blank">
                      <i class="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
