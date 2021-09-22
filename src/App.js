import React, { useState } from "react";
import "../src/assets/App.css";
import FormularioNotas from "./components/formularioNotas/formularioNotas.js";
import ListaNotas from "./components/listaNotas/listaNotas";
function App() {
  const [notas, setNotas] = useState([]);
  const criarNota = async (titulo, conteudo) => {
    const novaNota = await {
      titulo: titulo,
      conteudo: conteudo,
      status: false,
    };
    setNotas([...notas, novaNota]);
    console.log(notas);
    console.log(`Nova nota ${titulo} conteudo ${conteudo}`);
  };
  const finalizarNota = async (idNota) => {
    const notasAlteradas = await notas.map((item, index) => {
      if (idNota === index) {
        item.status = !item.status;
      }
      return item;
    });
    console.log(notasAlteradas);
    setNotas([...notasAlteradas]);
  };

  return (
    <div>
      <FormularioNotas criarNota={criarNota} />
      <ListaNotas notas={notas} finalizarNota={finalizarNota} />
    </div>
  );
}

export default App;
