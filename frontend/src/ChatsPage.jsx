import React, { useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import "./ChatPage.css";

const ChatsPage = (props) => {
  useEffect(() => {
    console.log("Username:", props.user.username);
    console.log("Secret:", props.user.secret);
    console.log("Project ID:", import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID);
  }, [props.user]);

  return (
    <div className="chatsbackground">
      <ChatEngine
        publicKey={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        userName={props.user.username}
        userSecret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
