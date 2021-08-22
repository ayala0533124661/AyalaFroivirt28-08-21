import React from 'react'
import { Container, Row, Card } from "react-bootstrap";

export default function Days(props) {
  const { index,temp } = props
  let arrDays = ["Sun", "Mon", "Tue", "Wen", "Thu","Fri","Sut"];
  return (
    <>
      <Card >
        <Card.Body >
          <Container className="d-flex-column justify-content-center">
            <Row className="d-flex align-items-center justify-content-center">
              <Card.Text >
                {arrDays[index]}
              </Card.Text>
              <Card.Text>
                {temp}C
              </Card.Text>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}