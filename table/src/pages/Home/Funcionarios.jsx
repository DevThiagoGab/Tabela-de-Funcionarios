import { useState, useEffect } from "react";

// Função para remover os acentos
const removerAcentos = (texto) => {
    return texto
        .normalize("NFD") // Normaliza para decompor os caracteres acentuados
        .replace(/[\u0300-\u036f]/g, ""); // Remove os acentos
};

function Funcionarios({ search }) {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/employees")
            .then((response) => response.json())
            .then((data) => setFuncionarios(data))
            .catch((err) => console.log("Erro ao buscar funcionários:", err));
    }, []);

    // Função para filtrar os dados com base no texto de pesquisa
    const filteredFuncionarios = funcionarios.filter((funcionario) => {
        const searchLower = removerAcentos(search.toLowerCase()); // Remove acentos da pesquisa
        return (
            removerAcentos(funcionario.name.toLowerCase()).includes(searchLower) || // Remove acentos do nome
            removerAcentos(funcionario.job.toLowerCase()).includes(searchLower) || // Remove acentos do cargo
            funcionario.phone.includes(searchLower) // Não precisa remover acentos do telefone
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
                                <td>{funcionario.name}</td>
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

export default Funcionarios;