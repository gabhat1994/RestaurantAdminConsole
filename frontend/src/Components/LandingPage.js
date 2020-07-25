import React from "react";
import { Table, Tag, Space } from "antd";
import data from "../data";

export default function LandingPage() {
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
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
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
      <Table columns={columns} dataSource={data.products} />
    </div>
  );
}
