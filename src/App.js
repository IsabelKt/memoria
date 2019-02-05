import React, { Component } from "react";
import MemoryGame from "./components/MemoryGame";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Counter from"./components/Counter/Counter"; 

function App (){
    return (
      <Wrapper>
        <Title>Memory Game</Title>
          <MemoryGame />
        <Counter />
      </Wrapper>
    )
}

export default App;
