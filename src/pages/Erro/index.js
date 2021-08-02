import React, {Component } from 'react';
import './erro.css'
import erro_404 from '../../assets/erro_404.jpg'

class Erro extends Component{
    render(){
        return(
            <div className="erro">
                <div className="img">
                    <img  src={erro_404} alt="fireSpot"/>
                </div>
            </div>
        );
    }
}

export default Erro;