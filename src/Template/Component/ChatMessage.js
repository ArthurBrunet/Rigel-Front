import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    padding: "10px 10px",
    marginBottom: "1rem",
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export const ChatMessage = ({info}) => {
  const classes = useStyles();
  let name = info.name != null ? info.name : '';
  let firstname = info.firstname != null ? info.firstname : '';
  let fullName = firstname + ' ' + name;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={fullName}
        subheader={info.createdAt.date.substring(0,info.createdAt.date.length-10)}
      />
      <CardContent>
        <Typography paragraph>
            {info.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
