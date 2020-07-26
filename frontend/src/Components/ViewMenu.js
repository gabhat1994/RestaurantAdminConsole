import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Collapse,
  Card,
  Input,
  Typography,
  Button,
  Drawer,
  Form,
} from "antd";

export default function ViewMenu(props) {
  const { Header, Content } = Layout;
  const [form] = Form.useForm();
  const { Panel } = Collapse;
  const { Title } = Typography;
  const expandIconPosition = "right";
  const [visible, setVisible] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const key = props.match.params.key.toString();
  const restaurantReducer = useSelector((state) => state.restaurantReducer);
  const { restaurantList } = restaurantReducer;
  const restaurantData = restaurantList.find((x) => x.key === key);

  const initialValues = {
    cuisine: "",
    dish: "",
    price: "",
  };

  const showDrawer = () => {
    setVisible(true);
    setDrawer(true);
  };

  const onClose = () => {
    setVisible(false);
    setDrawer(false);
  };

  const onFinish = (values) => {
    console.log(values, "test123");
    // dispatch(addResturant(values));
    // props.history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo, "test");
  };

  const onReset = () => {
    form.current.resetFields();
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
                                Rs {menu.price}
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
            <Form
              ref={form}
              initialValues={initialValues}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="cuisine"
                label="Cusine Name"
                rules={[
                  {
                    required: true,
                    message: "Please input Cuisine",
                  },
                ]}
              >
                <Input placeholder="Please Enter  Cuisine" />
              </Form.Item>

              <Form.Item
                name="dish"
                label="Dish Name"
                rules={[
                  {
                    required: true,
                    message: "Please input dish",
                  },
                ]}
              >
                <Input placeholder="Please Enter dish name" />
              </Form.Item>

              <Form.Item
                name="price"
                label="Dish Price"
                rules={[
                  {
                    required: true,
                    message: "Please input dish price",
                  },
                ]}
              >
                <Input placeholder="Please Enter  price" />
              </Form.Item>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>

                <Button type="reset" onClick={onReset}>
                  Reset
                </Button>
              </div>
            </Form>
          </Drawer>
        )}
      </Content>
    </Layout>
  );
}
