import React from "react";
import { LoadingDiv, LoadingImg } from "./styledComponent";
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

function ShowPostList({ isPost, loading, addPost, postList }) {
  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <FontAwesomeIcon icon={faPenToSquare} />
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>아직 글이 없습니다</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  replCount={element.replCount}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default ShowPostList;
