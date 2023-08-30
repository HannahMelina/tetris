import { useEffect, useState } from "react";
import { buildBoard } from "../business/baord";
import { nextBoard } from "../business/baord";

const useBoard = ({ rows, columns, player, resetPlayer, addLinesCleared }) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared,
      })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};

export default useBoard;
