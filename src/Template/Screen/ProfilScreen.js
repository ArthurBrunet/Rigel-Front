import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import paul from "../../Assets/paul.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  profil: {
    height: "40rem",
    width: "100%",
  },
  root: {
    maxWidth: "50%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardHeaderProfil: {
    background: "#03989E",
  },
  profilComponent: {
    marginTop: "5rem",
    display: "flex",
    justifyContent: "center",
  },
}));

export function ProfilScreen() {
  const classes = useStyles();

  return (
    <Box className={classes.profilComponent}>
      <Card className={classes.root}>
        <CardHeader
          className={classes.cardHeaderProfil}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={paul} alt={"profile picture"} />
            </Avatar>
          }
          title="Paul"
          subheader="September 14, 2016"
        />

        <CardContent>
          <Box className={classes.profil} m={1}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField id="filled-basic" label="Nom" variant="filled" />
              </Grid>
              <Grid item xs={6}>
                <TextField id="filled-basic" label="Prénom" variant="filled" />
              </Grid>
              <Grid item xs={6}>
                <TextField id="filled-basic" label="Mail" variant="filled" />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField id="filled-basic" label="Avatar" variant="filled" />
              </Grid>
              <Grid item xs={6}>
                <TextField id="filled-basic" label="Brevage" variant="filled" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-basic"
                  label="Entreprise"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-basic"
                  label="Compétence"
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
