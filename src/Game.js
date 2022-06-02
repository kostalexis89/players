import React, { useState } from "react";
import AddPlayer from "./AddPlayer";
import Players from "./Players";

export default function Game() {
  const [playerList, setPlayerList] = useState([]);

  console.log(playerList);

  const handleResetGame = () =>{
      setPlayerList([])
  }

  return (
    <>
      {playerList.length > 0 && <Players playerList={playerList} />}
      <AddPlayer setPlayerList={setPlayerList} />
      {playerList.length > 0 && <div onClick={handleResetGame}>Reset All</div>}

    </>
  );
}
