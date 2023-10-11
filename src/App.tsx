import React, { useState } from 'react';

import './App.css';
import Box from './components/Box';

import rockImg from './components/stone.jpg';
import paperImg from './components/paper.png';
import scissorsImg from './components/scissors.jpg';

import { Choice, SelectInfo, ChoiceKeys } from './model/rock';

const choice: Choice = {
  rock:{
    name: 'rock',
    img:  rockImg,
  },
  paper:{
    name: 'paper',
    img:  paperImg,
  },
  scissors:{
    name: 'scissors',
    img:  scissorsImg,
  }
}

const App:React.FC = () => {
  const [userSelection, setUserSelection] = useState<SelectInfo | null>(null) // 유저의 가위바위보 선택
  const [computerSelction, setComputerSelction] = useState<SelectInfo | null>(null)  // 컴퓨터의 가위바위보 선택
  const [winOrLose, setWinOrLose] = useState<string | null>(null) //
  
  const play = (userChoice:ChoiceKeys) => { 
    setUserSelection(choice[userChoice])
    const computerChoice = randomPick() 
    setComputerSelction(choice[computerChoice])
    const userResult = judgement(choice[userChoice], choice[computerChoice])
    setWinOrLose(userResult)
  }

  const randomPick = ():ChoiceKeys => {
    let arr = Object.keys(choice) as ChoiceKeys[]
    let resultIdx = Math.floor(Math.random() * arr.length)
    let final = arr[resultIdx]
    
    return final
  }
  const judgement = (user:SelectInfo, computer:SelectInfo):string => {
    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "rock") return computer.name==="scissors" ? "win": "lose"
    else if (user.name === "scissors") return computer.name==="paper" ? "win": "lose"
    else if (user.name === "paper") return computer.name==="rock" ? "win": "lose"
    else return "error";
  }

  return (
    <div >
      <div className='boxContainer'>
        <Box title="You" item={userSelection} result={winOrLose}/>
        <Box title="Com" item={computerSelction} result={
          winOrLose === null? null : (winOrLose === "tie") ? "tie" : (winOrLose === "win") ? "lose":"win"}/>
      </div>
      <div className='buttonContiner'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
      
    </div>
  );
}

export default App;
