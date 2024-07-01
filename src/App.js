import React, { Component } from "react";
import Botao from "./Components/Botao";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.frase = [
      "Acredite nos seus sonhos e eles se tornarão realidade.",
      "A sorte favorece os corajosos.",
      "Uma nova oportunidade está a caminho.",
      "A felicidade é um estado de espírito, escolha ser feliz hoje.",
      "Suas ações de hoje determinam seu futuro amanhã.",
      "Grandes mudanças estão no seu horizonte.",
      "A paz interior traz sucesso exterior.",
      "Você é mais forte do que imagina.",
      "Confie no processo e abrace as incertezas.",
      "Um pequeno gesto pode criar grandes laços.",
    ];
    this.getLucky = this.getLucky.bind(this);
  }

  getLucky() {
    let number = Math.floor(Math.random() * this.frase.length);
    this.setState({ text: this.frase[number] });
    let element = document.querySelector(".phrase");
    element.style.display = "block";
  }

  render() {
    return (
      <div className="container">
        <img
          className="img"
          src={require("./Assets/biscoito-da-sorte.png")}
          alt="biscoito da sorte"
        ></img>
        <Botao nome="Abrir biscoito" acaoBtn={this.getLucky} />
        <blockquote className="phrase">" {this.state.text} "</blockquote>
      </div>
    );
  }
}

export default App;
