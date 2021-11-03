import React from "react";
import styled from "styled-components";

const InputStyled = styled.input<{margin: number}> `
  width: 350px;
  height: 56px;
  background: #0A0A0A;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.220599), inset 0px 0px 6px #171717;
  border-radius: 10px;
  border: none;
  padding: 0 25px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255,255,255, 0.5);
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;   
  margin: ${props => props.margin}
`

const Input: React.FC<any> = (props) => {
    return (
        <InputStyled {...props}/>
    )
}

export default Input;