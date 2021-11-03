import styled from "styled-components";

export const Inner = styled.div <{ justify?: string, marginTop?: number | string}>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  margin-top: ${props => props.marginTop};
`

export const MiniLogo = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(52, 53, 56, 0.1) 0%, rgba(52, 53, 56, 0.1) 100%);
  box-shadow: 0 2px 24px #000000;
  backdrop-filter: blur(27.1828px);
  width: 72px;
  height: 72px;
  border-radius: 8px;
`

export const Back = styled.div`
  width: 187px;
  height: 59px;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 29.5px;
  margin-left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: rgba(255,255,255, 0.8);
  transition: all .3s;
  cursor: pointer;
  &:hover {
    color: #14EDFE;
    text-shadow: 0px 2px 34px #14EDFE;
  }
`

export const SummaryButton = styled.button `
  border: none;
  background: rgba(255, 255, 255, 0.1);
  mix-blend-mode: normal;
  backdrop-filter: blur(100px);
  border-radius: 29.5px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px 34px 21px 35px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin-right: 32px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    color: #14EDFE;
    text-shadow: 0px 2px 34px #14EDFE;
  }
`

export const Exit = styled.span `
  display: block;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #EDEDED;
  mix-blend-mode: normal;
  opacity: 0.5;
  cursor: pointer;
`

export const InputSearch = styled.input `
  width: 351px;
  height: 59px;
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: rgba(255,255,255, 0.8);
  mix-blend-mode: normal;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  border: none;
  padding: 0 55px 0 24px;
  outline: none;
  position: relative;
`

export const MenuUp = styled.div `
  width: 64px;
  height: 59px;
  background: rgba(52, 53, 56, 0.39);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    svg {
      transition: all .3s;
      path {
        fill: #14EDFE;
      }
    }
  }
`

export const Trash = styled(MenuUp) `
    margin-right: 0;
`