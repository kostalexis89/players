import React from "react";

export default function Player(props) {
  // const [score, setScore] = useState(0);
  const { player, setGame } = props;

  const handleMinus = () => {
    setGame ((cur)=>
      cur.map((item) => {
          return item.name === player.name? {name:item.name, score:item.score-1}: item;
      })
  ); 
  };

  const handlePlus = () => {
    setGame ((cur)=>
    cur.map((item) => {
        return item.name === player.name? {name:item.name, score:item.score+1}: item;
    })
); 
  };

  const handleresetScore = () => {
    setGame ((cur)=>
    cur.map((item) => {
        return item.name === player.name? {name:item.name, score:0}: item;
    })
); 
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{player.name}</p>
      <div onClick={handlePlus}>+</div>
      <div onClick={handleMinus}>-</div>
      <div>{player.score}</div>
      <div onClick={handleresetScore}>Reset score</div>
    </div>
  );
}
