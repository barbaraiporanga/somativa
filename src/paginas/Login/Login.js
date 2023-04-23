import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/estilos.css";
import firebase from '../../firebase';

class Login extends Component{
    constructor(props){
      super(props);
      this.state = {
        email:"",
        senha:"",
        erro:null
        
      }

      this.acessar = this.acessar.bind(this);
    }

    async acessar(){
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(()=>{
        window.location.href = "./principal";

    })

    .catch((error)=>{
      this.setState({erro:"E-mail ou senha incorretos"});
      
    });
  }
    render(){
      return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value })}/>
            <br/>

            <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value })}/>
            <br/>


            <button onClick={this.acessar}>Acessar</button>
            {this.state.erro && <p>{this.state.erro}</p>} 
          
            <br/>
            <Link to="/Cadastro"><button>Cadastre-se</button></Link> 
        </div>
      )
    }
  }

export default Login;