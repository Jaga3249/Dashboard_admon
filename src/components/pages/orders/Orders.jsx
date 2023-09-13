import { Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import getOrders from "../../../Api";


const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrders().then((res) => {
      setLoading(true);
      setOrder(res.products.map((order) => ({ ...order, key: order.id })));
      setLoading(false);
      

    })
  }, []);
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },

    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (value) => {
        return <span>₹{value}</span>
      }
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',

    },
    {
      title: 'DiscountedPrice',
      dataIndex: 'discountedPrice',
      key: 'discountedPrice',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',

    }





  ]


  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table dataSource={order} columns={columns}  loading={loading} />
    </Space>
  );
};

export default Orders;
