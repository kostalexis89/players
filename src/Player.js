import React from "react";

const Player = (props) => {
  const { player, setGame } = props;

  console.log('Hello from player'+player.name)

  const handleMinus = () => {
    setGame((cur) =>
      cur.map((item) => {
        return item.id === player.id
          ? { ...item, score: (item.score>0) ? item.score - 1 : 0 }
          : item;
      })
    );
  };

  const handlePlus = () => {
    setGame((cur) =>
      cur.map((item) => {
        return item.id === player.id
          ? { ...item, score: item.score + 1 }
          : item;
      })
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{player.name}</p>
      <div onClick={handlePlus}>+</div>
      <div onClick={handleMinus}>-</div>
      <div>{player.score}</div>
    </div>
  );
}

export default React.memo(Player)