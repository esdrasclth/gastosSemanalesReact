import React, {Fragment} from 'react'

const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form action="">
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
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