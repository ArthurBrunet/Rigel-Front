import Title from "../Component/Title";
import { Notification } from "../Component/Notification";
import { ChatMessage } from "../Component/ChatMessage";
import { TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
const useStyles = makeStyles((theme) => ({
  chat: {
    background: "#A0CECE",
  },
  textArea: {
    boxSizing: "border-box",
    width: "100%",
    background: "#ffffff",
    position: "absolute",
    bottom: "0",
  },
  notif: {
    background: "#A0CECE",
  },
  iconTextArea: {
    position: "absolute",
    bottom: "-3%",
    left: "90%",
  },
  customIcon: {
    color: "#46A5A5",
    height: "5rem",
    width: "5rem",
  },
  canaux: {
    height: "25rem",
    overflowY: "scroll",
  },
  messageChat: {
    height: "25rem",
    overflowY: "scroll",
  },
}));
export function ChatScreen() {
  const classes = useStyles();
  return (
    <>
      <Title title={"Chats"} />
      <Box display="flex" flexDirection="raw" justifyContent="space-between">
        <Box fixed className={classes.chat} width="65%" position="relative">
          <Box className={classes.messageChat} padding="10px 10px">
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
          </Box>
          <Box boxSizing="border-box">
            <TextareaAutosize
              className={classes.textArea}
              aria-label="minimum height"
              rowsMin={3}
            />
          </Box>
          <Box className={classes.iconTextArea}>
            <ArrowRightIcon className={classes.customIcon} />
          </Box>
        </Box>
        <Box className={classes.notif} width="30%">
          <Box padding="10px 10px">
            <Box className={classes.canaux}>
              <Title title={"CANAUX"} />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
