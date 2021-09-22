import React from "react";
import "./estilo.css";

function CardNota({ ...props }) {
  const finalizarNota = (idNota) => {
    props.finalizarNota(idNota);
  };
  if (props.status) {
    return (
      <section className="card-nota concluido">
        <header className="card-nota__cabecalho">
          <h4>{props.titulo}</h4>
          <input
            type="checkbox"
            className="card-nota__cabecalho__toggle"
            onClick={() => finalizarNota(props.id)}
          />
        </header>
        <p className="card-nota__nota">{props.conteudo}</p>
      </section>
    );
  }
  return (
    <section className="card-nota">
      <header className="card-nota__cabecalho">
        <h4>{props.titulo}</h4>
        <input
          type="checkbox"
          className="card-nota__cabecalho__toggle"
          onClick={() => finalizarNota(props.id)}
        />
      </header>
      <p className="card-nota__nota">{props.conteudo}</p>
    </section>
  );
}

export default CardNota;
