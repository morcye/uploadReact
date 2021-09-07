import React, { Component } from 'react'; 
import './botoes.css'

class BotoesTeste extends Component{
    render(){
        return(
            <button onClick={()=>{this.props.handleclick(this.props.label);}}>
          {this.props.label}      
            </button>
        );
    }
}
class Mylabel extends Component{
    render() {
        return <span>Clique aqui: {this.props.text}</span>
    }
} 
class Botoes extends Component{
    constructor(props){
    super(props)    

        this.state = {
            labelText:'',
        }
    }
    setLabelText = (labelText) =>{
        this.setState({ labelText });
    }
render(){
    return(
        <div className = "Botoes">
            <Mylabel text = {this.state.setLabelText}/>
            <br/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Bom dia !"/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Boa tarde !"/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Boa noite !"/>
            </div> 
            )    
}
}
export default Botoes; 