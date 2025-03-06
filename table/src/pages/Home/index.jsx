import { useState } from "react";
import "./style.css";
import Logo from "./imgs/LogoBeTalent.png";
import Funcionarios from "./Funcionarios";

function Home() {
  const [search, setSearch] = useState(""); // Estado para armazenar o texto de pesquisa

  return (
    <div>
      {/* Cabeçalho com o logo */}
      <header>
        <img src={Logo} className="img" alt="Logo BeTalent" />
      </header>

      {/* Título da página e barra de pesquisa */}
      <div className="title-container">
        <div className="title">
          <h1>Funcionários</h1>
        </div>
        <div className="search-container">
          {/* Campo de pesquisa */}
          <input
            className="search-input"
            placeholder="Pesquisar por nome, cargo ou telefone"
            type="text"
            value={search} // Controla o valor do input com o estado 'search'
            onChange={(e) => setSearch(e.target.value)} // Atualiza o estado 'search' conforme o usuário digita
          />
          {/* Ícone de busca */}
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
            />
          </svg>
        </div>
      </div>

      {/* Componente que exibe a lista de funcionários */}
      <Funcionarios search={search} /> {/* Passa o estado de pesquisa para o componente Funcionarios */}
    </div>
  );
}

export default Home;