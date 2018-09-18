import React from "react";
import { Header, H1, Grid } from "cobalt-react-components";
import SubmitForm from "./SubmitForm";

const UserRegistration = ({ register }) => {
  return (
    <React.Fragment>
      <Header contained>
        <Header.Heading>
          <Header.Title>
            <H1>Choose your username:</H1>
          </Header.Title>
        </Header.Heading>
      </Header>
      <Grid>
        <SubmitForm onSubmit={register} />
      </Grid>
    </React.Fragment>
  );
};

export default UserRegistration;
