import {ReactComponent as Info} from "./assets/i.svg";
import styled from "styled-components";
import {useState} from "react";

const IconInfo = styled.div <{ isHover: boolean }>`
  width: 25px;
  height: 25px;
  background: ${props => props.isHover ? "#14EDFE" : "#8F8F90"};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg) translate(-70%, 0);
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
  box-shadow: ${props => props.isHover ? "2px 2px 14px rgba(20, 237, 254, 0.432863)" : "0"};

  svg {
    path {
      fill: ${props => props.isHover ? "#000" : "#fff"}
    }
  }
`
const ToolTipWrap = styled.div <{ isShow: boolean }>`
  position: absolute;
  width: 207px;
  height: 260px;
  background: #102124;
  border: 1px solid rgba(20, 237, 254, 0.5);
  box-shadow: 0 22px 34px rgba(0, 0, 0, 0.337947), 0 10px 32px rgba(20, 237, 254, 0.173113);
  backdrop-filter: blur(81.5485px);
  border-radius: 8px;
  top: -16px;
  right: -16px;
  z-index: 9;
  display: ${props => props.isShow ? "block" : "none"};
  padding: 25px 18px 24px 16px;
`

const ToolTipTitle = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 17px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 27px;
`

const ToolTipInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
`

const ToolTipScore = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  max-width: 87px;
  color: ${props => props.color};
  margin: 0;
`

const ToolTipNum = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.color};
  margin: 0;
`

const InfoChar = styled.span`
  transform: rotate(-45deg);
  height: 20px;
`
const InfoWrap = styled.div <{ isHover: boolean }>`
  position: relative;
  width: 35px;
  height: 35px;
  z-index: ${props => props.isHover ? 10 : 9};
  right: 25px;
`

export const InfoToolTip = () => {
  const [isHover, setHover] = useState(false);
  const handleHover = (val: boolean) => {
    setHover(val)
  }

  return (
    <InfoWrap
      isHover={isHover}
    >
      <ToolTipWrap
        isShow={isHover}
        onMouseLeave={() => handleHover(false)}
      >
        <ToolTipTitle>
          НЕЙРО-БАЛЛЫ
        </ToolTipTitle>
        <ToolTipInner>
          <ToolTipScore
            color="#4BFF57"
          >
            SPATIAL ABILITIES
          </ToolTipScore>
          <ToolTipNum
            color="#4BFF57"
          >
            9452
          </ToolTipNum>
        </ToolTipInner>
        <ToolTipInner>
          <ToolTipScore
            color="#FEC600"
          >
            HAND-EYE
            COORDINATION
          </ToolTipScore>
          <ToolTipNum
            color="#FEC600"
          >
            19452
          </ToolTipNum>
        </ToolTipInner>
        <ToolTipInner>
          <ToolTipScore
            color="#AE7FFF"
          >
            ATEENTION EFFICIENCY
          </ToolTipScore>
          <ToolTipNum
            color="#AE7FFF"
          >
            2453
          </ToolTipNum>
        </ToolTipInner>
        <ToolTipInner>
          <ToolTipScore
            color="#FC6A37"
          >
            WORKING MEMORY
          </ToolTipScore>
          <ToolTipNum
            color="#FC6A37"
          >
            9452
          </ToolTipNum>
        </ToolTipInner>


      </ToolTipWrap>
      <IconInfo
        onMouseEnter={() => handleHover(true)}
        isHover={isHover}
      >
        <InfoChar>
          <Info/>
        </InfoChar>
      </IconInfo>
    </InfoWrap>
  )
}