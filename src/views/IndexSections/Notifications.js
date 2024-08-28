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
import { UncontrolledAlert, Container } from "reactstrap";

export default function Notifications() {
  return (
    <div className="section section-notifications" id="notifications">
      <Container>
        <div className="space" />
        <h3>Notifications</h3>
        
        
    
        <UncontrolledAlert className="alert-with-icon" color="success">
          <span data-notify="icon" className="tim-icons icon-bell-55" />
          <span>
            <b>제2회 영어 말하기 Challenge -</b>
            <p>일시: 10월 26일(목), EP1</p>
            <p>장소: 갤럭시홀</p>
            <p>신청마감: 10월 23일(월) 23시까지, 큰사넷 설문조사</p>
          </span>
        </UncontrolledAlert>
  
        <UncontrolledAlert className="alert-with-icon" color="warning">
          <span data-notify="icon" className="tim-icons icon-bulb-63" />
          <span>
            <b>큰퀴즈 온더 블럭(영말챌 2부 행사) -</b>
            <p>일시: 10월 26일(목), EP1</p>
          </span>
        </UncontrolledAlert>
    
        <UncontrolledAlert className="alert-with-icon" color="info">
          <span data-notify="icon" className="tim-icons icon-coins" />
          <span>
            <b>제2회 중국&일본 문화 축제 -</b>
            <p>일시: 11월 9일(목), EP1</p>
            <p>대상: 전학년</p>
            <p>장소: 갤럭시홀</p>
          </span>
        </UncontrolledAlert>

        <UncontrolledAlert className="alert-with-icon" color="primary">
          <span data-notify="icon" className="tim-icons icon-trophy" />
          <span>
            <b>challenge! 이뿌영_2nd Day(feat. 뿅뿅!! 큰사오락실) -</b>
            <p>일시: 11월 10일(금) 점심시간(4A, 4B)</p>
            <p>대상: 전학년(선착순_상품소진시까지)</p>
            <p>장소: 2층 다산관 앞</p>
            <p></p>
          </span>
        </UncontrolledAlert>
        
      </Container>
    </div>
  );
}
