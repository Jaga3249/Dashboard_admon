import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory } from "../../../Api";

const Inventory = () => {
  const [loading, setLoading]=useState(false);
  const[inventory,setInventory]=useState();

  useEffect(()=>{
    getInventory().then((res)=>{
      setLoading(true);
      setInventory(res.products.map((inventory)=>({...inventory,key:inventory.id})));
      setLoading(false);
    })
  },[]);
  const columns=[
    {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render:(value)=>{
      return <span>₹{value}</span>
    }
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render:(rating)=>{
      return <Rate value={rating} allowHalf/>
    }
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    render:(link)=>{
      
      return <Avatar src={link}/>
    }
  }
]

 
  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table dataSource={inventory} columns={columns} pagination={{pageSize:5}}/>
    </Space>
  );
};

export default Inventory;
