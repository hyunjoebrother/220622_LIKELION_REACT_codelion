import React from "react";
import { EachPostLi, PostLink, PostRepl } from "./styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

function EachPost({ title, replCount }) {
  return (
    <EachPostLi>
      <div>
        <FontAwesomeIcon icon={faLocationPin} />
        <PostLink>{title}</PostLink>
      </div>
      <PostRepl>{replCount}</PostRepl>
    </EachPostLi>
  );
}

export default EachPost;
