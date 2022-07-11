import { Main, MediaDiv } from "./styledComponent";
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import Footer from "./Footer";
import ShowPostList from "./ShowPostList";

import { Routes, Route } from "react-router-dom";
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";

const API_URL = "https://reactapitest.pythonanywhere.com/api/";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <Routes>
              <Route
                exact
                path="/"
                element={<ShowPostList apiUrl={API_URL} />}
              ></Route>
              <Route
                path="/write"
                element={<WritePost apiUrl={API_URL} />}
              ></Route>
              <Route
                path="/post/:postID"
                element={<ShowPost apiUrl={API_URL} />}
              ></Route>
            </Routes>
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
