import { motion } from "framer-motion";
import fotoPerfil from "../assets/foto-github.jpg"; 

export default function Hero() {
  return (
    <section id="sobre" style={{ paddingTop: "140px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "40px", 
          flexWrap: "wrap-reverse" 
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2>/* Sobre mim */</h2>
          <p>
            Estudante do 3º semestre de <strong>Análise e Desenvolvimento de Sistemas na UNIFOR</strong>. 
            Sou desenvolvedor de software focado em construir soluções eficientes, unindo lógica sólida em <strong>Java</strong> e <strong>JavaScript</strong> com o ecossistema do <strong>React</strong>.
          </p>
          <br />
          <p>
            Tenho vivência prática em modelagem de dados (SQL e Bancos Orientados a Grafos com <strong>Neo4j</strong>), 
            além de experiência no ecossistema de nuvem (<strong>AWS EC2</strong>), conhecimentos básicos em (<strong>Python</strong>), e prototipagem de interfaces (UI/UX) no <strong>Figma</strong>. 
            Possuo <strong>Inglês Fluente</strong>, o que me permite atuar em documentações globais e ambientes técnicos avançados.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ 
            margin: "0 auto",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img 
            src={fotoPerfil} 
            alt="João Paulo Muniz" 
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%", 
              objectFit: "cover", 
              objectPosition: "center 100%", 
              border: "3px solid #bd93f9", 
              boxShadow: "0 0 20px rgba(189, 147, 249, 0.4)", 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}