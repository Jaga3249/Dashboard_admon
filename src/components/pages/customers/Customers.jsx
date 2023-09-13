import { Avatar, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getCustomers } from "../../../Api";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [customers, setCutomers] = useState();

  useEffect(() => {
    getCustomers().then((res) => {
      setLoading(true);
      setCutomers(res.users.map((user) => ({ ...user, key: user.id })));
      setLoading(false);
      
    })
  }, []);
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'imagel',
      render: (link) => {

        return <Avatar src={link} />
      }
    },
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },

    {
      title: 'lastName',
      dataIndex: 'lastName',
      key: 'lastName',

    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',

    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },


  ]


  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table dataSource={customers} columns={columns} pagination={{ pageSize: 5 }} loading={loading} />
    </Space>
  );
};

export default Customers;
