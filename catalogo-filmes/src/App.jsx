import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot, orderBy, query, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";

import StatusBar from "./components/StatusBar";
import Footer from "./components/Footer";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Banner from "./components/Banner";
import AuthForm from "./components/AuthForm";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [authReady, setAuthReady] = useState(false);

  // Observa estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
      console.log(currentUser ? `✅ Logado: ${currentUser.email}` : "🔒 Não autenticado");
    });
    return () => unsubscribe();
  }, []);

  // Busca filmes do Firestore em tempo real
  useEffect(() => {
    if (!user) return;

    console.log("🎬 Carregando filmes do Firestore...");
    const q = query(collection(db, "filmes"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMovies(data);
      console.log(`📋 Total de filmes: ${data.length}`);
    });

    return () => unsubscribe();
  }, [user]);

  // Adiciona filme no Firestore
  async function handleAddMovie({ title, genre }) {
    try {
      await addDoc(collection(db, "filmes"), {
        title,
        genre,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
      console.log("✅ Filme adicionado!");
    } catch (error) {
      console.error("❌ Erro ao adicionar filme:", error);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    setMovies([]);
  }

  if (!authReady) {
    return (
      <div className="app">
        <StatusBar message="🎬 Catálogo de Filmes" />
        <p style={{ textAlign: "center", marginTop: "3rem", color: "#888" }}>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <StatusBar message="🎬 Catálogo de Filmes" />

      {!user ? (
        <AuthForm />
      ) : (
        <main className="main">
          <Banner />

          <div className="user-bar">
            <span className="user-bar__email">👤 {user.email}</span>
            <button className="user-bar__logout" onClick={handleLogout}>
              Sair
            </button>
          </div>

          <MovieForm onAdd={handleAddMovie} user={user} />
          <MovieList movies={movies} />
        </main>
      )}

      <Footer author="Rebeca" year={2026} />
    </div>
  );
}

export default App;