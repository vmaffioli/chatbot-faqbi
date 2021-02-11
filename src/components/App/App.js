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
        <h1>Bem vindo(a) ao Vinibot!</h1>
        <p>O objetivo do Vinibot é responder algumas perguntas frequentes em entrevistas de emprego.</p>
        <p>Vinibot é uma aplicação React criada com pacote react-chatbot-kit(externo), isa-know-name(autoral), sistema simples para variação de respostas e função para analisar e comparar perguntas recebidas com as memorizadas.</p>
        <p>Perguntas disponíveis: 5 <br/>Sobre mim<br/>Minha pretensão salarial<br/>Meu ponto forte<br/>Meu ponto fraco<br/>Onde me vejo daqui 5 anos.</p>
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
