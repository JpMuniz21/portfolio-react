import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1000,
      backgroundColor: scrolled ? "rgba(40, 42, 54, 0.95)" : "#282a36",
      boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",    
      textAlign: "center",
      padding: "15px 0"
    }}>
      <motion.h1 
        className="typing-nome"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        João Paulo Muniz Mesquita
      </motion.h1>
      
      <motion.p 
        className="typing-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Estudante de Análise e Desenvolvimento de Sistemas
      </motion.p>
      
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#conhecimentos">Conhecimentos</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencia">Experiências</a>
        <a href="#contatos">Contatos</a>
      </nav>
    </header>
  );
}