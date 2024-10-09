
import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <h1>Dashboard</h1>
                <ul>
                    <li><a href="/meus-campeonatos">Meus Campeonatos</a></li>
                    <li><a href="/novo-campeonato">Novo Campeonato</a></li>
                    <li><a href="/ranking">Ranking</a></li>
                    <li><a href="/recomendacoes">Recomendações</a></li>
                </ul>
            </nav>

            <section className="active-tournaments">
                <h2>Campeonatos Ativos</h2>
                <div className="tournament-list">
                    <div className="tournament-card">
                        <h3>Campeonato A</h3>
                        <p>Progresso: 75%</p>
                        <button>Acompanhar</button>
                    </div>
                    <div className="tournament-card">
                        <h3>Campeonato B</h3>
                        <p>Progresso: 60%</p>
                        <button>Acompanhar</button>
                    </div>
                    {}
                </div>
                <button className="create-tournament">Criar Novo Campeonato</button>
            </section>

            <section className="recommendations">
                <h2>Recomendações</h2>
                <div className="recommendation-card">
                    <h3>Campeonato C</h3>
                    <p>Baseado no seu perfil.</p>
                </div>
                <div className="recommendation-card">
                    <h3>Campeonato D</h3>
                    <p>Baseado no seu histórico.</p>
                </div>
                {}
            </section>

            <section className="recent-results">
                <h2>Resultados Recentes</h2>
                <ul>
                    <li>Time A 2 x 1 Time B</li>
                    <li>Time C 3 x 0 Time D</li>
                    {}
                </ul>
            </section>
        </div>
    );
};

export default Home;
