import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/estilos.css";
import firebase from '../../firebase';

class Cadastro extends Component{
    constructor(props){
      super(props);
      this.state = {
        email: "",
        senha: "",
        nome: "",
        sobrenome: "",
        datanasc:""
      }

       this.gravar = this.gravar.bind(this);
          }

          async  gravar(){
              await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
              .then(async (retorno) => {

                await firebase.firestore().collection('usuario').doc(retorno.user.uid).set({
                  nome: this.state.nome,
                  sobrenome: this.state.sobrenome,
                  datanasc: this.state.datanasc
                });

              });

          }

    render(){
      return(
        <div>
            <h1>Cadastro</h1>
            <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value })}/>
            <br/>

            <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value })}/>
            <br/>
            <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value })}/>
            <br/>

            <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value })}/>
            <br/>

            <input type="date" placeholder='Data de nascimento' onChange={(e) => this.setState({datanasc: e.target.value })}/>
            <br/>

            <button onClick={this.gravar}>Gravar</button>

            <br/>
            <br/>
            <Link to="/"><button>Login</button></Link> 


        </div>
      )
    }
}

export default Cadastro;