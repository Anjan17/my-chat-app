import React, { useEffect, useState, useContext, useRef } from "react";
import {
  ChatScreen,
  ChatScreenTitle,
  ChatScreenBody,
  ChatScreenFooter,
} from "./components/chat-screen";
import { default as Sidebar } from "./components/Sidebar";
import Chat from "./components/Chat";
import guid from "./utils/UIDGenrator";

const mockChatList = [
  {
    text: "This is text one",
    from: "User0",
    to: "User1",
    id: guid(),
    timeStamp: "December 17, 1995 03:24:00",
  },
  {
    text: "This is another text",
    from: "User0",
    to: "User1",
    id: guid(),
    timeStamp: "December 17, 1995 03:21:00",
  },
  {
    text: "This is some text",
    from: "User1",
    to: "User0",
    id: guid(),
    timeStamp: "December 17, 1995 03:23:00",
  },
  {
    text: "This is another something",
    from: "User1",
    to: "User0",
    id: guid(),
    timeStamp: "December 17, 1995 03:19:00",
  },
];

const mockUser = {
  name: "User0",
  id: "12345",
};
const ChatApp = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [chatList, setChatList] = useState([]);

  const handleSelect = (value) => {
    setSelectedItem(value);
    // fetch the message details list
    setChatList(mockChatList);
  };

  const handleSendChat = (message) =>
    alert(`The message: "${message}" is being posted`);

  return (
    <div className="chat-app" style={{ display: "flex", margin: "10%" }}>
      <Sidebar selectedItem={selectedItem} handleSelect={handleSelect} />
      <ChatScreen>
        <ChatScreenTitle title={selectedItem || "myChat App"} />
        <ChatScreenBody>
          {!selectedItem && "Welcome to myChat"}
          {selectedItem && chatList.length
            ? chatList
                .sort((chat1, chat2) => {
                  const { timeStamp: date1, id: id1 } = chat1;
                  const { timeStamp: date2, id: id2 } = chat2;
                  return new Date(date1).getTime() - new Date(date2).getTime();
                })
                .map(({ text, id, from, to, timeStamp }) => (
                  <Chat
                    id={id}
                    text={text}
                    from={from}
                    to={to}
                    timeStamp={timeStamp}
                    key={id}
                    user={mockUser}
                  />
                ))
            : null}
        </ChatScreenBody>
        {selectedItem && <ChatScreenFooter onSend={handleSendChat} />}
      </ChatScreen>
    </div>
  );
};

export default ChatApp;
