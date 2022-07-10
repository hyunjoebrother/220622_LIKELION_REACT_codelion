import React from "react";
import { PostTitle, PostTitleDiv } from "./styledComponent";

function WriteTitle() {
  return (
    <PostTitleDiv>
      <PostTitle>글쓰기</PostTitle>
    </PostTitleDiv>
  );
}

export default React.memo(WriteTitle);
