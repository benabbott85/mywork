import React from "react";
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"
function testCards(){
  return(
    <>
    <Container>
  <Row>
    <Col lg={3}>
      <Card>
        <CardTitle>Test</CardTitle>
        <CardBody>lorem ipsum</CardBody>
      </Card>
    </Col>
    <Col className="testing"lg={3}>
      <Card>
        <CardTitle>Test</CardTitle>
        <CardBody>lorem ipsum</CardBody>
      </Card>
    </Col>
    <Col className="testing2"lg={3}>
      <Card>
        <CardTitle>Test</CardTitle>
        <CardBody>lorem ipsum</CardBody>
      </Card>
    </Col>
  </Row>
</Container>
    </>
  )
}


export default testCards