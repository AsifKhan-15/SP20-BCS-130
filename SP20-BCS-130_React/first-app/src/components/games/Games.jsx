import React, { useEffect } from "react";
import axios from "axios";
const Games = () => {
  const [counter, setCounter] = React.useState(5);
  const [games, setGames] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/api/games")
      .then((res) => {
        console.log(res);
        setGames(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <h1>This will show games</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr>
              <td>{game.title}</td>
              <td>{game.description}</td>
              <td>{game.price}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Games;
