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
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export default function Signup() {
  
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              이뿌영 영상{" "}
              <span className="text-white">바로가기</span>
            </h3>
            <p className="text-white mb-3">
              
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                이뿌영 학습 영상 바로가기
              </Button>
            </div>
          </Col>
          
        </Row>
      </Container>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
    </div>
  );
}
