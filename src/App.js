import React, { useState } from "react";
import { Content } from "./components/Content.js";
import styled, {ThemeProvider} from "styled-components";
import { useDarkMode } from "./styles/useDarkMode.js";
import { Toggle } from "./components/toggle.js";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles.js";



const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {

  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme: darkTheme;

  
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <Content/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
