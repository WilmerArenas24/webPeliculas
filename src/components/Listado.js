import React from 'react'

export const Listado = () => {
  return (
    <>
        {[1, 2, 3, 4].map(index => (
          <article key={index} className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">Wilmerarenas.es</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>
        ))}
    </>
  )
}
