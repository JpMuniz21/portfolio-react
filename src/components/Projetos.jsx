import { motion } from "framer-motion";

export default function Projetos() {
  const listaProjetos = [
  { nome: "Swapiffy", desc: "Plataforma Web focada em economia colaborativa. Implementação de lógica de matching e regras de negócio para intercâmbio de serviços.", ano: "2026" }, 
  { nome: "Desenrola", desc: "Aluguel de itens de nicho. Modelagem SQL para gestão de inventário e fluxos de navegação focados em usabilidade projetados no Figma.", ano: "2026" }, 
  { nome: "Código em Vídeo", desc: "Aplicação Front-End em React desenvolvida para a disciplina de Desenvolvimento de Plataformas Web, demonstrando arquitetura de software.", ano: "2026" }, 
  { nome: "Tempo Agora", desc: "Interface web consumindo API externa para exibição de dados meteorológicos em tempo real via JavaScript Assíncrono.", ano: "2026" }, 
  { nome: "SynapseLab (UNIFOR)", desc: "Grupo de pesquisa focado em modelagem de dados orientados a grafos, consultas complexas com Cypher e análise de conexões de redes.", ano: "2025" }, 
  { nome: "REVISAI - Biblioteca", desc: "Mapeamento, levantamento de requisitos e gestão de fluxo de trabalho (Trello) para equipe de 7 integrantes em sistema de correção de TCCs.", ano: "2025" }, 
  { nome: "Deploy em Nuvem AWS", desc: "Criação e deploy de protótipo de website utilizando AWS EC2, com foco em infraestrutura escalável e Cloud Computing.", ano: "2025" } 
];

  return (
    <>
      <motion.section 
        id="conhecimentos"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>/* Conhecimentos */</h2>
        <ul>
          <li>Desenvolvimento Java & Programação Orientada a Objetos</li>
          <li>Conhecimentos básicos em Pyhton</li>
          <li>Modelagem de Dados em Grafos (Neo4j)</li>
          <li>Prototipagem em Figma e Excalidraw</li>
          <li>Cloud Computing (AWS EC2)</li>
          <li>Modelagem de site em HTML, CSS e JavaScript</li>
        </ul>
      </motion.section>

      <motion.section 
        id="projetos"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2>/* Projetos */</h2>
        <table>
          <thead>
            <tr>
              <th>Nome do projeto</th>
              <th>Descrição</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {listaProjetos.map((proj, index) => (
              <motion.tr 
                key={index}
                whileHover={{ scale: 1.01, x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <td>{proj.nome}</td>
                <td>{proj.desc}</td>
                <td>{proj.ano}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.section>
    </>
  );
}