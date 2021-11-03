import React, { useState} from 'react';
import styled from "styled-components";

const Label = styled.label`
  display: flex;
`

const Input = styled.input`
  position: relative;
  height: 26px;
  width: 26px;
  border-radius: 6px;
  transition: all 0.15s ease-out 0s;
  background: transparent;
  border: 1px solid #14EDFE;
  cursor: pointer;
  display: inline-block;
  margin-left: 31px;
  outline: none;
  z-index: 1000;
  
  &:checked {
    background: #14EDFE;
    box-shadow: 0 2px 14px #14EDFE;
  }
  &:checked::before {
    height: 26px;
    width: 26px;
    content: "";
    position: absolute;
    display: inline-block;
  }
  &:checked::after {
    -webkit-animation: click-wave 0.65s;
    -moz-animation: click-wave 0.65s;
    animation: click-wave 0.65s;
    background: #40e0d0;
    content: '';
    display: block;
    position: relative;
    z-index: 100;
  }
`

interface checkBoxProps {
    checked?: boolean,
    onChange: (check: boolean) => void
}

const CheckBox: React.FC<checkBoxProps> = ({ onChange, checked = false }) => {
    const [check, setCheck] = useState(checked);
    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked);
        onChange && onChange (event.target.checked);
    }

    return (
        <>
            <Label>
                <Input
                    checked={check}
                    type="checkbox"
                    className="option-input checkbox"
                    onChange={handleClick}
                />
            </Label>
        </>
    )
}

export default CheckBox;