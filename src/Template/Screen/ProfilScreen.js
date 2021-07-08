import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Title from "../Component/Title";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  profil: {
    height: "40rem",
    width: "100%",
  },
  root: {
    maxWidth: "50%",
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardHeaderProfil: {
    background: "#03989E",
  },
  profilComponent: {
    marginTop: "8rem",
    marginBottom: "5rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: "35rem",
  },
  customBox: {
    position: "relative",
    background: "#03989E",
    borderRadius: "20px",
    boxShadow: "0px 2px 6px 7px rgba(0,0,0,0.69)",
    width: "50%",
  },
  large: {
    height: "10rem",
    fontSize: "5rem",
    width: "10rem",
  },
  avatar: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    marginBottom: "2rem",
  },
  informationUser: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7rem",
    marginBottom: "2rem",
  },
  infoUser: {
    marginRight: "0.5rem",
  },
  cardInfo: {
    display: "flex",
    justifyContent: "center",
    marginRight: "2rem",
  },
  card: {
    boxShadow: "0px 2px 6px 7px rgba(0,0,0,0.49)",
    maxWidth: 345,
  },
  inputProfil: {
    background: "none",
  },
  inputMarginBottom: {
    marginBottom: "1rem",
  },
  wrapper: {
    marginRight: "2rem",
  },
}));

export function ProfilScreen() {
  const classes = useStyles();

  return (
    <>
      <Title title={"Profil"} />
      <Box className={classes.profilComponent}>
        <Box className={classes.customBox}>
          <Box className={classes.avatar}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className={classes.large}
            />
          </Box>
          <Box className={classes.informationUser}>
            <Box className={classes.infoUser} component="span">
              Orion
            </Box>
            <Box className={classes.infoUser} component="span">
              Sirius
            </Box>
          </Box>
          <Box className={classes.cardInfo}>
            <Box className={classes.wrapper}>
              <Box className={classes.inputMarginBottom}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Nom</InputLabel>
                  <OutlinedInput id="component-outlined" label="Name" />
                </FormControl>
              </Box>
              <Box className={classes.inputMarginBottom}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Prénom</InputLabel>
                  <OutlinedInput id="component-outlined" label="Name" />
                </FormControl>
              </Box>
              <Box className={classes.inputMarginBottom}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Brevage</InputLabel>
                  <OutlinedInput id="component-outlined" label="Brevage" />
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Box className={classes.inputMarginBottom}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Email</InputLabel>
                  <OutlinedInput id="component-outlined" label="Email" />
                </FormControl>
              </Box>
              <Box className={classes.inputMarginBottom}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Rôle</InputLabel>
                  <OutlinedInput id="component-outlined" label="Rôle" />
                </FormControl>
              </Box>
              <Box className={classes.inputMarginBottom}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">
                    Entreprise
                  </InputLabel>
                  <OutlinedInput id="component-outlined" label="Entreprise" />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
