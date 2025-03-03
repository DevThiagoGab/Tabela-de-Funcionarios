import { useState, useEffect } from "react";

// Função para remover os acentos
const removerAcentos = (texto) => {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

function Funcionarios({ search }) {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/employees")
            .then((response) => response.json())
            .then((data) => setFuncionarios(data))
            .catch((err) => console.log("Erro ao buscar funcionários:", err));
    }, []);

    // Filtra os funcionários com base na pesquisa
    const filteredFuncionarios = funcionarios.filter((funcionario) => {
        const searchLower = removerAcentos(search.toLowerCase());
        return (
            removerAcentos(funcionario.name.toLowerCase()).includes(searchLower) ||
            removerAcentos(funcionario.job.toLowerCase()).includes(searchLower) ||
            funcionario.phone.includes(searchLower)
        );
    });

    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th className="rounded-tl">FOTO</th>
                        <th>NOME</th>
                        <th>CARGO</th>
                        <th>DATA DE ADMISSÃO</th>
                        <th className="rounded-tr">TELEFONE</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFuncionarios.length > 0 ? (
                        filteredFuncionarios.map((funcionario) => (
                            <tr key={funcionario.id}>
                                <td>
                                    <img
                                        src={funcionario.image}
                                        alt={`Foto de ${funcionario.name}`}
                                        className="rounded-full"
                                        width="40"
                                        height="40"
                                    />
                                </td>
                                <td className="visivel">{funcionario.name}</td>
                                <td>{funcionario.job}</td>
                                <td>{new Date(funcionario.admission_date).toLocaleDateString()}</td>
                                <td>{funcionario.phone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhum funcionário encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

// Altera o conteúdo da caixa de pesquisa de acordo com o tamanho da tela
window.addEventListener("resize", function () {
    const searchInput = document.querySelector(".search-input");
    if (window.innerWidth <= 400) {
        searchInput.placeholder = "Pesquisar";
    } else {
        searchInput.placeholder = "Pesquisar por nome, cargo ou telefone";
    }
});

export default Funcionarios;