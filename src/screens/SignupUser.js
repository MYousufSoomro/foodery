import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Components/Navbar";
import { signup } from "../config/firebase";
import LinearProgress from "@material-ui/core/LinearProgress";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getCountry } from "../config/countriesList";
import { getCities } from "../config/cities";
import { Select, MenuItem } from "@material-ui/core";

const MySwal = withReactContent(Swal);

class SignupUser extends Component {
  constructor() {
    super();

    this.state = {
      email_id: "",
      password: "",
      full_name: "",
      loading: false,
      data: getCountry(),
      selected: "none",
      cities: getCities(),
      selectedCity: "Select City"
    };

    this.signupNow = this.signupNow.bind(this);
  }

  signupNow() {
    const { email_id, password, full_name, selected, selectedCity } = this.state;

    const email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email_flag = email_reg.test(String(email_id).toLowerCase());

    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,10}$/;
    const pass_flag = pass_reg.test(String(password));

    if (
      full_name === null ||
      full_name === undefined ||
      full_name === "" ||
      full_name.length <= 2
    ) {
      MySwal.fire({
        title: "<strong>Name Error</strong>",
        type: "error",
        html: "<em>Your name must be 3 characters atleast</em>",
        showCloseButton: true,
        confirmButtonText: "<strong>Try Again</strong>"
      });
    } else {
      if (!email_flag) {
        MySwal.fire({
          title: "<strong>Email Error</strong>",
          type: "error",
          html:
            "<em>Your input email is not correct</em>" +
            "<p>You have entered: <code>" +
            email_id +
            "</code></p>",
          showCloseButton: true,
          confirmButtonText: "<strong>Try Again</strong>"
        });
      } else {
        if (!pass_flag) {
          MySwal.fire({
            title: "<strong>Password Error</strong>",
            type: "error",
            html:
              "<strong>Your password must meets the following criteria:</strong>" +
              "<ul align='left'>" +
              "<li>At least 6 characters long</li>" +
              "<li>No more than 10 characters</li>" +
              "<li>Must include at least one upper case letter</li>" +
              "<li>Must include at least one lower case letter</li>" +
              "<li>Must include at least one numeric digit</li>" +
              "<li>Must include at least one special character</li>" +
              "</ul>",
            showCloseButton: true,
            confirmButtonText: "<strong>Try Again</strong>"
          });
        } else {
          if (selected === "none") {
            MySwal.fire({
              title: "<strong>Country Error</strong>",
              type: "error",
              html: "<em>Please Select country from dropdown</em>",
              showCloseButton: true,
              confirmButtonText: "<strong>Try Again</strong>"
            });
          } else {
            this.setState({ loading: true });
            var userObj = {
              email_id,
              country: selected,
              full_name,
              selectedCity
            };
            signup(email_id, password, userObj);
          }
        }
      }
    }
  }

  handleChange = event => {
    this.setState({ selected: event.target.value, name: event.target.name });
  };

  handleChangeCity = event => {
    this.setState({
      selectedCity: event.target.value,
      province: event.target.province
    });
  };

  renderOptions() {
    return this.state.data.map((dt, i) => {
      console.log(dt);
      return (
        <MenuItem
          label="Select a country"
          value={dt.code}
          key={i}
          name={dt.name}
        >
          {dt.name}
        </MenuItem>
      );
    });
  }

  renderCityOptions() {
    return this.state.cities.map((dt, i) => {
      console.log(dt);
      return (
        <MenuItem
          label="Select a City"
          value={dt.city}
          key={i}
          name={dt.city}
          province={dt.province}
        >
          {dt.city}
        </MenuItem>
      );
    });
  }

  render() {
    const { loading, selected } = this.state;
    return (
      <div>
        <Navbar
          btn_text="Sign In"
          btn_onClick={() => {
            window.location.href = "/login";
          }}
        />
        
        <Grid container component="main" style={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/featured/?food)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div
              style={{
                margin: "16px 8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Avatar
                style={{
                  margin: "2px",
                  backgroundColor: "#F50057"
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                User Registration
              </Typography>
              <div style={{ width: "100%", marginTop: "2px" }} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  name="full-name"
                  label="Full Name"
                  type="text"
                  id="full-name"
                  onChange={e => {
                    this.setState({ full_name: e.target.value });
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e => {
                    this.setState({ email_id: e.target.value });
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                />

                <Select
                  className="pt-2"
                  value={this.state.selected}
                  onChange={this.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="country"
                  label="Country"
                >
                  {this.renderOptions()}
                </Select>

                {selected === "PK" && (
                  <Select
                    className="pt-2"
                    value={this.state.selectedCity}
                    onChange={this.handleChangeCity}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="cities"
                    label="City"
                  >
                    {this.renderCityOptions()}
                  </Select>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: "6px 0 4px" }}
                  onClick={this.signupNow}
                >
                  Register
                </Button>
                <br />
                {loading && <LinearProgress color="secondary" />}
                <br />
                <Grid container>
                <Grid item xs>
                    <Link href="/restRegister" variant="body2">
                      Register Restaurant?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Already have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignupUser;
