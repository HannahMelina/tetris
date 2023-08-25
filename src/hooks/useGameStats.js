import { useState, useCallback } from "react";

const buildGameStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());
  const addLinesCleard = useCallback(() => {}, []);
  return [gameStats, addLinesCleard];
};

export default useGameStats;
