import { useState, useEffect } from "react";
import { Redirect404 } from "../../utils/redirect";
import { getJwt } from "../../utils/jwt";
import Header from "../../components/Header";
import { navItems } from "../../utils/constants";
import Footer from "../../components/Footer";
import LoadingDiv from "../../components/LoadingScreen";
import MessageProps from "./interface/MessageProps";
import MessageComponent from "./MessageComponent";

const Messages = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function that needs to be called to update posts
  async function getMessages() {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_PORT + "/contact",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: "bearer " + getJwt(),
          },
        }
      );
      const data = await response.json();
      setMessages(data);
      setIsLoading(false);
    } catch {
      Redirect404();
    }
  }

  useEffect(() => {
    getMessages();
  }, []);

  if (isLoading) {
    <>
      <Header active={navItems.MESSAGES} />
      <LoadingDiv />
      <Footer isAbsolute={false} />
    </>;
  }

  return (
    <>
      <Header active={navItems.MESSAGES} />
      <div className="container">
        {messages.map((message) => (
          <MessageComponent message={message} key={message._id} />
        ))}
      </div>
      <Footer isAbsolute={false} />
    </>
  );
};

export default Messages;
