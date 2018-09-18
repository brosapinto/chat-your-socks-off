import React from "react";
import { List, EmptyWidget } from "cobalt-react-components";

const History = ({ children }) => {
  if (React.Children.count(children) === 0) {
    return (
      <EmptyWidget
        type="empty"
        title={"Empty chat"}
        message={"This feels very lonely"}
      />
    );
  }

  return (
    <List divided>
      {React.Children.map(children, (item, index) => (
        <List.Item key={index}>{item}</List.Item>
      ))}
    </List>
  );
};

export default History;
