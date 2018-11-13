import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      memesList: null
    }
  }

//antes de montar o comnponente é o didmount
  componentDidMount = () => {
    this.getMemeList()
  }

  getMemeList = () => {
    return axios.get('https://apieasy.azurewebsites.net/api/meme')
    .then(resultado => this.setState({memesList: resultado.data}))
        //.then(resultado => console.log(resultado)) //listar resultado

  }


  render() {
    const {memesList} = this.state
    return (
      <div className="App">
        {
          //retorna o html se ele nao estiver nuio
          memesList && memesList.length > 0 ? memesList.map((meme, i) =>{
            return(
              //pra identificar que e uma lista precisa de i
              <div key={i}> 
                <h3>{meme.nome}</h3>
                <img src={meme.url} width="300"/>
              </div>
            )
          }
          ) : null
        }
      </div>
    );
  }
}

export default App;
