import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SET_COMMENT } from "../features/appraisals";

export default function CommentBox(props) {
  const dispatch = useDispatch();
  // const [comment, setComment] = useState(props.comment);
  const handleChange = (evt) => {
    // setComment(e.target.value);
    dispatch(SET_COMMENT(
      props.type === 'ratee' ?
        {
          rateeComments: evt.target.value
        }
        :
        {
          supervisorComments: evt.target.value
        }
    ))
    // props.commentCallback(e.target.value);
  };
  return (
    <Card>
      <Card.Header className="text-white">
        {props.title}
      </Card.Header>
      <Form.Control
        as="textarea"
        rows={4}
        maxLength={255}
        defaultValue={props.type == 'ratee' ? props.comment.value : ''}
        onChange={(e) => handleChange(e)}
      />
    </Card>
  );
}
