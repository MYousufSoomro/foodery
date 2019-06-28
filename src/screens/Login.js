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
import Comingsoon from "../Components/Comingsoon";
import { login } from "../config/firebase";
import LinearProgress from "@material-ui/core/LinearProgress";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email_id: "",
      password: "",
      loading: false
    };

    this.loginNow = this.loginNow.bind(this);
  }
  
  loginNow() {
    const { email_id, password } = this.state;

    const email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email_flag = email_reg.test(String(email_id).toLowerCase());

    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,10}$/;
    const pass_flag = pass_reg.test(String(password));

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
        this.setState({ loading: true });
        login(email_id, password);
      }
    }
  }

  render() {
    const { email_id, password, loading } = this.state;
    return (
      <div>
        <Navbar
          btn_text="Sign Up"
          btn_onClick={() => {
            window.location.href = "/registration";
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
                Sign in
              </Typography>
              <div style={{ width: "100%", marginTop: "2px" }} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: "6px 0 4px" }}
                  onClick={this.loginNow}
                >
                  Sign In
                </Button>
                <br />
                {loading && <LinearProgress color="secondary" />}
                <br />
                <Grid container>
                  <Grid item xs>
                    <Link href="void:0" onClick={Comingsoon} variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/registration" variant="body2">
                      {"Don't have an account? Sign Up"}
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

export default Login;
