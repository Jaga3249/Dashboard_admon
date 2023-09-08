import { Menu } from "antd";
import React from "react";
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          { label: "Dashboard", key: "/", icon: <AppstoreOutlined /> },
          { label: "Inventory", key: "/inventory", icon: <ShopOutlined /> },
          { label: "Orders", key: "/orders", icon: <ShoppingCartOutlined /> },
          { label: "Customers", key: "/customers", icon: <UserAddOutlined /> },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
