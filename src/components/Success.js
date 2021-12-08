import { Card, Button } from "react-bootstrap";

export default function Success() {
  return (
    <div>
      <Card className="text-center" style={{ width: "42rem", margin:"auto", marginTop:"11%"}}>
        <Card.Body className="p-4">
          <Card.Title><i class="fas fa-check-circle fa-2x mb-3" style={{color: "#4852B0"}}></i></Card.Title>
          <Card.Subtitle className="mb-2 p-2">
            <h3 style={{color:"#58C2B0"}}>LOGIN SUCCESSFUL</h3>
          </Card.Subtitle>
          <Card.Text className="p-2">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-primary">Cancel</Button>{' '}
          <Button style={{backgroundColor: "#4852B0"}}>Continue</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
