import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../../estilos/estilos.css";
import firebase from '../../firebase';

class Principal extends Component{
    constructor(props){
      super(props);

      this.state= {
        nome:"",
        sobrenome:"",
        datanasc:""

      }
    }

    async componentDidMount(){

      await firebase.auth().onAuthStateChanged(async(usuario)=>{
        if(usuario){
          var uid = usuario.uid;

          await firebase.firestore().collection("usuario").doc(uid).get()
          .then((retorno)=>{

            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              datanasc: retorno.data().datanasc
              
            })
          });
        }
      });

    }

    render(){
      return(
        <div>
          <h1>Principal</h1>
            Nome:{this.state.nome} <br/>
            Sobrenome: {this.state.sobrenome}<br/>
            Data de nascimento:{this.state.datanasc}

            <br/>
            <Link to="/"><button>Login</button></Link> 
        </div>
      )
    }
}

export default Principal;