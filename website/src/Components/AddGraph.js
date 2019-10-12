import React from 'react'

export default function AddGraph({addGraph}) {
    return (
        <div>
            <form onSubmit={addGraph}>
                <label>Namn: </label>
                <input type='text' id='name'></input>
                <button type='submit'>Lägg till</button>
            </form>
        </div>
    )
}
