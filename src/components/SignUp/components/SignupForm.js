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
  signUpButton: {
    margin: theme.spacing(2, 0),
  },
  errorMessage: {
    marginTop: 10,
    color: "red",
  },
}));

const SignupForm = ({ onSubmit, error }) => {
  const classes = useStyles();

  const initialValues = {
    name: "",
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

  const handleSignUp = async (event) => {
    event.preventDefault();

    const formValues = {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    };

    onSubmit(formValues);
  };

  return (
    <>
      <Grid container className={classes.grid} justify="center">
        <Grid item md={4} xs={12}>
          <form autoComplete="off" noValidate onSubmit={handleSignUp}>
            <Typography className={classes.title} variant="h4">
              Sign up
            </Typography>
            <TextField
              id="name"
              name="name"
              className={classes.textField}
              variant="outlined"
              type="text"
              fullWidth
              label="User Name"
              onChange={handleChange}
              value={formState.name}
            />
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
              className={classes.signUpButton}
              type="submit"
              fullWidth
            >
              Sign up
            </Button>
            <Typography color="textSecondary" variant="body1">
              Already have an account?{" "}
              <Link component={RouterLink} to="/sign-in" variant="h6">
                Sign in
              </Link>
            </Typography>
            {error && error ? (
              <Typography variant="h5" className={classes.errorMessage}>
                {error}
              </Typography>
            ) : null}
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default SignupForm;
