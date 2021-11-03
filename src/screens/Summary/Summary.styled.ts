import ArrowDown from "../../assets/img/icon/arrow-down.svg";
import styled from "styled-components";

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 58px;
`

export const SummaryBlock = styled.div`
  width: 480px;
  height: 777px;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 0;
    background: rgba(255, 255, 255, 0.0);
  }
  &:last-child {
    width: 355px;
  }
  &:nth-child(2) {
    overflow-y: visible;
    &::after {
      position: absolute;
      content: "";
      width: 480px;
      height: 215px;
      background: linear-gradient(180deg, rgba(52, 53, 56, 0.0001) 0%, #080808 100%);
      bottom: 0;
    }
    &::before {
      position: absolute;
      content: "";
      background-image: url(${ArrowDown});
      background-size: contain;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 32px;
      height: 32px;
      z-index: 1;
    }
  }
  
`

export const SummaryBlockTotal = styled.div`
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  width: 100%;
  height: 387px;
  padding: 39px 40px;
  margin-bottom: 9px;
`

export const AllUsers = styled.div`
  background: rgba(61, 63, 69, 0.3);
  box-shadow: 0 0 44px rgba(0, 0, 0, 0.384207);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  padding: 27px 23px 24px 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  text-shadow: 0px 0px 12px rgba(20, 237, 254, 0.45103);
  color: #FFFFFF;
  width: 245px;
  float: left;
  margin: 0 28px 24px 0;
`

export const AllUsersScore = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  text-transform: uppercase;
  color: #14EDFE;
  text-shadow: 0px 0px 12px rgba(20, 237, 254, 0.45103);
`

export const AllUserApp = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 10px;
  display: block;
`

export const AllUserInstallBlock = styled.div`
  margin-bottom: 8px;
`

export const AllUserInstall = styled(AllUserApp)`
  margin-bottom: 0;
  opacity: 0.5;
`

export const AllUserInstallScore = styled.i`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
`

export const AllDownload = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 24px;
`
export const AllDownloadScore = styled.span`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 34px;
  text-transform: uppercase;
  color: #FFFFFF;
  max-width: 340px;
  display: block;
  margin-bottom: 15px;
`

export const ActiveUser = styled.i`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 36px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`

export const ActiveUserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const ActiveUserScore = styled.span`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;
  text-transform: uppercase;
  color: #FFFFFF;
`

export const ActiveUserInfo = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: 0.5;
  margin-bottom: 6px;
`

export const SummaryScoreBlock = styled.div`
  width: 480px;
  min-height: 74px;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  text-align: center;
  padding: 24px 45px;
  margin-bottom: 8px;
`

export const SummaryScoreBlockText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
`

export const SummaryScoreBlockInfo = styled.span`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #14EDFE;
  margin: 0 0 5px 4px;
`

export const SummaryScoreBlockInner = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const SummaryScoreBlockInfoWhite = styled(SummaryScoreBlockInfo)`
  color: #fff;
`

export const SummaryTable = styled.div`
  width: 100%;
  height: 316px;
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
`

export const SummaryTableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid rgba(255,255,255, 0.2);
  align-items: center;
  height: 51px;
  color: #fff;
  &:first-child {
    height: 88px;
    color: rgba(255,255,255, 0.5);
  }
  &:last-child {
    border: none;
    height: 71px;
  }
`

export const SummaryTableCall = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  width: 110px;
  margin-left: 20px;
  &:last-child {
    font-size: 12px;
    line-height: 16px;
  }
`

export const SummaryTableLvl = styled.div`
  background: rgba(52, 53, 56, 0.25);
  backdrop-filter: blur(135.914px);
  border-radius: 8px 0px 8px 8px;
  margin-top: 13px;
  height: 448px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: rgba(255, 255, 255, 0.0);
  }
`

export const SummaryButton = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.387521);
  box-sizing: border-box;
  backdrop-filter: blur(135.914px);
  border-radius: 8px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255,255,255, 0.6);
  transition: all .3s;
  cursor: pointer;
  margin-bottom: 16px;
  &:hover {
    background: #343538;
    backdrop-filter: blur(135.914px);
    border-radius: 8px;
    color: #14EDFE;

    text-shadow: 0px 0px 23px rgba(20, 237, 254, 0.487262);
  }
`

export const SummaryAppInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 212px;
  height: 143px;
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
`

export const SummaryAppInfoName = styled.i`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #14EDFE;
  opacity: 0.5;
  cursor: pointer;
`