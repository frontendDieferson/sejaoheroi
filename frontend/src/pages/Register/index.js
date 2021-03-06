import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import "./styles.css"

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Seja o Herói" />
                    <h1>Cadastro</h1>
                    <p>
                    Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
                    os casos da sua ONG
                    </p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#2F80ED" />
                        Já tenho Cadastro
                    </Link>
                </section>

                <form>
                    <input 
                    placeholder="Nome da ONG"

                    />
                <input
                type="email"
                placeholder="E-mail"
                 />
                 <input 
                 placeholder="Whatsapp" />
                 <div className="input-group">
                     <input
                     placeholder="Cidade" />
                
                <input 
                placeholder="Estado" />
                
                 </div>
                 <button className="button" type="submit">
                     Cadastrar
                 </button>
                </form>
            </div>
        </div>
    )
}