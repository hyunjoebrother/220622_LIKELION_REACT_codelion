import React from "react";
import { 
  PagenumberDiv,
  PagingSection,
  PostLink,
  PostListDiv,
  PostRepl,
  PostSection,
  PostTitle,
  PostTitleDiv } from "./styledComponent";

function ShowPostList() {
  return (
    <PostSection>
              <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} />
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
                    <EachPostLi>
                      <div>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <PostLink>서강확보, 시사 N 대학기자상 취재</PostLink>
                      </div>
                      <PostRepl>[35]</PostRepl>
                    </EachPostLi>
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
  );
}

export default ShowPostList;
