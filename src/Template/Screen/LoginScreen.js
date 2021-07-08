import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth } from "../../Store/Auth/auth";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Stickman from "../../Assets/perso_orion.svg";

const useStyles = makeStyles((theme) => ({
  root: {},
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  boxLogin :{
    position: 'absolute', 
    top: '50%',
    left: '50%', 
    transform: 'translate(-50%, -50%)',
  },
  buttonCustom:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:'1.2em',
    backgroundColor:'#A0CECE',
  }
}));

export function LoginScreen() {
  const classes = useStyles();
  let auth = useAuth();
  let [username, setUsername] = useState({});
  let [password, setPassword] = useState({});
  let [redirect, setRedirect] = useState(false);

  const handleSubmit = async () => {
    try {
      await auth.handleLogin({
        username: username,
        password: password,
      });
      if (auth.state.isLoggedIn) {
        setRedirect(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {redirect && <Redirect from="/login" to="/" />}
      <Box className={classes.boxLogin}>

     
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
                    className={'stickOrion'}
                    src={Stickman}
                    alt="Icone orion"/>
      
          <Typography component="h1" variant="h5">
            Sirius
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              id="standard-basic"
              label="EMAIL"
              margin="normal"
              required
              fullWidth
              name="email"
              autoComplete="email"
              onChange={(result) => {
                setUsername(result.target.value);
              }}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="standard-password-input"
              label="MOT DE PASSE"
              type="password"
              autoComplete="current-password"
              onChange={(result) => {
                setPassword(result.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              className={classes.buttonCustom}
              onClick={() => {
                handleSubmit().then((r) => null);
              }}
            >
              Connexion
            </Button>
          </form>
        </div>
      </Container>
      </Box>
    </>
  );
}
