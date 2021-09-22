import React, { useState } from "react";
import "./estilos.css";
function FormularioNotas({ ...props }) {
  const [titulo, setTitulo] = useState(null);
  const [conteudo, setConteudo] = useState(null);

  const criarNota = async (event) => {
    event.preventDefault();
    await props.criarNota(titulo, conteudo);
    clearForm();
  };
  const clearForm = () => {
    //setTitulo(null);
    //setConteudo(null);
    console.log("Chamou");
  };
  return (
    <form className="form-cadastro" onSubmit={(event) => criarNota(event)}>
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={(text) => setTitulo(text.target.value)}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={(text) => setConteudo(text.target.value)}
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
    </form>
  );
}

export default FormularioNotas;
