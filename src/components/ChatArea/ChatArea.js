import { useState } from "react";

export const ChatArea = () => {
  const [chatInput, setChatInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  function inputHandler(e) {
    setChatInput(e.target.value);
  }

  function chatIconClickHandler(e) {
    setShowChat(true);
  }

  function closeChatSpaceHandler(e) {
    setShowChat(false);
  }

  return (
    <>
      {showChat ? (
        <></>
      ) : (
        <div style={chatSpaceIcon}>
          <img
            onClick={chatIconClickHandler}
            style={chatSpaceImg}
            className="animate-[bounce_2.7s_ease-in-out_infinite]"
            src="https://i.ibb.co/n1Wvk1k/chat-icon.png"
            alt="chat-icon"
          />
        </div>
      )}

      {showChat ? (
        <div style={chatSpace}>
          <div style={chatSpaceExitBtn}>
            <img
              onClick={closeChatSpaceHandler}
              style={chatSpaceExitIcon}
              src="https://i.ibb.co/3437jdv/chat-exit-icon.pnghttps://ibb.co/S5jPMyc"
              alt=""
            />
          </div>
          <ul style={messageContainer}>
            <li style={messageSender}>
              This is where the messages will appear
            </li>
          </ul>
          <form style={formStyling} action="">
            <input
              style={inputField}
              onChange={inputHandler}
              value={chatInput}
              type="text"
            />
            <button style={sendBtn} type="submit">
              Send
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const chatSpaceImg = {
  width: "75px",
  height: "75px",
};

const chatSpaceIcon = {
  position: "fixed",
  bottom: "3%",
  right: "3%",
};

const inputField = {
  color: "black",
  marginRight: "5px",
  height: "32px",
  width: "65%",
  borderRadius: "24px",
  border: "2px solid #B7C8F6",
};

const chatSpace = {
  width: "300px",
  height: "400px",
  border: "2x solid grey",
  borderRadius: "16px",
  backgroundColor: "#A5D0EA",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "end",
  position: "fixed",
  bottom: "3%",
  right: "3%",
};

const sendBtn = {
  borderRadius: "24px",
  border: "1.5px solid #3069FF",
  padding: "8px 22px",
  backgroundColor: "#3069FF",
  color: "white",
  fontSize: "16px",
};

const formStyling = {
  width: "95%",
  margin: "6px",
  position: "absolute",
  bottom: "1%",
  right: "0.5%",
};

const chatSpaceExitBtn = {
  margin: "10px 12.5px",
};

const chatSpaceExitIcon = {
  width: "30px",
  height: "30px",
};

const messageContainer = {
  margin: "10px 15px",
  width: "80%",
};

const messageSender = {
  width: "80%",
  padding: "10px",
  borderRadius: "16px",
  backgroundColor: "#6D9198",
  listStyle: "none",
  color: "white",
};
