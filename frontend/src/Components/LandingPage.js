import React from "react";
import { Table, Row, Col, Button, Tag, Space, Typography } from "antd";
import data from "../data";

export default function LandingPage() {
  const { Title } = Typography;
  const columns = [
    {
      title: "Restaurant Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 6 ? "geekblue" : "green";
            if (tag === "Fast Food") {
              color = "volcano";
            } else if (tag === "Street Food") {
              color = "yellow";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit Details</a>
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
          <Button block>Add Restaurant</Button>
        </Col>
      </Row>

      <Table columns={columns} dataSource={data.products} pagination={false} />
    </div>
  );
}
