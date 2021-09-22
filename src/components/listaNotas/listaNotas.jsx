import React from "react";
import CardNota from "../cardNota/cardNota";
import "./estilos.css";

function ListaNotas({ ...props }) {
  const finalizarNota = (idNota) => {
    props.finalizarNota(idNota);
  };
  return (
    <ul className="lista-notas">
      {props.notas.map((item, index) => {
        return (
          <li className="lista-notas__item" key={index}>
            <CardNota
              titulo={item.titulo}
              conteudo={item.conteudo}
              id={index}
              status={item.status}
              finalizarNota={finalizarNota}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ListaNotas;
