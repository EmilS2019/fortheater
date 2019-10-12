import React from 'react'

export default function AddGraph() {

    const addGraph = e =>{    
        e.preventDefault()
        console.log(e.target[0].value)
    }

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
