import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])

  //funcion cuando agreguemos un nuevo gasto
  const agregaNuevoGasto = gasto =>(
    guardarGastos([
      ...gastos,
      gasto
    ])
  )


  return (
    <div className="container">
      <header>
        <h1>Control de Gasto Semanal</h1>

        <div className="contenido-principal contenido">
        {mostrarpregunta ? (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
        )
        :
        (
        <div className="row">
          <div className="one-half column">
            <Formulario
              agregaNuevoGasto={agregaNuevoGasto}
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      )
        }
        </div>
      </header>
    </div>
  );
}

export default App;
