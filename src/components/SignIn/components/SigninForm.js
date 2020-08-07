import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Link, Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
  title: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
  errorMessage: {
    marginTop: 10,
    color: "red",
  },
}));

const SigninForm = ({ onSubmit, error }) => {
  const classes = useStyles();

  const initialValues = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialValues);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    const formValues = {
      email: formState.email,
      password: formState.password,
    };
    onSubmit(formValues);
  };

  return (
    <>
      <Grid container className={classes.grid} justify="center">
        <Grid item md={4} xs={12}>
          <form autoComplete="off" noValidate onSubmit={handleSignIn}>
            <Typography className={classes.title} variant="h4">
              Sign in
            </Typography>
            <TextField
              id="email"
              name="email"
              className={classes.textField}
              variant="outlined"
              type="text"
              fullWidth
              label="Email"
              onChange={handleChange}
              value={formState.email}
            />
            <TextField
              id="password"
              name="password"
              className={classes.textField}
              variant="outlined"
              type="password"
              fullWidth
              label="Password"
              onChange={handleChange}
              value={formState.password}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.signInButton}
              type="submit"
              fullWidth
            >
              Sign In
            </Button>
            <Typography color="textSecondary" variant="body1">
              Don't have an account?{" "}
              <Link component={RouterLink} to="/sign-up" variant="h6">
                Sign up
              </Link>
            </Typography>
            {error ? (
              <Typography variant="h6" className={classes.errorMessage}>
                Invalid credentials. Please try again.
              </Typography>
            ) : null}
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default SigninForm;
