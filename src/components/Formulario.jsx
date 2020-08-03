import React, { useState } from "react"

const Formulario = () => {

  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)

  //cuando el usuario agrega un Gasto
  const agregarGasto = e => {
    e.preventDefault()


    //validar

    //construir el gasto

    //pasar el gasto al componente principal

    //resetear el form
  }

  return(
    <form onSubmit={agregarGasto}>
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
