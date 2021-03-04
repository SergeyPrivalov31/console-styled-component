import React from 'react';
import styled from 'styled-components';
import Flex from './components/Flex';
import Title from "./components/Title";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
`

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>console 03.21 react styledComponent</Title>
      </Flex>
      <Flex direction="column" margin={"10px 0"}>
        <Console />
        <Button color="green" align="flex-end">Отправить</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
