import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#F5F5F5",
  },
  chatList: {
    backgroundColor: "#FFFFFF",
    maxHeight: "100vh",
    overflowY: "auto",
    width: "30%",
    borderRight: "1px solid #E0E0E0",
  },
  chatArea: {
    backgroundColor: "#F5F5F5",
    height: "100vh",
    width: "70%",
    position: "relative",
  },
  messageInput: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    right: theme.spacing(2),
  },
  textField: {
    backgroundColor: "#FFFFFF",
    color: "black",
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    "&:hover": {
      backgroundColor: "#43A047",
    },
  },
  messageWrapperLeft: {
    backgroundColor: "#DCF8C6",
    borderRadius: "10px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: "inline-block",
    textAlign: "right",
  },
  messageWrapperRight: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: "inline-block",
    textAlign: "left",
  },
}));


const chatListData = [
  {
    id: 1,
    name: "John",
    avatar: "J",
    lastMessage: "Hey, how's it going?",
  },
  {
    id: 2,
    name: "Mary",
    avatar: "M",
    lastMessage: "See you there!",
  },
  {
    id: 3,
    name: "Tom",
    avatar: "T",
    lastMessage: "Thanks for the invite!",
  },
];

const chatMessagesData = [
  {
    id: 1,
    sender: "John",
    content: "Hey, how's it going?",
  },
  {
    id: 2,
    sender: "Mary",
    content: "Not bad, you?",
  },
  {
    id: 3,
    sender: "John",
    content: "Pretty good. What are you up to this weekend?",
  },
  {
    id: 4,
    sender: "Mary",
    content: "I'm going to a concert on Saturday night. Want to come?",
  },
  {
    id: 5,
    sender: "John",
    content: "Sure, sounds like fun!",
  },
  {
    id: 6,
    sender: "Mary",
    content: "Great, I'll send you the details later.",
  },
  {
    id: 7,
    sender: "Tom",
    content: "Hey guys, what's up?",
  },
  {
    id: 8,
    sender: "John",
    content: "Not much, just chatting with Mary about the weekend.",
  },
  {
    id: 9,
    sender: "Tom",
    content: "Cool, what are you guys doing?",
  },
  {
    id: 10,
    sender: "Mary",
    content: "We're going to a concert on Saturday night. Want to join us?",
  },
  {
    id: 11,
    sender: "Tom",
    content: "Thanks for the invite, but I have plans already.",
  },
];

export default function Messages() {
  const classes = useStyles();
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    // TODO: send message logic
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.chatList}>
      <List>
        {chatListData.map((item) => (
          <ListItem key={item.id} button>
            <ListItemAvatar>
              <Avatar>{item.avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.lastMessage} />
          </ListItem>
        ))}
      </List>
      </Grid>
      <Grid item className={classes.chatArea}>
      <Box p={2} display="flex" alignItems="center">
          <Avatar>U1</Avatar>
          <Box ml={2}>
            <Typography variant="h6" color="textPrimary">
              User
              </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Online
        </Typography>
      </Box>
    </Box>
      <Box p={2}>
        {chatMessagesData.map((message) => (
          <Box
              key={message.id}
              className={
                message.sender === "John"
                  ? classes.messageWrapperLeft
                  : classes.messageWrapperRight
              }
            >
              <Typography variant="body1" color="textPrimary">
                {message.sender}: {message.content}
              </Typography>
            </Box>
          ))}
        </Box>
    <form onSubmit={handleSendMessage} className={classes.messageInput}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="Type your message..."
            variant="outlined"
            value={message}
            onChange={handleMessageChange}
            className={classes.textField}
            InputProps={{
              className: classes.textField,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.sendButton}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  </Grid>
</Grid>
);
}