import React from 'react';
import styled from 'styled-components'

const Section = () => {
    const FirstSection = styled.div`
        height:200px;
        width:200px;
        background-color:${props => props.mode === "light" ? "green" : "red"};
        display:flex;
        align-items:center;
        justify-content:center;
        
    `;
    return (
        <>
            <FirstSection >Helllo not world</FirstSection>
            <FirstSection mode="light">Hello world</FirstSection>
        </>
    )
}

export default Section