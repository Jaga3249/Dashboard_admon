import React from "react";

import { Badge, Space, Typography } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="header">
      <img
        src="https://yt3.ggpht.com/ytc/AOPolaStHISCvwwZ-Ci25pFMOmEp9CHaT7mdMFXEaCKl=s48-c-k-c0x00ffffff-no-rj"
        alt=""
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
