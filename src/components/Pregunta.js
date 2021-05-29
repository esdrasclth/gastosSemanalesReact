import React, {Fragment, useState} from 'react'

const Pregunta = () => {
    const [cantidad, guardarCantidad] = useState(0);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = e => {

    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <button 
                    type="submit"
                    className="button-primary u-full-width"
                >Definir Presupuesto</button>
            </form>
        </Fragment>
     );
}
 
export default Pregunta;