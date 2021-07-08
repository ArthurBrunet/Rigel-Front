import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Box, FormControl, Input, InputLabel, Select} from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import {CREATE_MESSAGE_FOR_CANAL, CREATE_USER} from "../../Config/const";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 20px",
    width: "80%",
    maxWidth: "800px",
    margin: "50px auto 0 auto",
    borderRadius: "20px",
    background: "#A0CECE",
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
  form: {
    width: "80%",
    marginBottom: "4rem",
    marginTop: "4rem",
    display: "flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignContent:"space-around"
  },
  select: {
    padding: "10px 10px",
    margin: "20px 0",
  },
  Center: {
    display: "flex",
    justifyContent: "center",
  },
}));

const NewUserScreen = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    role: 'ROLE_USER',
    email: ''
  });
  let [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    setState({
      ...state,
      role: event.target.value,
    });
  };

  const submit = () => {
    const options = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin': '*'
      }
    };
    axios.post(CREATE_USER,state,options).then((data)=>{
      setRedirect(true);
    }).catch((e)=>{
      console.log(e)
    })
  };

  return (
    <>
      {redirect && (<Redirect from="/newUser" to="/"/>)}
        <div className={classes.root}>
          <form noValidate autoComplete="off">
            <Grid item xs={12}>
              <Box className={classes.Center}>
                <form className={classes.form}>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input id="my-input"
                         aria-describedby="my-helper-text"
                         value={state.email}
                         onChange={(event) => {
                           setState({
                             ...state,
                             email: event.target.value
                           })
                          }}
                         type="email"
                  />
                  <Select
                      className={classes.select}
                      native
                      value={state.role}
                      onChange={handleChange}
                      inputProps={{
                        name: 'Role',
                        id: 'age-native-simple',
                      }}
                  >
                    <option value={"ROLE_USER"}>User</option>
                    <option value={"ROLE_PARTNER"}>Partenaire</option>
                    <option value={"ROLE_ADMIN"}>Admin</option>
                  </Select>
                </form>
              </Box>
              <div className={classes.button}>
                <Button className={classes.buttonProps} variant="outlined"
                  onClick={() => {submit()}}>
                  CRÉER UN UTILISATEUR
                </Button>
              </div>
            </Grid>
          </form>
        </div>
    </>
  );
}

export default NewUserScreen;
