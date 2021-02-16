import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";

import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import config from "../Chatbot/config";


function App() {
  return (
    <div className="App">

      <div className="info-container">
        <h2>Bem vindo(a) ao Vinibot!</h2>
        <p>O objetivo do Vinibot é responder perguntas frequentes em entrevistas. (!!!)Aqui é uma região de testes(!!!)</p>
        <p>Vinibot é uma aplicação React criada com os pacotes react-chatbot-kit(externo) para renderizar o chat e isa-know-name(autoral) para distinguir nomes humanos, sistema simples para variação de respostas e sistema para analisar mensagens recebidas em duas etapas: <br/>com chaves multiniveis e após validação usa-se comparação percentual</p>
        <br/>
        <a href="https://github.com/vmaffioli/faqbi-client">GitHub - Repositório do projeto</a>
        <a href="http://viniciusmaffioli.herokuapp.com/">Minha página pessoal</a>
      </div>

      <div className="chat-container">
        <Chatbot 
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
