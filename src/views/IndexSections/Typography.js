/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <h3 className="title">행사 일정</h3>
        <div id="typography">
          <Row>
            <Col md="12">
              
              <div className="typography-line">
                <h4>
                  <span></span>
                  <p></p>
                </h4>
              </div>

              <div className="typography-line">
                <span>5월</span>
                <p className="text-primary">
                  제 1회 영어 말하기 Challenge
                </p>
              </div>
              
              
              <div className="typography-line">
                <span>11월</span>
                <p className="text-warning">
                  제 2회 영어 말하기 Challenge
                </p>
                <p className="text-warning">
                  중국문화 탐구대회
                </p>
                <p className="text-warning">
                  일본어 더빙대회
                </p>
              </div>
              
              <div className="typography-line">
                <span>3월~12월</span>
                <p className="text-success">
                  영단어 암기 아보카도
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="space-50" />
        <div id="images">
          <h3 className="mb-5">Images</h3>
          <Row>
        
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p1.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p22.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p3.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p4.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>
  );
}
