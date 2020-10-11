import { PureHeader } from "../../components/main";
import { Input, Button, Card, message, Popover } from "antd";
//import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addData , getOneData, editData} from "../../api";

const Create = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();

  useEffect(()=>{
     if(router && router.query){
      getOneData(router.query.id,(err, result)=>{
        if (!result.status) {
          Object.keys(result.errMsg).forEach((key) => {
            message.error(result.errMsg[key]);
          });
        } else {
          setIsEdit(true)
          setText(result.article.text)
          setTitle(result.article.title)
          setImage(result.article.image)
          setDescription(result.article.description)
        }
      })
     }
  },[router])

  var ReactQuill;
  if (typeof window !== "undefined") {
    ReactQuill = require("react-quill");
  }

  const handleNew = () => {
    setLoading(true);
    addData(
      {
        title,
        description,
        image,
        text,
        athor: Number(JSON.parse(localStorage.getItem("blog_user")).id),
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((key) => {
            message.error(result.errMsg[key]);
          });
          setLoading(false);
        } else {
          router.push("/");
        }
      }
    );
  };

  const handleEdit = () =>{
    setLoading(true);
    editData(
      router.query.id,
      {
        title,
        description,
        image,
        text,
        athor: Number(JSON.parse(localStorage.getItem("blog_user")).id),
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((key) => {
            message.error(result.errMsg[key]);
          });
          setLoading(false);
        } else {
          router.push("/");
        }
      }
    );
  }

  return (
    <div className="create-page">
      <PureHeader />

      <main className="container">
        <div className="search-box">
          <Popover content={
            <img src={image && image}/>
          }>
            <Input
              style={{ width: 300 }}
              placeholder="https://example/image.png"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Popover>
          <Button
            loading={loading}
            type="primary"
            onClick={isEdit ? handleEdit : handleNew}
            disabled={title && image && description && text ? false : true}
          >
            Save
          </Button>
        </div>
        <Input.TextArea
          rows={4}
          style={{ marginTop: 20 }}
          placeholder="Short Description . . ."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Card
          style={{ marginTop: 20 }}
          title={
            <input
              className="input-title"
              placeholder="Write Blog title . . ."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          }
        >
          {ReactQuill && (
            <ReactQuill
              style={{ minHeight: 100 }}
              theme="bubble"
              value={text}
              onChange={(value) => setText(value)}
            />
          )}
        </Card>
      </main>
    </div>
  );
};

export default Create;
