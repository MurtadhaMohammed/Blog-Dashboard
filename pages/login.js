import { Card, Input, Row, Col, Button } from "antd";

const Login = () => {
  return (
    <div className="login-page">
      <Card style={{ width: 400 }}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Input placeholder="Email" />
          </Col>
          <Col span={24}>
            <Input.Password placeholder="Password" />
          </Col>
          <Col span={24}>
            <Button type="primary" block>Login</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
