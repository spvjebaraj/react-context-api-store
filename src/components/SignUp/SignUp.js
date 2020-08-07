import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

import { useAuth } from "../../hooks";
import SignupForm from "./components/SignupForm";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  const { history } = props;
  const authStore = useAuth();

  const onSubmit = async (formData) => {
    await authStore[1].signUp(formData.email, formData.password, formData.name);

    history.push("/");
  };

  if (authStore && authStore[0].isLoading) {
    return (
      <div className={classes.center}>
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <>
      <div className={classes.root}>
        <SignupForm
          onSubmit={onSubmit}
          error={authStore && authStore[0].error}
        />
      </div>
    </>
  );
};

export default withRouter(SignUp);
