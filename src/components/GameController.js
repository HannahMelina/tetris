import "./GameController.css";
import Board from "./Board";
import GameStats from "./GameStats";
import { Action, actionForKey, actionIsDrop } from "../business/Input";
import { playerController } from "../business/PlayerController";
import { useRef } from "react";
import { useInterval } from "../hooks/useInterval.js";
import { useDropTime } from "../hooks/useDropTime.js";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats,
  });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const inputRef = useRef(null);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      handleInput({ action });
    }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  const reSetFocus = () => {
    inputRef.current.focus();
  };

  return (
    <input
      className="GameController"
      type="text"
      ref={inputRef}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onBlur={reSetFocus}
      autoFocus
    />
  );
};

export default GameController;
