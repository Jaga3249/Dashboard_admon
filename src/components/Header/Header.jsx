import React from "react";

import { Badge, Space, Typography } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWKIja6-HPRPnRLGd3Dn7vN4qclEMfmO52thNpi1CAg&s"
        alt=""
       style={{width:60,cursor: "pointer",backgroundColor:"white"}}
      />
      <Typography.Title>Admin Dasboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24, cursor: "pointer" }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24, cursor: "pointer" }} />
        </Badge>
      </Space>
    </div>
  );
};

export default Header;
