import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Input, Form, Button } from "antd";
import { editResturant } from "../actions/restaurantActions";
import { useDispatch, useSelector } from "react-redux";
export default function EditRestaurant(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const key = props.match.params.key.toString();
  const restaurantReducer = useSelector((state) => state.restaurantReducer);
  const { restaurantList } = restaurantReducer;
  const restaurantData = restaurantList.find((x) => x.key === key);

  const initialValues = {
    name: restaurantData.name,
    address: restaurantData.address,
    rating: restaurantData.rating,
    avgcost: restaurantData.avgcost,
    dt: restaurantData.dt,
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const { Title } = Typography;

  const onFinish = (values) => {
    var key = { key: restaurantData.key, menu: restaurantData.menu };
    let finaldat = { ...values, ...key };

    console.log(finaldat, "restaurantData");
    dispatch(editResturant(finaldat));
    props.history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo, "test");
  };

  const onReset = () => {
    form.current.resetFields();
  };

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Edit Restaurant Details
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form
            {...layout}
            ref={form}
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="name"
              label="Restaurant Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please Enter  Restaurant Name" />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please input Address",
                },
              ]}
            >
              <Input placeholder="Please Enter  Address" />
            </Form.Item>

            <Form.Item name="rating" label="Rating">
              <Input placeholder="Please Enter  Rating" />
            </Form.Item>

            <Form.Item name="dt" label="Delivery TIme (in mins)">
              <Input placeholder="Please Enter  deliver Time" />
            </Form.Item>

            <Form.Item name="avgcost" label="Average Cost">
              <Input placeholder="Please Enter  Average Cost" />
            </Form.Item>

            <div style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Update
              </Button>

              <Button type="reset" onClick={onReset}>
                Reset
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
