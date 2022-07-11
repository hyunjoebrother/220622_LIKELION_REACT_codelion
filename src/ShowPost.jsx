import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  CursorDiv,
  PostRepl,
  PostReplDiv,
  ReplTitleDiv,
  ReplWriter,
  Repl,
  WriterDiv,
  ReplInput,
  ReplSubmitDiv,
} from "./styledComponent";
import axios from "axios";
import { useParams } from "react-router-dom";

const postData = {
  title: `바운스`,
  contents: `아기사자가 돌아서면 두 눈이 마주칠까, 심장이 bounce, bounce 두근 대 들릴까 봐 겁나
  한참을 망설이다 용기를 내 밤새워 준비한 내 개사 들어줘, 처음 본 순간부터 아기사자랑 친해질꺼야 생각했어~~,
  Baby, you're my trampoline You make me bounce Bounde - 아기사자들은 다 귀여워 최고 -
  `,
};

const replData = [
  { id: 2, content: `반가워요!` },
  { id: 3, content: `멋쟁이 사자처럼 최고!` },
];

// 댓글 meo
const PostAndRepl = React.memo(
  ({ post, postLoading, repls, replCount, replLoading }) => {
    return (
      <>
        {" "}
        <PostTitleDiv>
          <PostTitle>{post && post.title}</PostTitle>
        </PostTitleDiv>
        {postLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          <PostReplDiv>{post && post.contents}</PostReplDiv>
        )}
        {/* post contents */}
        <ReplTitleDiv>댓글 {replCount} </ReplTitleDiv>
        {replLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          repls &&
          repls.map((element) => (
            <PostReplDiv key={element}>
              <ReplWriter>익명</ReplWriter>
              <Repl>{element}</Repl>
            </PostReplDiv>
          ))
        )}
      </>
    );
  }
);

const ShowPost = ({ apiUrl }) => {
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);
  const Params = useParams();
  const replInput = useRef();

  useEffect(() => {
    axios.get(`${apiUrl}posts/${Params.postID}`).then((response) => {
      console.log(response);
      setPost(response.data);
      setPostLoading(false);
      setRepls(response.data.repls);
      setReplLoading(false);
      replInput.current.focus();
    });
  }, []);

  //   //useEffect 2개 사용하기
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setPost(postData);
  //       setPostLoading(false);
  //     }, 1000);
  //   });

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setRepls(replData);
  //       setReplLoading(false);
  //     }, 3000);
  //     replInput.current.focus();
  //   });

  //input창 상태관리
  const [repl, setRepl] = useState("");

  const onChange = (e) => {
    setRepl(e.target.value);
  };

  const countRepls = (repls) => {
    console.log("댓글 세는 중...");
    return repls.length;
  };

  //memo hook실습
  const replCount = useMemo(() => countRepls(repls), [repls]);

  const onSubmitRepl = () => {
    axios
      .post(`${apiUrl}repl/`, {
        contents: repl,
        post: Params.postID,
      })
      .then(() => {
        // 새로고침
        window.location.reload();
      });
  };

  if (!Params.postID) {
    return <PostSection>잘못된 접근입니다</PostSection>;
  }

  return (
    <div>
      <PostSection>
        <PostAndRepl
          post={post}
          postLoading={postLoading}
          replCount={replCount}
          replLoading={replLoading}
          repls={repls}
        />
        <WriterDiv>
          <ReplInput onChange={onChange} value={repl} ref={replInput} />
          <ReplSubmitDiv onClick={onSubmitRepl}>
            <span>입력</span>
          </ReplSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
