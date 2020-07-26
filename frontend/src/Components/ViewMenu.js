import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Layout, Row, Col, Collapse, Card } from "antd";

export default function ViewMenu(props) {
  const { Header, Content } = Layout;
  const { Panel } = Collapse;
  const expandIconPosition = "right";
  const key = props.match.params.key.toString();
  const restaurantReducer = useSelector((state) => state.restaurantReducer);
  const { restaurantList } = restaurantReducer;
  const restaurantData = restaurantList.find((x) => x.key === key);
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <Layout>
      <Header
        style={{ backgroundColor: "Blue", textAlign: "center", color: "white" }}
      >
        {restaurantData.name} Menu
      </Header>
      <Content>
        <Row gutter={[40, 0]}>
          <Col span={23}>
            <Collapse
              defaultActiveKey={["1"]}
              accordion={true}
              expandIconPosition={expandIconPosition}
            >
              {restaurantData.menu.category.map((category) => {
                return (
                  <Panel header={category.cuisine} key={category.key}>
                    <div className="site-card-wrapper">
                      <Row gutter={16}>
                        {category.menuItems.map((menu) => {
                          return (
                            <Col span={8} key={menu.key}>
                              <Card
                                size="small"
                                title={menu.dish}
                                bordered={true}
                                style={{ width: 300 }}
                              >
                                Card content
                              </Card>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Panel>
                );
              })}
            </Collapse>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
