import React, {Component} from "react";
export default class saudacao extends Component {
render(){
    const {tipo, nome }= this.props;
    return(
        <div>
            <h1> 
                {tipo}{nome} 
                </h1>
            <br></br>
                <input type = "text" placeholder ="Tipo..." value= {tipo}></input>
                <input type = "text" placeholder ="Nome..." value= {nome}></input>
        </div>
    );
}
    
}