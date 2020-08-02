import React from "react"

const Formulario = () => {

  return(
    <form>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          />
          <label>Cantidad Gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
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
