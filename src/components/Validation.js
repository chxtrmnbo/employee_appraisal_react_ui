import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function Validation(props) {
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    setErrors(props.errors);
  }, []);

  return (
    <>
      <Card className="p-4" style={{ background: "#FED6D6" }}>
        <h5 className="text-danger">
          {errors.length} Error(s) prohibited from user for submitting this
          form.
        </h5>
        <span className="text">
          There were problems in the following fields:
          <ul>
            {errors.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </span>
      </Card>
    </>
  );
}
