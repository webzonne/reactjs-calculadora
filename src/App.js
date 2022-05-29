import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import {useState} from 'react';
import {evaluate} from 'mathjs'; 

function App() {


  const [valor, setvalor] = useState('');

  const AddInput = val =>{
      setvalor(valor + val);
  };

  const FunctionResultado = () =>{
    if (valor){
      setvalor(evaluate(valor));
    }else{
      alert("Por favor ingrese un valor");
    }
   
  }

  return (
    <div className='App'>
      
        <div className='title-contenedor'>
          <h1>CALCULADORA REACTJS</h1>
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={valor}/>
          <div className='fila'>
          <Boton funcionClick={AddInput}>1</Boton>
          <Boton funcionClick={AddInput}>2</Boton>
          <Boton funcionClick={AddInput}>3</Boton>
          <Boton funcionClick={AddInput}>+</Boton>
          </div>
          <div className='fila'>
          <Boton funcionClick={AddInput}>4</Boton>
          <Boton funcionClick={AddInput}>5</Boton>
          <Boton funcionClick={AddInput}>6</Boton>
          <Boton funcionClick={AddInput}>-</Boton>
          </div>
          <div className='fila'>
          <Boton funcionClick={AddInput}>7</Boton>
          <Boton funcionClick={AddInput}>8</Boton>
          <Boton funcionClick={AddInput}>9</Boton>
          <Boton funcionClick={AddInput}>*</Boton>
          </div>
          <div className='fila'>
          <Boton funcionClick={FunctionResultado}>=</Boton>
          <Boton funcionClick={AddInput}>0</Boton>
          <Boton funcionClick={AddInput}>.</Boton>
          <Boton funcionClick={AddInput}>/</Boton>
          </div>
          <div className='fila'>
          <BotonClear CleanClick={()=> setvalor('')}>Clear</BotonClear>
          </div>
        </div>
    </div>
  );
}

export default App;

