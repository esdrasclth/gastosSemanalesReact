import React, { useState } from 'react'

const Formulario = () => {
    return (
        <form action="">
            <h2>Agrega tus gastos aqui</h2>

            <div className="campo">
                <label htmlFor="">Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />

                <label htmlFor="">Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
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