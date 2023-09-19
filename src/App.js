import { useEffect, useState } from "react";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = res.json();

    setLoadMore(data.next);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container"></div>
        <button className="load-more">Load more</button>
      </div>
    </div>
  );
}

export default App;
