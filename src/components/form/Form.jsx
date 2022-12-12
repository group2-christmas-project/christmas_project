import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

function Form() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    id: 0,
    title: "",
    category: "",
    content: "",
    url: "",
  });

  const onSubmitHandler = async () => {
    if (post.category === "") return alert("카테고리를 선택하세요!!!");
    await axios.post(`http://localhost:3001/${post.category}`, post);
    navigate(`/${post.category}`);
  };
  console.log(post);
  return (
    <div className="posting-form-contianer">
      <div className="posting-input-group">
        <div className="posting-title">
          <label>제목</label>
          <input
            type="text"
            onChange={(event) => {
              const { value } = event.target;
              setPost({ ...post, title: value });
            }}
          ></input>
        </div>
        <div className="posting-category">
          <label>카테고리</label>
          <select
            onChange={(event) => {
              const { value } = event.target;
              setPost({ ...post, category: value });
            }}
          >
            {" "}
            <option value="" selected>
              카테고리를 선택해주세요
            </option>
            <option value="family">아이와함께</option>
            <option value="couple">커플</option>
            <option value="single">혼자지만 괜찮아</option>
            <option value="parents">부모님과 함께</option>
          </select>
        </div>
        <div className="posting-content">
          <input
            type="text"
            onChange={(event) => {
              const { value } = event.target;
              setPost({ ...post, content: value });
            }}
          />
        </div>
        <div className="posting-url">
          <label>이미지 url 첨부하기</label>
          <input
            type="url"
            onChange={(event) => {
              const { value } = event.target;
              setPost({ ...post, url: value });
            }}
          />
        </div>
      </div>
      <div className="posting-btn">
        <button onClick={onSubmitHandler}>완료</button>
      </div>
    </div>
  );
}

export default Form;
