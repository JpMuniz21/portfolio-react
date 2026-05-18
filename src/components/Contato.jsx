import { motion } from "framer-motion";

export default function Contato() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <motion.section 
        id="contatos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>/* Contato */</motion.h2>
        
        <div className="links-contato">
          {/* Adicionados os ícones do Font Awesome dentro de cada link */}
          <motion.a variants={itemVariants} href="mailto:munizjoaopaulo21@gmail.com">
            <i className="fa-solid fa-envelope" style={{ marginRight: "8px" }}></i> Email
          </motion.a>
          
          <motion.a variants={itemVariants} href="https://linkedin.com/in/jpmunizm" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin" style={{ marginRight: "8px" }}></i> LinkedIn
          </motion.a>
          
          <motion.a variants={itemVariants} href="https://github.com/JpMuniz21" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" style={{ marginRight: "8px" }}></i> GitHub
          </motion.a>
        </div>
      </motion.section>

      <footer>
        <p>&copy; 2026 - João Paulo Muniz Mesquita. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}