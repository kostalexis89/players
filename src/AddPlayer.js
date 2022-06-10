import React, { useState } from "react";

const AddPlayer = (props) => {
  const { setGame } = props;

  const [newPlayerName, setNewPlayerName] = useState("");



  const handleNewPlayer = (e) => {
    setNewPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGame((cur) => [
      ...cur,
      {
        id:cur.length,
        name: newPlayerName,
        score: 0,
      },
    ])
    setNewPlayerName("")
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

export default React.memo(AddPlayer)