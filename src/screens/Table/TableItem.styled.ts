import styled from "styled-components";

export const Row = styled.div `
  height: 64px;
  display: grid;
  grid-template-columns: 101px repeat(9, 1fr) 112px;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(90deg, rgba(255, 255, 255, 0.0001) 0%, rgba(255,255,255, 0.5) 46.4%, rgba(255, 255, 255, 0.0001) 100%);
  color: #fff;
  text-transform: capitalize;
  &:first-child {
    color: rgba(255,255,255, 0.4);
    text-transform: uppercase;
    height: 72px;
  }
`

export const Cell = styled.div`
  font-family: Roboto Mono;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`



export const Arrow = styled.div `
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background-color: #575859;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    background: #14EDFE;
    box-shadow: 0px 0px 14px rgba(20, 237, 254, 0.298383);
  }
`

export const InfoLvl = styled.div`
  width: 207px;
  height: 260px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(20, 237, 254, 0.5);
  box-shadow: 0px 22px 34px rgba(0, 0, 0, 0.337947), 0px 10px 32px rgba(20, 237, 254, 0.173113);
  backdrop-filter: blur(81.5485px);
  border-radius: 8px;
`

export const InfoIcon = styled.div`
  width: 25px;
  height: 25px;
  background: #8F8F90;
  border-radius: 5px;
  transform: rotate(45deg);
`