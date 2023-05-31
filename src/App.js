import {
  withAuthenticator,
  TextField,
  Button,
  Text,
  Divider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Interactions } from "aws-amplify";
import { useState } from "react";
import "./App.css";

function App({ signOut, user }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleSend = async (e) => {
    e.preventDefault();
    const response = await Interactions.send("BookApointment", input);
    const message = response.messages[0].content;
    if (message) {
      setHistory([...history, input, message]);
    }
    console.log(message);
  };
  const botImage =
    "https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-head-ninja-robot-avatar-profile-logo-vector-png-image_6633234.png";
  const userImage =
    "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg";
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Text
            variation="primary"
            as="p"
            fontWeight={400}
            fontSize="1em"
            fontStyle="normal"
            textDecoration="none"
            padding={""}
            width="40vw"
          >
            Welcome {user.attributes.email}
          </Text>
          <button onClick={signOut}>Sign out</button>
        </header>
        <div className="container" id="main-container">
          <div id="input-field">
            <div className="chat-main-div">
              <TextField
                id="chatbot-props"
                label="Enter Props for the Chatbot"
                onChange={(e) => setInput(e.target.value)}
                outerEndComponent={<Button onClick={handleSend}>Send</Button>}
              />
            </div>
            <div className="chat-div">
              {history.map((itm, index) => (
                <>
                  <div
                    className="container-avatar"
                    style={{ flexDirection: index % 2 ? "row-reverse" : "" }}
                  >
                    <img src={index % 2 ? botImage : userImage} alt="Avatar" />
                    <p className="container-para">{itm}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <Divider label="     " orientation="vertical" />
          <div className="history">
            <Text width={"100%"}> </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthenticator(App);
