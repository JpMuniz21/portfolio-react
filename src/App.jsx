import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Experiencia from "./components/Experiencia";

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <main>
        <Hero />
        <Projetos />
        <Experiencia />
        
      </main>
      <Contato />
    </div>
  );
}

export default App;