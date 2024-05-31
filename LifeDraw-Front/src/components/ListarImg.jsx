import React, { useState, useEffect } from 'react';

function ListaImagens() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    async function fetchImagens() {
      try {
        const response = await fetch('http://localhost:8080/imagens');
        const data = await response.json();
        setImagens(data);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    }
    fetchImagens();
  }, []);

  return (
    <div>
      <h1>Lista de Imagens</h1>
      <div className="imagem-lista">
        {imagens.map((imagem, index) => (
          <div key={index} className="imagem-item">
            <p>{imagem.id}</p>
            <img src={`../../../LifeDraw-Back/uploads/${imagem.caminho}`} alt={imagem.nome} />
            <p>{imagem.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaImagens;
