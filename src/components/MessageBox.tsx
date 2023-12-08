import { useContext } from "react";
import MessageItem from "./MessageItem";
import { Box } from "@mui/material";
import { ChatContext, Message } from "../contexts/ChatContext";

const MessageBox = () => {
  const { messages, receiver } = useContext(ChatContext);

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      {receiver &&
        messages?.map((message: Message, index) => (
          <MessageItem message={message} key={index} />
        ))}
    </Box>
  );
};

export default MessageBox;
