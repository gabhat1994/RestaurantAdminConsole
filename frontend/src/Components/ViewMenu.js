import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Collapse,
  Card,
  Typography,
  Button,
  Drawer,
} from "antd";

export default function ViewMenu(props) {
  const { Header, Content } = Layout;
  const { Panel } = Collapse;
  const { Title } = Typography;
  const expandIconPosition = "right";
  const [visible, setVisible] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const key = props.match.params.key.toString();
  const restaurantReducer = useSelector((state) => state.restaurantReducer);
  const { restaurantList } = restaurantReducer;
  const restaurantData = restaurantList.find((x) => x.key === key);

  const showDrawer = () => {
    setVisible(true);
    setDrawer(true);
  };

  const onClose = () => {
    setVisible(false);
    setDrawer(false);
  };

  return (
    <Layout>
      <Header
        style={{ backgroundColor: "Blue", textAlign: "center", color: "white" }}
      >
        {restaurantData.name} Menu
      </Header>
      <Content>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>List of Menu Items Avavilable</Title>
          </Col>
          <Col span={6}>
            <Button block type="primary" onClick={showDrawer}>
              Add Menu Items
            </Button>
          </Col>
        </Row>
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
        {drawer && (
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            width={480}
            visible={visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        )}
      </Content>
    </Layout>
  );
}
