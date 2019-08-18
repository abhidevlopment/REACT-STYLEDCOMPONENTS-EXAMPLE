import React from "react";

import styled, { ThemeProvider } from "styled-components";
import "./App.css";
//global stylying
const theme = {
  primary: "teal",
  secondary: "green"
};

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  /* background: red; */
  /* background:${props => (props.primary ? "red" : "green")} */
  background:${props => props.theme.primary};
  color: #fff;
  //psudo class
  &:hover {
    background: blue;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>styled components</h1>
        <form action="">
          <input type="text" />
          &nbsp;
          <Button> CREATE</Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
