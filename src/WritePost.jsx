import React, { useState } from "react";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from "./styledComponent";
import WriteTitle from "./WriteTitle";
import InputPost from "./InputPost";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubmitComponent = React.memo(({ onSubmit }) => {
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>;
});

const WritePost = ({ apiUrl }) => {
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });

  const { title, contents } = inputs;

  // ... 기본 input 값 복사 후 적용
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    axios
      .post(`${apiUrl}/posts/`, {
        title: inputs.title,
        contents: inputs.contents,
        repls: [],
      })
      .then(() => {
        navigate(..."/");
      });
  };

  return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost onChange={onChange}>
          title={title} contents={contents}
        </InputPost>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
      <SubmitComponent onSubmit={onSubmit} />
    </PostSection>
  );
};

export default WritePost;
