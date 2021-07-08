import Title from "../Component/Title";
import { Notification } from "../Component/Notification";
import { ChatMessage } from "../Component/ChatMessage";
import { TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {useAuth} from "../../Store/Auth/auth";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {CREATE_MESSAGE_FOR_CANAL, GET_MESSAGE_FOR_CANAL} from "../../Config/const";
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
  const auth = useAuth();
  const user = auth.state.user;
  const [canals,setCanals] = useState([]);
  const [text,setText] = useState('');
  useEffect(()=>{
    console.log(user.canals);
    let interval = setInterval(()=>{
      user.canals.forEach((Usercanal) => {
        axios.get(GET_MESSAGE_FOR_CANAL(Usercanal.id)).then((resultData)=>{
          let result;
          if(canals.length !== 0) {
            result = canals.map((canal) => {
              console.log(Usercanal.name);
              if(canal.canal === Usercanal.name) {
                canal = {
                  canal:Usercanal.name,
                  messages:resultData.data
                }
              }
              return canal;
            });
          }else{
            result = [...canals, {
              canal:Usercanal.name,
              messages:resultData.data
            }];
          }
          setCanals(result);
        }).catch((e)=>{
          console.log(e)
        });
      });
    },1000);

    return () => {
      clearInterval(interval);
    };
  },[]);
  const createMessage = (canal) => {
    const options = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin': '*'
      }
    };
    axios.post(CREATE_MESSAGE_FOR_CANAL,{canal:canal,message:text},options).then((data)=>{
      setText('');
      console.log(data);
    }).catch((e)=>{
      console.log(e)
    })
  }
  let listCanal;
  if (canals.length > 0) {
    listCanal = canals.map((c)=>{
      let listMessages;
      if(c.messages.length > 0) {
        listMessages = c.messages.map((data)=>{
          return (
              <ChatMessage info={data}/>
          )
        });
      }
      return(
          <Box display="flex" flexDirection="raw" justifyContent="space-between">
            <Box fixed className={classes.chat} width="65%" position="relative">
              <Box className={classes.messageChat} padding="10px 10px">
                {listMessages}
              </Box>
              <Box boxSizing="border-box">
                <TextareaAutosize
                    className={classes.textArea}
                    aria-label="minimum height"
                    rowsMin={3}
                    value={text}
                    onChange={(result)=>{setText(result.target.value)}}
                />
              </Box>
              <Box className={classes.iconTextArea}>
                <ArrowRightIcon className={classes.customIcon} onClick={() => {
                  createMessage(c.canal)
                }}/>
              </Box>
            </Box>
          </Box>
      )
    })
  }
  return (
      <>
        <Title title={"Chats"} />
        {listCanal}
      </>
  );
}
