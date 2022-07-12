import React from "react";
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"
import Max from "../assets/maxps.jpg"
function testCards(){
  return(
    <>
    <Container>
  <Row>
    <Col lg={3}>
      <Card className="maxfund">
        <CardTitle className="maxlink">MaxFund Animal Adoption Center </CardTitle>
        <CardImg className="max"src={Max}></CardImg>
        <h5 className="maxlink">www.maxfund.org</h5>
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