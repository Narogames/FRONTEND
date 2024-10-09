// src/Cadastro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

const Cadastro = () => {
    const navigate = useNavigate(); // Hook para navegação
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!nome) validationErrors.nome = "Nome completo é obrigatório.";
        if (!email) {
            validationErrors.email = "Email é obrigatório.";
        } else if (!validateEmail(email)) {
            validationErrors.email = "Email inválido.";
        }
        if (!senha) validationErrors.senha = "Senha é obrigatória.";
        if (senha !== confirmacaoSenha) validationErrors.confirmacaoSenha = "As senhas não coincidem.";

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Cadastro realizado com sucesso!");
            navigate('/home'); // Redireciona para a página Home
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className={errors.nome ? 'error' : ''}
                    />
                    {errors.nome && <span className="error-message">{errors.nome}</span>}
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className={errors.senha ? 'error' : ''}
                    />
                    {errors.senha && <span className="error-message">{errors.senha}</span>}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirmação de Senha"
                        value={confirmacaoSenha}
                        onChange={(e) => setConfirmacaoSenha(e.target.value)}
                        className={errors.confirmacaoSenha ? 'error' : ''}
                    />
                    {errors.confirmacaoSenha && <span className="error-message">{errors.confirmacaoSenha}</span>}
                </div>
                <button type="submit">Cadastrar</button>
                <p>Já tem uma conta? <a href="/login">Faça login</a></p>
            </form>
        </div>
    );
};

export default Cadastro;
