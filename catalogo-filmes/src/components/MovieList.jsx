function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="movie-list__empty">Nenhum filme adicionado ainda.</p>;
  }

  return (
    <section className="movie-list-section">
      <h2 className="form-section__heading">Filmes ({movies.length})</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <span className="movie-card__title">{movie.title}</span>
            <span className="movie-card__genre">{movie.genre}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
