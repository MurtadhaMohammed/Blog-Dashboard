import { PureHeader } from "../../components/main";
import { Input, Button, Card } from "antd";
//import ReactQuill from "react-quill";
import { useState } from "react";



const Create = () => {
  const [text, setText] = useState("");

  var ReactQuill;
  if (typeof window !== "undefined") {
    ReactQuill = require("react-quill");
  }

  return (
    <div className="create-page">
      <PureHeader />
      <main className="container">
        <div className="search-box">
          <Input
            style={{ width: 300 }}
            placeholder="https://example/image.png"
          />
          <Button type="primary">Save</Button>
        </div>
        <Input.TextArea
          rows={4}
          style={{ marginTop: 20 }}
          placeholder="Short Description . . ."
        />

        <Card
          style={{ marginTop: 20 }}
          title={
            <input
              className="input-title"
              placeholder="Write Blog title . . ."
            />
          }
        >
          {ReactQuill && (
            <ReactQuill theme="bubble" value={text} onChange={(value) => setText(value)} />
          )}
        </Card>
      </main>
    </div>
  );
};

export default Create;
