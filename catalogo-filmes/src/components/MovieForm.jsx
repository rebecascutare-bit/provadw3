import { useState } from "react";

function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !genre.trim()) return;
    onAdd({ title: title.trim(), genre: genre.trim() });
    setTitle("");
    setGenre("");
  }

  return (
    <section className="form-section">
      <h2 className="form-section__heading">Adicionar Filme</h2>
      <form className="movie-form" onSubmit={handleSubmit}>
        <input
          className="movie-form__input"
          type="text"
          placeholder="Título do filme"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="movie-form__input"
          type="text"
          placeholder="Gênero (ex: Ação, Drama...)"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button className="movie-form__btn" type="submit">
          ＋ Adicionar
        </button>
      </form>
    </section>
  );
}

export default MovieForm;
