import React from 'react';
import '../hojas-de-estilos/Boton.css';

function Boton(props){

    const tipoOperador = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=' );
    }

    return(
        <div className={`Boton-contenedor ${tipoOperador(props.children) ? 'operador':''}`.trimEnd()}
        onClick={() => props.funcionClick(props.children)}>
        {props.children}  
        </div>
    );
}

export default Boton;