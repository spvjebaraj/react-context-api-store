import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import { useAuth } from "../../hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const authStore = useAuth();

  const handleLogout = async (event) => {
    event.preventDefault();

    await authStore[1].signOut();
    history.push("/sign-in");
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary">
              {`Welcome to my app, ${authStore[0].userName}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
