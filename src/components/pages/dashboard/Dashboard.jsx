import { Card, Space, Statistic, Typography } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import { DollarOutlined } from "@ant-design/icons";
import { ShopOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={4} style={{ fontWeight: "bold" }}>
        Dashboard
      </Typography.Title>
      <Space>
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
          value={1234}
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
          value={1234}
        />
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
          value={1234}
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
          value={1234}
        />
      </Space>
    </div>
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

export default Dashboard;
