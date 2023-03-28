import React from "react";
import {Container, Row, Col, Card} from "reactstrap"
// import Max from "../assets/maxps.jpg"
// import Summit from "../assets/summitps.jpg"
// import Mod from "../assets/modps.jpg"
function testCards(){
  return(
    <>
  
<h2 className="work"><strong>My <span className="design">Design</span> Work</strong></h2>

<Container className="workctn">
  <Row>
    <Col md={5}>
      <a  className="modcard"href="https://modprop.info/" target='_blank' rel="noreferrer">
      <Card>
        <div className="modprop">
       <h3 className="modhovertext">Visit Site</h3>
        </div>
      </Card>
      </a>
    </Col>
    <Col md={2}></Col>
    <Col md={5}>
      <a href="https://summitjuniortour.com/" target='_blank' rel="noreferrer">
      <Card>
        <div className="golf"></div>
      </Card>
      </a>
    </Col>

  
    {/* <Col md={6}>
    <a href="https://www.maxfund.org/" target='_blank' rel="noreferrer">
      <Card>
        <div className="fund"></div>
      </Card>
      </a>
    </Col> */}
  </Row>
  <br/>
  <br/>
  <Row>
  <Col md={5}>
    <a href="https://www.maxfund.org/" target='_blank' rel="noreferrer">
      <Card>
        <div className="fund"></div>
      </Card>
      </a>
    </Col>
    <Col md={2}></Col>
    <Col md={5}>
      <a href="https://www.usedautopartsdenver.co/" target='_blank' rel="noreferrer">
      <Card>
        <div className="central">
       
        </div>
      </Card>
      </a>
    </Col>
    
  </Row>
<br/>
<br/>
  <Row>
  <Col md={5}>
    <a href="https://www.evolution-landscape.com/" target='_blank' rel="noreferrer">
      <Card>
        <div className="evo"></div>
      </Card>
      </a>
    </Col>
    <Col md={2}></Col>
    <Col md={5}>
      <a href="https://www.connective-systems.com/" target='_blank' rel="noreferrer">
      <Card>
        <div className="connective">
       
        </div>
      </Card>
      </a>
    </Col>
    
  </Row>
</Container>
    </>
  )
}


export default testCards