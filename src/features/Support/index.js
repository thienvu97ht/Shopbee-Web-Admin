import TextField from "@material-ui/core/TextField";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

function SupportFeature() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://192.168.0.2:4000", { json: false });
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onMessageSubmit = (e) => {
    const resp = socketRef.current.emit("message", { name: "Admin", message });
    console.log(resp);
    e.preventDefault();
    setMessage("");
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <div className="render-chat">
        <h1>Support</h1>
        {renderChat()}
      </div>
      <form onSubmit={onMessageSubmit}>
        <div>
          <TextField
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Gửi</button>
      </form>
    </div>
  );
}

export default SupportFeature;
