import React from "react";
import "assets/css/new.css";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
      <div className="content-center brand">
          <h1 className="h1-seo" >CNSA</h1>
          <h1 className="h1-seo" >외국어과</h1>
          <div className="EnglishTitle">
            <h2 className="d-none d-sm-block">
              Welcome to the CNSA Foreign Language Hub
            </h2>
            <h4 className="d-none d-sm-block">
            You Can Taste a lot of Foreign Language Festivals in CNSA!
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
}
