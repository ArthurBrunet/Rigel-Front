import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, FormControl, Input, InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 20px",
    borderRadius: "20px",
    width: "50rem",
    height: "20rem",
    background: "#A0CECE",
    flexGrow: 1,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxSizing: "content-box",
  },
  textField: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  buttonProps: {
    color: "white",
    borderColor: "white",
    borderRadius: "30px",
  },
  email: {
    width: "80%",
    marginBottom: "4rem",
    marginTop: "4rem",
  },
  Center: {
    display: "flex",
    justifyContent: "center",
  },
}));

export function NewUserScreen() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <form noValidate autoComplete="off">
          <Grid item xs={12}>
            <Box className={classes.Center}>
              <FormControl className={classes.email}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
            </Box>

            <div className={classes.button}>
              <Button className={classes.buttonProps} variant="outlined">
                CRÉER MON COMPTE
              </Button>
            </div>
          </Grid>
        </form>
      </div>
    </>
  );
}
