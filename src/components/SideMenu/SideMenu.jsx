

import React, { useState } from 'react';
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  // ContainerOutlined,
  // DesktopOutlined,
  // MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  // PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Dashboard', '/', <AppstoreOutlined />),
  getItem('Inventory', '/inventory', <ShopOutlined />),
  getItem('Order', '/orders', <ShoppingCartOutlined />),
  getItem('Customers', '/customers', <UserAddOutlined />),


];
const SideMenu = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 260,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}

      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['/']}
         mode="inline"
        
        inlineCollapsed={collapsed}
        items={items}
        onClick={(items) => navigate(items.key)}

      />
    </div>
  );
};
export default SideMenu;