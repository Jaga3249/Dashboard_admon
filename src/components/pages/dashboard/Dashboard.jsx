import { Card, Space, Statistic, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import { DollarOutlined } from "@ant-design/icons";
import { ShopOutlined } from "@ant-design/icons";
import getOrders, { getCustomers, getInventory, getRevenue } from "../../../Api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  useEffect(()=>{
    getCustomers().then((res)=>{
      setCustomers(res.total);
    })
    getInventory().then((res)=>{
      setInventory(res.total)
    })
    getOrders().then((res)=>{
      setOrders(res.total)
      setRevenue(res.discountedTotal)
    })
    
    
  },[])
  return (
    <Space direction="vertical" size={10}>
      <Typography.Title level={4} style={{ fontWeight: "bold" }}>
        Dashboard
      </Typography.Title>
      <Space>
        <DashBoardCard
          icon={
            <UserAddOutlined
              style={{
                fontSize: "20px",
                backgroundColor: "rgba(0,0,0,0.25)",
                color: "purple",
                padding: "10px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            />
          }
          title={"Customers"}
          value={customers}
        />
        <DashBoardCard
          icon={
            <ShoppingCartOutlined
              style={{
                fontSize: "20px",
                backgroundColor: "rgba(0,255,0,0.25)",
                color: "green",
                padding: "10px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            />
          }
          title={"orders"}
          value={orders}
        />
        <DashBoardCard
          icon={
            <ShopOutlined
              style={{
                fontSize: "20px",
                backgroundColor: "rgba(0,0,255,0.25)",
                color: "blue",
                padding: "10px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            />
          }
          title={"Inventory"}
          value={inventory}
        />

        <DashBoardCard
          icon={
            <DollarOutlined
              style={{
                fontSize: "20px",
                backgroundColor: "rgba(255,0,0,0.25)",
                color: "red",
                padding: "10px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChart />

      </Space>
    </Space>


  );
};

const DashBoardCard = ({ title, value, icon }) => {
 


  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

const RecentOrders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title', // Unique key for the 'Title' column
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity', // Unique key for the 'Quantity' column
    },
    {
      title: 'Price',
      dataIndex: 'discountedPrice',
      key: 'price', // Unique key for the 'Price' column
    },
  ];

  useEffect(() => {
    getOrders().then((res) => {
      setLoading(true);
      setDataSource(res.products.map((product) => ({ ...product, key: product.id })));

      setLoading(false)
    })
  }, [])
  return (
    <Space direction="vertical" size={20}>

      <Typography.Text>RecentOrders</Typography.Text>
      <Table dataSource={dataSource} columns={columns} loading={loading} pagination={false} />


    </Space>


  )
}
const DashboardChart = () => {
  const [revenueDate, setRevenueDate] = useState({
    labels: [],
    datasets: []
  })

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Ordes Revenues',
      },
    },
  };

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res?.carts?.map((cart) => {
        return `User-${cart.userId
          }`
      })
      const data = res?.carts?.map((cart) => {

        return cart.discountedTotal;

      })
      const dataSource = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: data,
            backgroundColor: 'rgba(255, 0, 0)',
          }
        ],
      };
      setRevenueDate(dataSource)

    })

  }, [])

  return (
    <Card style={{ width: 500, height: 350 }}>
      <Bar options={options} data={revenueDate} />
    </Card>
  )
}
export default Dashboard;
