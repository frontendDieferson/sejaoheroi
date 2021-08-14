import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import heroisImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import './styles.css';



export default function Login() {
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Seja o Herói" />
                <form>
                    <h1>Faça seu Login</h1>
                    <input 
                    placeholder="Seu ID"
                    
                    />
                    <button className="button" type="submit">
                        Entrar
                    </button>
                    <Link to="register" className="back-link">
                        <FiLogIn size={16} color="#2F80ED"/>
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={heroisImg} alt="Heróis" />
        </div>
    )
} 