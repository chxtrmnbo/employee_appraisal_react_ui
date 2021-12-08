import React from "react";
import { Card, Form } from "react-bootstrap";

export default function CommentBox(props) {
  // const [comment, setComment] = useState(props.comment);
  // const handleChange = (e) => {
  //   // setComment(e.target.value);
  //   props.commentCallback(e.target.value);
  // };
  return (
    <Card>
      <Card.Header className="bg-primary fw-bold text-white text-right">
        {props.title}
      </Card.Header>
      <Form.Control
        as="textarea"
        rows={3}
        maxLength={255}
        // value={props.comment.comments}
        // onChange={(e) => handleChange(e)}
      />
    </Card>
  );
}
