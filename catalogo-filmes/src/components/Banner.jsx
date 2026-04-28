function Banner() {
  return (
    <div className="banner">
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&auto=format&fit=crop"
        alt="Cinema"
        className="banner__img"
      />
      <div className="banner__overlay">
        <h1 className="banner__title">Meu Catálogo de Filmes</h1>
        <p className="banner__subtitle">Adicione e gerencie seus filmes favoritos</p>
      </div>
    </div>
  );
}

export default Banner;
