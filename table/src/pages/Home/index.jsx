import { useState, useEffect } from "react";
import "./style.css";
import Logo from "./imgs/LogoBeTalent.png";
import Funcionarios from "./Funcionarios";

function Home() {
  const [search, setSearch] = useState(""); // Estado para armazenar o texto de pesquisa

  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <img src={Logo} className="img" alt="Logo BeTalent" />
      </header>

      {/* Título e Barra de Pesquisa */}
      <div className="title-container">
        <div className="title">
          <h1>Funcionários</h1>
        </div>
        <div className="search-container">
          <input
            className="search-input"
            placeholder="Pesquisar por nome, cargo ou telefone"
            type="text"
            value={search} // Controla o estado do input
            onChange={(e) => setSearch(e.target.value)} // Atualiza o estado de pesquisa
          />
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

      {/* Componente de Funcionários */}
      <Funcionarios search={search} /> {/* Passa o estado de pesquisa como prop */}
    </div>
  );
}

export default Home;