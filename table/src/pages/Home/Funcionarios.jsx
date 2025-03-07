import { useState, useEffect } from "react";

// Função para remover os acentos de um texto
const removerAcentos = (texto) => {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

function Funcionarios({ search }) {
    // Estado para armazenar os funcionários, as linhas expandidas e a largura da tela
    const [funcionarios, setFuncionarios] = useState([]);
    const [expandedRows, setExpandedRows] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Armazena a largura da tela

    // useEffect para buscar os dados da API e monitorar a largura da tela
    useEffect(() => {
        // Faz a requisição para obter os dados dos funcionários
        fetch("http://localhost:3000/employees")
            .then((response) => response.json())
            .then((data) => setFuncionarios(data))
            .catch((err) => console.log("Erro ao buscar funcionários:", err));

        // Adiciona o event listener para monitorar a largura da tela
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Limpa o event listener ao desmontar o componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Executa uma vez quando o componente é montado

    // Filtra os funcionários com base na pesquisa
    const filteredFuncionarios = funcionarios.filter((funcionario) => {
        const searchLower = removerAcentos(search.toLowerCase());
        return (
            removerAcentos(funcionario.name.toLowerCase()).includes(searchLower) ||
            removerAcentos(funcionario.job.toLowerCase()).includes(searchLower) ||
            funcionario.phone.includes(searchLower)
        );
    });

    // Função para alternar a visibilidade das informações de cada linha
    const toggleRow = (id) => {
        setExpandedRows((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th className="rounded-tl">FOTO</th>
                        <th>NOME</th>
                        <th className="hide-on-small">CARGO</th>
                        <th className="hide-on-small">DATA DE ADMISSÃO</th>
                        <th className="hide-on-small rounded-tr">TELEFONE</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFuncionarios.length > 0 ? (
                        filteredFuncionarios.map((funcionario) => (
                            <tr
                                key={funcionario.id}
                                onClick={() => windowWidth <= 600 ? toggleRow(funcionario.id) : null} // Só permite o clique quando a tela for <= 600px
                                className={`clickable-row ${windowWidth <= 600 ? "clickable" : ""}`} // Adiciona a classe 'clickable' se a tela for <= 600px
                            >
                                <td>
                                    <img
                                        src={funcionario.image}
                                        alt={`Foto de ${funcionario.name}`}
                                        className="rounded-full"
                                        width="40"
                                        height="40"
                                    />
                                </td>
                                <td className={`visivel ${expandedRows[funcionario.id] ? "expanded" : ""}`}>
                                    {funcionario.name}
                                    {expandedRows[funcionario.id] && (
                                        <div className="details">
                                            <p><strong>Cargo:</strong> {funcionario.job}</p>
                                            <p><strong>Data de Admissão:</strong> {new Date(funcionario.admission_date).toLocaleDateString()}</p>
                                            <p><strong>Telefone:</strong> {funcionario.phone}</p>
                                        </div>
                                    )}
                                    <span className={`arrow ${expandedRows[funcionario.id] ? "up" : "down"}`}></span> {/* Controla a rotação da seta */}
                                </td>
                                <td className={`hide-on-small ${expandedRows[funcionario.id] ? "expanded" : ""}`}>
                                    {funcionario.job}
                                </td>
                                <td className={`hide-on-small ${expandedRows[funcionario.id] ? "expanded" : ""}`}>
                                    {new Date(funcionario.admission_date).toLocaleDateString()}
                                </td>
                                <td className={`hide-on-small ${expandedRows[funcionario.id] ? "expanded" : ""}`}>
                                    {funcionario.phone}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="empty">
                            <td colSpan="2">Nenhum funcionário encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

// Ajusta o placeholder da caixa de pesquisa com base na largura da tela
window.addEventListener("resize", function () {
    const searchInput = document.querySelector(".search-input");
    if (window.innerWidth <= 400) {
        searchInput.placeholder = "Pesquisar";
    } else {
        searchInput.placeholder = "Pesquisar por nome, cargo ou telefone";
    }
});

export default Funcionarios;