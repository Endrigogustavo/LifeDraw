import React, { useState } from 'react';

function CadastroImagem() {
  const [imagem, setImagem] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('imagem', imagem);

    try {
      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.text();
      console.log(data); // Exibe a resposta do servidor no console
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
    }
  };

  return (
    <div>
      <h1>Cadastrar Nova Imagem</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Upload da Imagem:
          <input type="file" onChange={(e) => setImagem(e.target.files[0])} />
        </label>
        <button type="submit">Cadastrar Imagem</button>
      </form>
    </div>
  );
}

export default CadastroImagem;
