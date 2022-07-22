import React from "react";
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button,UncontrolledCollapse,Collapse, Alert} from "reactstrap"
import Max from "../assets/maxps.jpg"
import Summit from "../assets/summitps.jpg"
import Mod from "../assets/modps.jpg"
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
        <CardBody className="maxtext">Animal Adoption Agency in Denver, CO</CardBody>
        <a href="https://www.maxfund.org/" target='_blank' rel="noreferrer"><Button className="maxbtn">View Site</Button></a>
      </Card>
    </Col>
    <Col className="testing"lg={3}>
      <Card className="summit">
        <CardTitle className="maxtitle"><strong>Summit Junior Tour</strong></CardTitle>
        <CardImg className="max"src={Summit}></CardImg>
        <CardBody className="summittext">Junior Golf Tour in Colorado</CardBody>
        <a href="https://summitjuniortour.com/" target='_blank' rel="noreferrer"><Button className="maxbtn">View Site</Button></a>
        {/* <CardBody>lorem ipsum</CardBody> */}
      </Card>
    </Col>
    <Col className="testing2"lg={3}>
      <Card className="mod">
        <CardTitle className="maxtitle"><strong>Mod Properties</strong></CardTitle>
        <CardImg className="modimg"src={Mod}></CardImg>
        <CardBody className="modtext">Property Management Firm in Denver, CO</CardBody>
        <a href="https://modprop.info/" target='_blank' rel="noreferrer"><Button className="maxbtn">View Site</Button></a>

        {/* <CardBody>lorem ipsum</CardBody> */}
      </Card>
    </Col>
  </Row>
  
</Container>
    </>
  )
}


export default testCards