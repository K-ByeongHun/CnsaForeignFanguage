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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">CNSA</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
            
              <NavItem>
                <NavLink href="">
                  Global Ambassador
                </NavLink>
              </NavItem>
              
             
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                  <NavLink href="">
                    8기 안철민 제작
                  </NavLink>
                </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>

      <div className='copyright'>Copyrightⓒ 2023. Global Ambassador CNSA. All rights reserved.</div>

    </footer>
  );
}
