import React from 'react'
import styled from 'styled-components'

//Parent of GraphPiece
export default function AddGraph({addGraph}) {

    const Form = styled.div`
        form{
            margin-top:570px
        }
    `

    return (
        <Form>
            <form onSubmit={addGraph}>
                <label>Namn: </label>
                <input type='text' id='name'></input>
                <button type='submit'>Lägg till</button>
            </form>
        </Form>
    )
}
