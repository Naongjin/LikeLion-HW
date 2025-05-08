import Weact from "react";
//import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as W from "../styles/styledWrite";

const Write = ({ dataList }) => {
  const navigate = useNavigate();
  //const { postId } = useParams();

  const goBack = () => {
    navigate(`/`);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const Print = () => {
    console.log("제목: " + title);
    console.log("내용: " + content);
  };

  return (
    <W.Container>
      <W.Box>
        <W.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="back"
            width="30px"
          />
        </W.BackBtn>
        <W.Content>
          <W.Title
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해 주세요"
          ></W.Title>
          <W.ContentBox>
            <W.Date>2025.04.10</W.Date>
            <W.letterContent
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용 입력"
            ></W.letterContent>
          </W.ContentBox>
          <W.WriteBtn onClick={Print}>작성하기</W.WriteBtn>
        </W.Content>
      </W.Box>
    </W.Container>
  );
};

export default Write;
