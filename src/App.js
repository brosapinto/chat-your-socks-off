import React, { Component } from "react";
import { Header, Grid, H1 } from "cobalt-react-components";
import chatClient from "./chat-client";
import UserRegistration from "./UserRegistration";
import SubmitForm from "./SubmitForm";
import History from "./History";
import Message from "./Message";

class App extends Component {
  chat = null;
  state = {
    username: "",
    error: null,
    chatEntries: []
  };

  componentDidMount() {
    this.chat = chatClient("");

    this.chat.onMessage(entry => {
      this.setState(prevState => ({
        chatEntries: [...prevState.chatEntries, entry]
      }));
    });
  }

  registerUser = user => {
    this.chat.registerUser(user).then(() => this.setState({ username: user }));
  };

  sendMessage = message => {
    const { username: user } = this.state;

    this.chat
      .sendMessage(user, message)
      .then(() => console.log("Message sent"))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { username, chatEntries } = this.state;

    if (!username) {
      return <UserRegistration register={this.registerUser} />;
    }

    return (
      <React.Fragment>
        <Header contained>
          <Header.Heading>
            <Header.Title>
              <H1>{username}</H1>
            </Header.Title>
          </Header.Heading>
        </Header>
        <Grid>
          <History>
            {chatEntries.map((m, index) => (
              <Message key={index} author={m.user}>
                {m.message}
              </Message>
            ))}
          </History>
          <SubmitForm onSubmit={this.sendMessage} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
