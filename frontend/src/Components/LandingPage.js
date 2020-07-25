import React from "react";
import { Table, Row, Col, Button, Tag, Space, Typography } from "antd";
import data from "../data";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const { Title } = Typography;
  const columns = [
    {
      title: "Restaurant Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Delivery TIme (in mins)",
      dataIndex: "dt",
      key: "dt",
    },
    {
      title: "Average Cost (Rs)",
      dataIndex: "avgcost",
      key: "avgcost",
    },

    {
      title: "Action",
      key: "action",

      render: (text, record) => (
        <Space size="middle">
          <Link to={"/editRestaurant/" + record.key}>Edit Restaurant</Link>
          <Link to={"/viewresturant/" + record.key}>View Menu</Link>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>List of Restaurant's</Title>
        </Col>
        <Col span={6}>
          <Link to={"/addRestaurant"}>
            <Button block>Add Restaurant</Button>
          </Link>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data.products}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}
