import { useState, useEffect } from "react";
import StatusBar from "./components/StatusBar";
import Footer from "./components/Footer";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Interestelar", genre: "Ficção Científica" },
    { id: 2, title: "O Poderoso Chefão", genre: "Drama" },
  ]);

  useEffect(() => {
    console.log("🎬 Catálogo de Filmes carregado!");
    console.log(`Total de filmes: ${movies.length}`);
  }, [movies]);

  function handleAddMovie(movie) {
    setMovies((prev) => [...prev, { ...movie, id: Date.now() }]);
  }

  return (
    <div className="app">
      <StatusBar message="🎬 Catálogo de Filmes" />
      <main className="main">
        <Banner />
        <MovieForm onAdd={handleAddMovie} />
        <MovieList movies={movies} />
      </main>
      <Footer author="Rebeca Scutare" year={2025} />
    </div>
  );
}

export default App;
