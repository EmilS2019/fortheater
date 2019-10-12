import React from 'react'
import styled from 'styled-components'

export default function HoverBox({text}) {

    const Box = styled.div`
        position:absolute;
        background:white;
        border:1px solid rgba(0,0,255,00.2);
        padding:0.6rem 1.4rem;
        transform:translateX(6.2rem);
        font-size:0.9rem;

    `

    return (
        <Box>
            {text}
        </Box>
    )
}
