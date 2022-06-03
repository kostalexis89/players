import React, { useState } from "react";

export default function AddPlayer(props) {
  const { setGame } = props;

  const [newPlayerName, setNewPlayerName] = useState("");

  const handleNewPlayer = (e) => {
    setNewPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPlayerList(cur=>[...cur,newPlayer])
    setGame((cur) => [
      ...cur,
      {
        name: newPlayerName,
        score: 0,
      },
    ]);
    setNewPlayerName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newPlayerName}
          onChange={handleNewPlayer}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
