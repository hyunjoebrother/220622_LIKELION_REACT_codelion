import React, { useState, useEffect, useCallback } from "react";
import { CursorDiv, LoadingDiv, LoadingImg } from "./styledComponent";
import {
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
} from "./styledComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import loadingIcon from "./loading.svg";
import EachPost from "./EachPost";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const initialPostList = [
//   { id: 1, title: "시사N, 대학기자상 취재" },
//   { id: 2, title: "학보, 시사N, 대학기자상 취재" },
//   { id: 3, title: "학보, 시사N, 대학기자상 취재" },
// ];

const ShowPostList = ({ apiUrl }) => {
  //const loading = true;
  //const isPost = false;
  const [loading, setLoading] = useState(true);
  //const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  // useCallback 추가
  // const addPost = useCallback(() => {
  //   // ... 앞에 있는 postList 이후에 추가되도록
  //   setPostList((postList) => [
  //     ...postList,
  //     { id: 4, title: "학보, 시사N, 대학기자상 취재" },
  //   ]);
  // }, [postList]);

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/write");
  };

  const getPostList = useCallback(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setPostList(initialPostList);
    //   setLoading(false);
    // }, 600);
    axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then((response) => {
      console.log(response.data);
      const lastPage = Math.ceil(response.data.count / 10);
      const tempPages = [];
      for (let i = 1; i <= lastPage; i++) {
        tempPages.push(i);
      }
      setPages(tempPages); // 페이지 갯수 계산 후 업데이트

      //setPostList(initialPostList);
      setPostList(response.data.results);
      setLoading(false);
    });
  });

  useEffect(getPostList, [page]);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={getPostList} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : postList.length === 0 ? (
            <LoadingDiv>아직 글이 없습니다</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  postID={element.id}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        {pages.map((pageNum) => (
          <PagenumberDiv key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </PagenumberDiv>
        ))}
        <PagenumberDiv
          onClick={() => {
            if (pages.length > page) {
              setPage(page + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
};

export default ShowPostList;
