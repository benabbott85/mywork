import React from "react";
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button,UncontrolledCollapse,Collapse, Alert} from "reactstrap"
import Max from "../assets/maxps.jpg"
function testCards(){
  return(
    <>
    <Container className="contain">
  <Row>
    <Col lg={3}>
      <Card className="maxfund">
        <CardTitle className="maxtitle"><strong>MaxFund Animal Adoption Center</strong> </CardTitle>
        <CardImg className="max"src={Max}></CardImg>
        {/* <h5 className="maxlink">www.maxfund.org</h5> */}
        
        <a href="https://www.maxfund.org/" target='_blank' rel="noreferrer"><Button className="maxbtn">View Site</Button></a>
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