import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gaasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el formulario
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null } 

            <div className="campo">
                <label htmlFor="">Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />

                <label htmlFor="">Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <button
                type="submit"
                className="button-primary u-full-width"
            >Agregar gasto</button>
        </form>
    );
}

export default Formulario;