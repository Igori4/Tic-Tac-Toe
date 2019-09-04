import React from "react";
import Cell from "./Cell";
class Board extends React.Component {
  constructor(props) {
    super(props)
  }
  
  renderResetButton(winner, stepCounter) {
    if (winner || stepCounter === 10) {
      return (
        <button className="resetGame" onClick={this.props.restartGame}>
          Restart Game
        </button>
      );
    }
  }
  renderCells() {
    const { cells, onClick } = this.props;
    return cells.map((cell, index) => {
      return (
        <Cell
          value={cell}
          key={"Cell -" + index}
          onClick={() => {
            onClick(index);
          }}
        />
      );
    });
  }

  render() {
    const {winner,stepCounter} = this.props;
    return (
      <div className="board">
        {this.renderCells()} {this.renderResetButton(winner, stepCounter)}
      </div>
    );
  }
}

export default Board;
