import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  notification: {
    background: "#ffffff",
    borderRadius: "10px",
    padding: "1rem 2rem",
    marginBottom: "1rem",
  },
  notificationTitle: {
    marginBottom: "1rem",
    fontWeight: "bold",
    fontSize: "1.2em",
  },
  badge: {
    background: "yellow",
    left: "100%",
    borderRadius: "10px",
  },
}));

export const Notification = ({ ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.notification}>
        <Badge
          className={classes.badge}
          badgeContent={4}
          color="primary"
        ></Badge>
        <Box className={classes.notificationTitle}>lorem ipsum</Box>
        <Box>
          sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametouiouioiuiu
        </Box>
      </Box>
    </>
  );
};
