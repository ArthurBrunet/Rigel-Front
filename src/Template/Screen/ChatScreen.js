
import { ChatMessage } from "../Component/ChatMessage";
import { TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useAuth } from "../../Store/Auth/auth";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CREATE_MESSAGE_FOR_CANAL,
  GET_MESSAGE_FOR_CANAL,
} from "../../Config/const";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";

import Menu from "@material-ui/core/Menu";

import MenuItem from "@material-ui/core/MenuItem";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: '#A0CECE',
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
    bottom: "-3.5%",
    left: "87%",
  },
  customIcon: {
    color: "#46A5A5",
    height: "10rem",
    width: "11rem",
  },
  canaux: {
    height: "25rem",
    overflowY: "scroll",
  },
  messageChat: {
    height: "50rem",
    overflowY: "scroll",
  },
  buttonCustom:{
    backgroundColor:'#A0CECE',
  }
}));

export function ChatScreen() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const auth = useAuth();
  const user = auth.state.user;
  const [canals,setCanals] = useState([]);
  const [text,setText] = useState('');
  useEffect(()=>{

    let interval = setInterval(()=>{
        let canalTemp = [];
        let i = 0;
        axios.get(GET_MESSAGE_FOR_CANAL(user.canals[0].id)).then((resultData)=>{
          i++;
          let result = {
            canal:user.canals[0].name,
            messages:resultData.data
          }
          canalTemp.push(result);
          setCanals(canalTemp);
        }).catch((e)=>{
          console.log(e)
        });
      },1000);


    return () => {
      clearInterval(interval);
    };
  }, []);
  const createMessage = (canal) => {
    const options = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post(CREATE_MESSAGE_FOR_CANAL, { canal: canal, message: text }, options)
      .then((data) => {
        setText("");
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  let listCanal;
  if (canals.length > 0) {
    listCanal = canals.map((c,index) => {
      let listMessages;
      if (c.messages.length > 0) {
        listMessages = c.messages.map((data) => {
          return <ChatMessage info={data} />;
        });
      }
      return (
          <Box fixed className={classes.chat} width="100%" position="relative">
            <Box className={classes.messageChat} padding="10px 10px">
              {listMessages}
            </Box>
            <Box boxSizing="border-box">
              <TextareaAutosize
                  className={classes.textArea}
                  aria-label="minimum height"
                  rowsMin={6}
                  value={text}
                  onChange={(result) => {
                    setText(result.target.value);
                  }}
              />
            </Box>
            <Box className={classes.iconTextArea}>
              <ArrowRightIcon
                  className={classes.customIcon}
                  onClick={() => {
                    createMessage(c.canal);
                  }}
              />
            </Box>
          </Box>
      );
    });
  }

  return (
    <>
      <Box display="flex" justifyContent="center" marginBottom="5rem" marginTop="2rem"  >

        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          className={classes.buttonCustom}
          onClick={handleClick}
        >
          Channel
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary="Channel 1" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Channel 2" />
          </StyledMenuItem>
        </StyledMenu>
      </Box>

      <Box display="flex" justifyContent="center">
        <Box width="90%">{listCanal}</Box>
      </Box>
    </>
  );
}
