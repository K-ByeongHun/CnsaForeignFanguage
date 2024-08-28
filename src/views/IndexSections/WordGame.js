import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">Word Game</h3>
        </div>
        <Row>
          
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                영단어 활용 게임
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                     게임방법
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5
                      })}
                      onClick={(e) => setTextTabs(5)}
                      href="#pablo"
                    >
                      게임예시
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6
                      })}
                      onClick={(e) => setTextTabs(6)}
                      href="#pablo"
                    >
                      More
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                      6번의 시도 안에 오늘의 단어을 알아내세요. 각각의 시도는 5글자의 영어 단어로 이루어 집니다. 
                      추측이 맞는지 확인하려면 엔터를 입력하세요. 
                      추측한 단어가 얼마나 답에 근접했는지는 이후 각 타일의 색으로 표시됩니다.
                    </p>
                    <p>
                      만일 타일이 초록색으로 표시된다면:
                    </p>
                    <p>
                      - 표시된 글자가 오늘의 단어에 존재한다.
                    </p>
                    <p>
                      - 표시된 글자가 정확히 같은 위치에 위치한다.
                    </p>
                    <p>
                      만일 타일이 노란색으로 표시된다면:
                    </p>
                    <p>
                      표시된 글자가 오늘의 단어에 존재한다.
                    </p>
                    <p>
                      하지만 정확히 같은 위치에 있지는 않다.
                    </p>
                  </TabPane>
                  <TabPane tabId="link5">
                    <p>
                     예를 들어, 맞취야 하는 단어(워들)가 WORLD라고 가정하자.
                    </p>
                    <p>
                     이때, 플레이어의 추측이 WEARY일 경우 다음과 같은 결과가 나타난다.
                    </p>
                    <p>
                     - W: WORLD에 포함된 글자이며, 두 단어에서 위치가 일치한다. 따라서 초록색으로 표시된다.
                    </p>
                    <p>
                     - R: WORLD에 포함된 글자이지만 위치가 일치하지 않는다. 따라서 노색으로 표시된다.
                    </p>
                    <p>
                     그 외 나머지 글자들(E, A, and Y): WORLD에 전혀 존재하지 않는 글자들이다. 따라서 전부 회색으로 표시된다.
                    </p>
                 
                  </TabPane>
                  <TabPane tabId="link6">
                    <p>
                      매달 새로운 영단어 게임이 업데이트 됩니다. 
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <iframe src="https://cnsa-fld-wordgame.netlify.app/" title="" name="frame" width="100%" height="580px"></iframe>
    </div>
  );
}
