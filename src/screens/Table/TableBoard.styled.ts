import styled from "styled-components";
import ArrowIcon from "../../assets/img/icon/arrow-down.svg";

export const BoardWrapper = styled.div `
  width: 1360px;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 16px 16px 0 0;
  height: 690px;
  overflow-y: auto;
  margin-top: 23px;
  padding: 7px 11px;
  &::-webkit-scrollbar {
    width: 0;
    background: rgba(255, 255, 255, 0.0);
  }
`

export const Shadow = styled.div<{ show: boolean}>`
  position: absolute;
  width: 1360px;
  height: 216px;
  background: linear-gradient(180deg, rgba(52, 53, 56, 0.0001) 0%, #080808 100%);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: ${props => props.show ? "block" : "none"};
`

export const ArrowDown = styled.div<{ show: boolean}>`
  position: absolute;
  bottom: 18px;
  left: 50%;
  width: 32px;
  height: 32px;
  z-index: 1;
  transform: translateX(-50%);
  background-image: url(${ArrowIcon});
  background-position: center center;
  background-size: cover;
  border: none;
  cursor: pointer;
  display: ${props => props.show ? "block" : "none"};
`