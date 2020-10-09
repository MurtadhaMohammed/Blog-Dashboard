import { Typography, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export const PureHeader = () =>{

    return (
        <header>
        <div className="container">
          <div className="content">
            <Title style={{ color: "#fff" }} level={3}>
              Dashboard
            </Title>
            <div className="user-account">
              <Text style={{ color: "#fff", marginRight: 8 }}>murtadha006</Text>
              <Popover
                content={
                  <div>
                    <Text>Change password</Text>
                    <br />
                    <Text>Sign Out</Text>
                  </div>
                }
              >
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Popover>
            </div>
          </div>
        </div>
      </header>
    )
}
