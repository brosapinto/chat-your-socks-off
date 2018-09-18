import React from "react";
import { Form, TextInput, Button } from "cobalt-react-components";

export default class SubmitForm extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.FieldGroup>
            <TextInput value={value} onChange={this.handleChange} />
            <Button primary onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form.FieldGroup>
        </Form>
      </div>
    );
  }
}
