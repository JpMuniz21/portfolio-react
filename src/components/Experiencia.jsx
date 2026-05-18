import { motion } from "framer-motion";

export default function Experiencia() {
  return (
    <motion.section 
      id="experiencia"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ borderTop: "1px solid #44475a", paddingTop: "60px" }}
    >
      <h2>/* Experiência Profissional */</h2> 
      
      <div style={{ backgroundColor: "rgba(68, 71, 90, 0.4)", padding: "25px", borderRadius: "12px", border: "1px solid #6272a4" }}>
        {/* Corrigido para "space-between" para empurrar a data para o canto direito! */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "15px" }}>
          <h3 style={{ color: "#bd93f9" }}>Assistente de Operações e Suporte Digital</h3> 
          <span style={{ color: "#6272a4", fontStyle: "italic" }}>2025 - Presente | Restaurante O Paulo</span> 
        </div>
        
        {/* Mudado para "none" para evitar erros no React, jogando o ✔ direto nas linhas abaixo */}
        <ul style={{ listStyleType: "none", paddingLeft: "5px", color: "#f8f8f2" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>✔ Digitalização Financeira:</strong> Condução da transição de processos manuais para digitais, gerenciando pagamentos e fluxo de caixa via plataformas bancárias.
          </li>
          <li>
            <strong>✔ Otimização de Processos:</strong> Implementação de rotinas digitais operacionais que reduziram expressivamente o tempo gasto em tarefas administrativas diárias.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}