import { PureHeader } from "../components/main";
import { PureCard } from "../components/home";
import { Input, Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <div className="home-page">
      <PureHeader />
      <main className="container">
        <div className="search-box">
          <Input.Search
            style={{ width: 300 }}
            placeholder="Search for something..."
          />
          <Button type="primary" icon={<PlusOutlined />}>
            New Article
          </Button>
        </div>
        <Row gutter={[30, 30]} style={{ marginTop: 30 }}>
          <Col md={8} sm={12} xs={24}>
            <PureCard />
          </Col>
          <Col md={8} sm={12} xs={24}>
            <PureCard />
          </Col>
          <Col md={8} sm={12} xs={24}>
            <PureCard />
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default Home;
