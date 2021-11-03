import styled from "styled-components";
import {Back, Exit, Inner, MiniLogo, SummaryButton} from "../../screens/Table/Tabel.styled";
import LogoMini from "../../assets/img/mini-logo.svg";
import {useHistory, useLocation} from "react-router-dom";

const Root = styled.div <{ marginBot?: number | string}>`
  padding: 40px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.marginBot}
`

export const Header = () => {
    
    const location = useLocation();

    const history = useHistory();

    const handleClickBack = () => {
        history.push("/table")
    }

    const handleSummaryClick = () => {
        history.push("/summary")
    }
    
    return (
        <Root>
            <Inner justify={"center"}>
                <MiniLogo>
                    <img src={LogoMini} alt="logo icon"/>
                </MiniLogo>
                {
                    location.pathname === "/table" ? "" : <Back onClick={handleClickBack}>Вернуться Назад</Back>
                }
            </Inner>
            <Inner
                justify={"center"}
            >
                <SummaryButton onClick={handleSummaryClick}>
                    Сводная Статистика
                </SummaryButton>
                <Exit>Выйти</Exit>
            </Inner>
        </Root>
    )
}
