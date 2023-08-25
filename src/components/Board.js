import "./Board.css";
import BoardCell from "../business/BoardCell";

const Board = ({ board }) => {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    girdTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div className="Board" style={boardStyles}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
};

export default Board;
