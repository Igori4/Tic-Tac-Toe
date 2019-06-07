import React from 'react'

function Cell (props) {
    const {value, onClick} = props;
    return (
        <div className="board-cell" 
          data-value={value}
          onClick = {onClick}>
            {value}
        </div>
    ) 
}

export default Cell;