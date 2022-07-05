import {
  EachPostLi,
  Footer,
  FooterBig,
  FooterSmall,
  LoadingDiv,
  LoadingImg,
  Main,
  MediaDiv,
} from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
  faArrowsRotate,
  faPenToSquare,
  faLocationPin,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import loadingIcon from "./loading.svg";
import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const loading = true;
  const isPost = false;

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <Main>
            <Slogun />
            <ShowPostList />
          </Main>

          <Footer>
            <FontAwesomeIcon icon={faReact} />
            <FooterBig>for react study</FooterBig>
            <FooterSmall>hyunjoebrother</FooterSmall>
          </Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
