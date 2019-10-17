import React from "react";
import styled from 'styled-components'
export default class home extends React.Component {
    render () {
        return (
            <Container>
                    A new Component!   
            </Container>
        );

    }
}

export const Container = styled.button`
    width: 100%;
    height: 40px;
    background-color: green;
    font-family: black;
    `