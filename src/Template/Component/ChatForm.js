import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
  notification: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const ChatForm = ({ ...props }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.notification}>
   
          <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />
      </div>
    </>
  );
};
