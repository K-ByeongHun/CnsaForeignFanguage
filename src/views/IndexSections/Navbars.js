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

import {

  Collapse,

  DropdownToggle,

  DropdownMenu,

  DropdownItem,

  UncontrolledDropdown,

  NavbarBrand,

  Navbar,

  NavItem,

  NavLink,

  Nav,

  Container,

  Row,

  Button,

  Modal,

  Col

} from "reactstrap";

export default function Navbars() {

  const [demoModal2, setDemoModal2] = React.useState(false);

  const [demoModal3, setDemoModal3] = React.useState(false);

  const [demoModal4, setDemoModal4] = React.useState(false);

  const [demoModal5, setDemoModal5] = React.useState(false);

  const [demoModal6, setDemoModal6] = React.useState(false);

  const [demoModal7, setDemoModal7] = React.useState(false);  

  return (       

    <div className="section section-navbars">

    

      <Modal isOpen={demoModal2} toggle={() => setDemoModal2(false)}>

        <div className="modal-header justify-content-center">

          <button className="close" onClick={() => setDemoModal2(false)}>

            <i className="tim-icons icon-simple-remove" />

          </button>

          <h4 className="title title-up">세계시민 교육반</h4>

        </div>

        <div className="modal-body">

          <p>

          - (목표) SDGs 관련 다양한 캠페인 활동을 통해 세계시민으로서의 

          협력 및 의사소통 능력을 기르며 다른 동아리와 연계하여 세계 시민 

          이슈관련 공연 활동에 적극 참여한다. 

          </p>

          <p>

          - (특징) 글로벌 이슈와 관련하여 봉사활동, 강의, 체험학습 등에 적극 참여 한다.

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

      

      <Modal isOpen={demoModal3} toggle={() => setDemoModal3(false)}>

        <div className="modal-header justify-content-center">

          <button className="close" onClick={() => setDemoModal3(false)}>

            <i className="tim-icons icon-simple-remove" />

          </button>

          <h4 className="title title-up">영어 저널 제작반 (Write Now)</h4>

        </div>

        <div className="modal-body">

          <p>

          - (목표) 영어 저널을 제작하는데 필요한 언어 능력을 향상시키고, 잡지 

          발행에 필요한 예산 확보를 포함한 다양한 요소에 대해서 고민하는 과정에서 

          잡지의 가치에 대해 느끼고 제작물을 질을 높이는 데 집중함.

          </p>

          <p>

          - (특징) 학교의 다양한 소식과, 학생들의 관심도가 높은 사안들을 직접 조사

          하여, 기사를 작성하고, 잡지 전체의 디자인을 하며, 출판될 잡지에 소요되는 

          비용을 지역사회 홍보를 통해 예산을 마련한 후, 실제 발행 및 배부를 학생들이 직접 진행함.

          </p>

        </div>

        <div className="modal-footer">

          <Button

            color="danger"

            type="button"

            onClick={() => setDemoModal3(false)}

          >

            Close

          </Button>

        </div>

      </Modal>  

      

      <Modal isOpen={demoModal4} toggle={() => setDemoModal4(false)}>

        <div className="modal-header justify-content-center">

          <button className="close" onClick={() => setDemoModal4(false)}>

            <i className="tim-icons icon-simple-remove" />

          </button>

          <h4 className="title title-up">다문화 연구 동아리</h4>

        </div>

        <div className="modal-body">

          <p>

          - (목표) 중국, 일본을 중심으로 한 동아시아 국가의 언어와 문화에 대해 탐구하여 토론하고 

          자신의 진로 분야와 연관 지어 발표하는 활동 등을 한다. 이를 통해 문화이해수준을 높이고, 

          문화의 상대성에 대해 직, 간접적으로 체득하여 글로벌 마인드를 갖는다.   

          </p>

          <p>

          - (특징) 여러 국가의 문화에 대한 이해를 바탕으로 다문화 가족 지원센터에 정기적으로 방문하여 

          '주니어 창체 교실'이라는 수업을 통해 다문화 가정 아이들에게 교육봉사를 한다. 또한, 동아시아 

          관련된 기사 작성, 영상 제작 등의 콘텐츠를 기획하고 제작한다.  

          </p>

        </div>

        <div className="modal-footer">

          <Button

            color="danger"

            type="button"

            onClick={() => setDemoModal4(false)}

          >

            Close

          </Button>

        </div>

      </Modal>  

      

      <Modal isOpen={demoModal5} toggle={() => setDemoModal5(false)}>

        <div className="modal-header justify-content-center">

          <button className="close" onClick={() => setDemoModal5(false)}>

            <i className="tim-icons icon-simple-remove" />

          </button>

          <h4 className="title title-up">영어토론반</h4>

        </div>

        <div className="modal-body">

          <p>

          - (목표) 학생들로 하여금 영어로 자유롭게 자신의 생각을 구사하는 능력을 향상시키고, 다양한 시사

          이슈에 대해 공부하고 친구들과 생각을 나누며 사고를 확장하고자 한다.

          </p>

          <p>

          - (특징)영어 토론에 필요한 커뮤니케이션 능력과 발표 기술을 향상시키고, 다양한 시사 이슈에 대해 

          학습하고 토론하며 비판적 사고능력뿐만 아니라 자신과 다른 의견을 이해하고 존중하는 자세, 국제적인 

          매너를 포함한 글로벌 리더의 자질을 체득한다.

          </p>

        </div>

        <div className="modal-footer">

          <Button

            color="danger"

            type="button"

            onClick={() => setDemoModal5(false)}

          >

            Close

          </Button>

        </div>

      </Modal>  

      

      <Modal isOpen={demoModal6} toggle={() => setDemoModal6(false)}>

        <div className="modal-header justify-content-center">

          <button className="close" onClick={() => setDemoModal6(false)}>

            <i className="tim-icons icon-simple-remove" />

          </button>

          <h4 className="title title-up">영미문학동아리</h4>

        </div>

        <div className="modal-body">

          <p>

          - (목표) 영미문학 읽기를 통해 영어권 문화의 정치•경제•사회•문화적 배경을 이해하고, 인문학적 

          상상력과 창의력을 바탕으로 영어 독서 능력 및 문해력을 높임. 

          </p>

          <p>

          - (특징) 시대별 문학 작품의 특징을 이해하고, 작품을 읽은 후 내용을 공유함. 추가로, 문학 작품을 

          각색한 영화, 연극, 뮤지컬 작품을 감상하고 책과 비교 분석 후 토론함. 

          </p>

        </div>

        <div className="modal-footer">

          <Button

            color="danger"

            type="button"

            onClick={() => setDemoModal6(false)}

          >

            Close

          </Button>

        </div>

      </Modal>  

      

      <Modal isOpen={demoModal7} toggle={() => setDemoModal7(false)}>

        <div className="modal-header justify-content-center">

          <button className="close" onClick={() => setDemoModal7(false)}>

            <i className="tim-icons icon-simple-remove" />

          </button>

          <h4 className="title title-up">영어 동화책 창작반</h4>

        </div>

        <div className="modal-body">

          <p>

          - (목표) 영문학적 수사적 표현을 활용한 영작활동을 활성화 한다. 학생들의 문학적 감수성을 높이고 표지 

          디자인, 삽화, 내용 선정 및 작문, 편집, 제본 등 전반적인 과정에 직접 참여하며 아동들을 대상으로 한 적절한 

          내용의 동화책 제작을 경험하게 한

          </p>

          <p>

          - (특징) 세계시민 역량과 관련하여 아동들에게 교육의 가치가 있는 내용을 선정하여 동화 내용으로 창작해본다. 

          창작한 동화 내용을 바탕으로 수사적 표현과 리듬감, 재치 있는 표현이 느껴지는 짧은 길이의 영어 동화 줄글 작문을 진행한다.

          표지와 삽화를 직접 그려 글과 조화롭게 배치하여 편집한다. 편집이 완성된 동화책을 직접 인쇄하여 실물 동화책으로 완성한다.

          완성한 동화책을 지역아동센터나 교육봉사에서 아동 교육에 활용할 수 있는 방안을 모색한다.

          </p>

        </div>

        <div className="modal-footer">

          <Button

            color="danger"

            type="button"

            onClick={() => setDemoModal7(false)}

          >

            Close

          </Button>

        </div>

      </Modal>  

    

      <img alt="..." className="path" src={require("assets/img/path3.png")} />

      <Container id="menu-dropdown">

        

        <h3 className="title mb-3">동아리</h3>

      </Container>

      <div id="navbar">

        <div className="navigation-example">

          {/* Navbar Primary */}

          <Navbar className="bg-primary" expand="lg">

            <Container>

              <div className="navbar-translate" onClick={() => setDemoModal2(true)}>

                <NavbarBrand href="#pablo" onClick={() => setDemoModal2(true)}>

                  세계시민 교육반

                </NavbarBrand>

                <button className="navbar-toggler" aria-expanded={false} onClick={() => setDemoModal2(true)}>

                  <span className="navbar-toggler-bar bar1" />

                  <span className="navbar-toggler-bar bar2" />

                  <span className="navbar-toggler-bar bar3" />

                </button>

              </div>

              <Collapse navbar isOpen={false}>

                <Nav className="ml-auto" navbar>

                  

                  <NavItem className="active">

                    <NavLink href="#pablo" onClick={() => setDemoModal2(true)}>

                      <i className="tim-icons icon-world" />

                      더보기

                    </NavLink>

                  </NavItem>

                  

                </Nav>

              </Collapse>

            </Container>

          </Navbar>

          {/* End Navbar Primary */}

          {/* Navbar Info */}

          <Navbar className="bg-info" expand="lg">

            <Container>

              <div className="navbar-translate" onClick={() => setDemoModal3(true)}>

                <NavbarBrand href="#pablo" onClick={() => setDemoModal3(true)}>

                  영어 저널 제작반 (Write Now)

                </NavbarBrand>

                <button className="navbar-toggler" aria-expanded={false}>

                  <span className="navbar-toggler-bar bar1" />

                  <span className="navbar-toggler-bar bar2" />

                  <span className="navbar-toggler-bar bar3" />

                </button>

              </div>

              <Collapse navbar isOpen={false}>

                <Nav className="ml-auto" navbar>

                  <NavItem className="active">

                    <NavLink href="#pablo" onClick={() => setDemoModal3(true)}>

                      <i className="tim-icons icon-world" />

                      더보기

                    </NavLink>

                  </NavItem>

                </Nav>

              </Collapse>

            </Container>

          </Navbar>

          {/* End Navbar Info */}

          {/* Navbar Success */}

          <Navbar className="bg-success" expand="lg">

            <Container>

              <div className="navbar-translate" onClick={() => setDemoModal7(true)}>

                <NavbarBrand href="#pablo" onClick={() => setDemoModal7(true)}>

                  영어 동화책 창작반

                </NavbarBrand>

                <button className="navbar-toggler" aria-expanded={false}>

                  <span className="navbar-toggler-bar bar1" />

                  <span className="navbar-toggler-bar bar2" />

                  <span className="navbar-toggler-bar bar3" />

                </button>

              </div>

              <Collapse navbar isOpen={false}>

                <Nav className="ml-auto" navbar>

                  

                  <NavItem className="active">

                    <NavLink href="#pablo" onClick={() => setDemoModal7(true)}>

                      <i className="tim-icons icon-world" />

                      더보기

                    </NavLink>

                  </NavItem>

                </Nav>

              </Collapse>

            </Container>

          </Navbar>

          {/* End Navbar Success */}

          
          {/* End Navbar Danger */}

          {/* Navbar Transparent */}

          {/* End Navbar Transparent*/}

        </div>

      </div>

    </div>

  );

}
