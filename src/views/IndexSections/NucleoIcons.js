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
import { Button, Container, Row, Col, Modal } from "reactstrap";

export default function NucleoIcons() {
  
  const [demoModal2, setDemoModal2] = React.useState(false);
  
  return (
    <div className="section section-nucleo-icons">
    
      <Modal isOpen={demoModal2} toggle={() => setDemoModal2(false)}>

        <div className="modal-header justify-content-center">

          <button className="close" onClick={() => setDemoModal2(false)}>

            <i className="tim-icons icon-simple-remove" />

          </button>

          <h4 className="title title-up">큰퀴즈 온더 블럭</h4>

        </div>

        <div className="modal-body">

          <p>

          - 설명

          </p>

          <p>

          - 설명

          </p>

        </div>

        <div className="modal-footer">

          <Button

            color="danger"

            type="button"

            onClick={() => setDemoModal2(false)}

          >

            Close

          </Button>

        </div>

      </Modal>   
    
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">큰퀴즈 온더 블럭</h2>
            <h4 className="description">
              
              모집대상:
              
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="primary"
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                신청하기
              </Button>
              <Button
                className="btn-simple btn-round"
                color="primary"
                onClick={() => setDemoModal2(true)}
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                자세히 보기
              </Button>
            </div>
          </Col>
        </Row>
        <div className="blur-hover">
          
          <Container className="text-center">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/wg.png")}
                  style={{ width: "600px" }}
                />
                
           
          </Container>
          
        </div>
      </Container>
    </div>
  );
}
