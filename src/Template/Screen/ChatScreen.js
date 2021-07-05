import Title from "../Component/Title";
import { Notification } from "../Component/Notification";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chat: {
    background: "#A0CECE",
  },
  notif: {
    background: "#A0CECE",
  },
}));
export function ChatScreen() {
  const classes = useStyles();
  return (
    <>
      <Title title={"Chats"} />
      <Box display="flex" flexDirection="raw" justifyContent="space-between">
        <Box fixed className={classes.chat} width="65%">
        </Box>
        <Box className={classes.notif} width="30%">
          <Box padding="10px 10px" >
            <Box height="25rem" overflow="scroll">
            <Title title={'CANAUX'}/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            </Box>
          </Box>
   
        </Box>
      </Box>
      {/* <Notification/> */}
    </>
  );
}
