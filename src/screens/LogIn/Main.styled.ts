import styled from "styled-components";

export const Wrapper = styled.div<{ bg: string }> `
  width: 100%;
  height: 100vh;
  color: white;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;  
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Login = styled.button `
  width: 350px;
  height: 64px;
  background: linear-gradient(180deg, #98B6BC 0%, #596D70 100%), linear-gradient(180deg, #007F9B 0%, #14EDFE 100%);
  background-blend-mode: multiply, normal;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.193216), inset 0px 1px 11px rgba(0, 0, 0, 0.06411);
  border-radius: 12px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  cursor: pointer;
`

export const Logo = styled.img `
    padding-top: 64px;
`

export const Info = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #A8A8A8;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`

export const Inner = styled.div`
    padding-bottom: 45px;
`

export const Span = styled.span `
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  opacity: 0.2;
  text-align: center;
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -16px;
`
