import React from "react";
import "./App.css";
import Board from "./Board";
import getWinner from "./utils";

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      cells: Array(9).fill(null),
      stepCounter: 1,
      whoNext: "X",
      winner: null
    };
  }

  hendlerCells = index => {
    let { cells, whoNext, stepCounter, winner } = this.state;
    cells = [...cells];
    if (cells[index] || winner) {
      return;
    }
    cells[index] = whoNext;
    whoNext = whoNext === "X" ? "0" : "X";
    stepCounter = stepCounter + 1;
    winner = getWinner(cells);
    this.setState({
      cells,
      whoNext,
      stepCounter,
      winner
    });
  };

  restartGame = () => {
    this.setState({
      cells: Array(9).fill(null),
      stepCounter: 1,
      whoNext: "X",
      winner: null
    });
  };

  wichPlayerIs(whoNext) {
    return whoNext === "X" ? "X" : "0";
  }

  render() {
    const { cells, winner, whoNext, stepCounter } = this.state;
    let gameStatus;
    if (winner) {
      gameStatus = `Player ${winner} wins!`;
    } else if (stepCounter === 10) {
      gameStatus = "It is A DRAW!";
    } else {
      gameStatus = `Player ${whoNext} your turn!`;
    }
    return (
      <div className="wraper">
        <div className="Game">
          <h1>TIC TAC TOE</h1>
          <h3>{gameStatus}</h3>
          <Board
            restartGame={this.restartGame}
            cells={cells}
            onClick={this.hendlerCells}
            winner={winner}
            stepCounter={stepCounter}
          />
        </div>
      </div>
    );
  }
}

export default Game;
