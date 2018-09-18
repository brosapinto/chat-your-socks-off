import React from "react";
import { Media, Avatar, H5, Paragraph } from "cobalt-react-components";

const Message = ({ author, children }) => (
  <Media>
    <Avatar>
      <img
        src={"https://image.flaticon.com/icons/png/128/236/236833.png"}
        alt="avatar"
      />
    </Avatar>
    <H5>{author}</H5>
    <Paragraph>{children}</Paragraph>
  </Media>
);

export default Message;
