import { Main, MediaDiv } from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import Footer from "./Footer";
import ShowPostList from "./ShowPostList";

function App() {
  const initialPostList = [
    { id: 1, title: "시사N, 대학기자상 취재", replCount: 1 },
    { id: 2, title: "학보, 시사N, 대학기자상 취재", replCount: 43 },
    { id: 3, title: "학보, 시사N, 대학기자상 취재", replCount: 2 },
  ];

  const [darkMode, setDarkMode] = useState(true);
  //const loading = true;
  //const isPost = false;
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  // ... 앞에 있는 postList 이후에 추가되도록
  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "학보, 시사N, 대학기자상 취재", replCount: 21 },
    ]);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
