import React, { useEffect, useState } from "react";
import AddPlayer from "./AddPlayer";
import Players from "./Players";

export default function Game() {
  // const [playerList, setPlayerList] = useState([]);

  const [game, setGame] = useState([]);

  useEffect(() => {
    //ananewnoume to local storage
    localStorage.setItem("game", game);
  }, [game]);

  // useEffect(()=>{
  //   if(localstorage!==empty){
  //     setPlayer(locastorage)
  //   }
  // },[])

  useEffect(() => {
    if (localStorage.getItem("game").length !== 0) {
      setGame(localStorage.getItem("game"));
    }
  }, []);

  const handleResetGame = () => {
    setGame([]);
  };

  const handleResetAllScore = () => {
    setGame((cur) =>
      cur.map((item) => {
        return { name: item.name, score: 0 };
      })
    );
  };

  return (
    <>
      {game.length > 0 && <Players setGame={setGame} game={game} />}
      <AddPlayer setGame={setGame} />
      {game.length > 0 && (
        <>
          <div onClick={handleResetAllScore}>Reset All Score</div>
          <div onClick={handleResetGame}>Reset Game</div>
        </>
      )}
    </>
  );
}
