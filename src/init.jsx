import debug from "debug";

import App from "./components/App";

const logSocket = debug("chat:socket");

const init = async (socket) => {

  socket.on("newMessage", logSocket);

  return (
    <App />
  );
};

export default init;