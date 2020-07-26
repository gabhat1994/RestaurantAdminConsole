import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resturantList } from "../actions/restaurantActions";
export default function LandingPage(props) {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const restaurantReducer = useSelector((state) => state.restaurantReducer);
  const { restaurantList } = restaurantReducer;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("./data.json");
      dispatch(resturantList(data.products));
    };

    fetchData();
  }, []);
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
            dataSource={restaurantList}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}
