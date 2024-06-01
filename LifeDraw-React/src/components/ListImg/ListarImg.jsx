import React, { useState, useEffect } from 'react';
import './ListImg.css'
//https://www.cssportal.com/css-grid-generator/

function ListaImagens() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    async function fetchImagens() {
      try {
        const response = await fetch('http://localhost:8080/images');
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

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      
      <h1>Lista de Imagens</h1>
      <hr className="star-primary"></hr>
      <div id="cssportal-grid">

        {imagens.map((imagem, index) => (
          <div className="imagem-lista">

            <div key={index} className="imagem-item">
              <p className='id'>{imagem.id}</p>
              <div class="card-list">
                <img src={`http://localhost:8080` + imagem.caminho} alt={imagem.nome} />
                <div class="card-content">
                  <h2>
                    {imagem.nome}
                  </h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="#" class="button-list">
                    Find out more
                    <span class="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaImagens;
