import styled from "styled-components";

export const User = styled.div`
  margin: 21px 0 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
`
export const UserId = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: #14EDFE;
  margin-bottom: 28px;
`

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  height: 718px;
  overflow-y: auto;
  padding-bottom: 32px;
  &::-webkit-scrollbar {
    width: 0;
    background: rgba(255, 255, 255, 0.0);
  }
`

export const ItemLvlBlock = styled.div`
  max-width: 992px;
  width: 100%;
  height: 387px;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  padding: 42px 32px 32px;
  margin-bottom: 32px;
`

export const InnerLeftSide = styled.div`
  
`

export const Lvl = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 29px;
  color: #FFFFFF;
  display: flex;
  margin: 0 0 24px 0;
`

export const LvlNum = styled(Lvl)`
  color: #14EDFE;
  margin: 0 0 0 18px;
`

export const ItemLvlInner = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ItemLvl = styled.div`
  background: #242529;
  border-radius: 8px;
  padding: 29px 20px;
  max-width: 257px;
  width: 100%;
  height: 110px;
  margin: 0 30px 30px 0;
  display: flex;
  align-items: center;
`

export const ItemLvlInfoBox = styled.div`
  display: block;
  margin-left: 20px;
`

export const ItemLvlInfo = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${props => props.color};
  margin: 0 0 2px 0;
`

export const ItemLvlNum = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 29px;
  color: ${props => props.color};
  margin: 0;
`

export const ItemLvlScore = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 29px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin: 0;
  text-align: right;
  position: absolute;
  bottom: 32px;
  right: 32px;
`

export const ItemsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px 18px;
  max-width: 992px; 
`

export const Attainment = styled.div`
  width: 336px;
  height: 773px;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  padding: 32px 0 0 32px;
`

export const AttainmentTitle = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 29px;
  color: #FFFFFF;
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 24px;
`

export const AchievedTitle = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-transform: uppercase;
  color: #14EDFE;
  margin-bottom: 8px;
`

export const NotAchievedTitle = styled(AchievedTitle)`
  color: rgba(255,255,255, 0.5);
`

export const AchievedList = styled.ul`
  display: block;
  padding: 0;
  margin-bottom: 40px;
`

export const AchievedItem = styled.li`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #FFFFFF;
  list-style: none;
  padding: 0;
`

export const NotAchievedItem = styled(AchievedItem)`
  color: rgba(255,255,255, 0.5);
`

export const ItemInfoBlock = styled.div`
  width: 488px;
  height: 165px;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  padding: 32px 0 0 40px;
`

export const ItemInfoBlockScore = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  &:first-child {
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
  }
`

export const ItemInfoBlockScoreNum = styled.span`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  margin-left: 10px;
`