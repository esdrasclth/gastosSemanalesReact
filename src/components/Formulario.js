import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    const agregarGasto = e => {
        e.preventDefault();

        //validar

        // construir el gasto

        // pasar el gaasto al componente principal

        // resetear el formulario
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

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