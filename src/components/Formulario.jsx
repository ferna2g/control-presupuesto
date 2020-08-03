import React, { useState } from "react"
import Error from "./Error"
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

//state
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  //cuando el usuario agrega un Gasto
  const agregarGasto = e => {
    e.preventDefault()

    //validar
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
      guardarError(true)
      return
    }
    guardarError(false)

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    //pasar el gasto al componente principal
    guardarGasto(gasto)
    guardarCrearGasto(true)

    //resetear el form
    guardarNombre('')
    guardarCantidad(0)
  }

  return(
    <form onSubmit={agregarGasto}>
    <h2>Agrega aqui tus Gastos</h2>
    {error ? <Error mensaje="Los campos son obligatorios o la cantidad en el presupuesto no es valido" />
            : null }
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
          />
          <label>Cantidad Gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={e => guardarCantidad(e.target.value)}
            />
            <input
              type="submit"
              className="button-primary u-full-width"
              value="Agregar Gasto"
              />
      </div>
    </form>
  )
}

export default Formulario
