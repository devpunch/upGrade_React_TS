import {
    ActiveUser,
    ActiveUserInfo,
    ActiveUserScore,
    ActiveUserWrap,
    AllDownload,
    AllDownloadScore,
    AllUserApp,
    AllUserInstall,
    AllUserInstallBlock,
    AllUserInstallScore,
    AllUsers,
    AllUsersScore, SummaryAppInfo, SummaryAppInfoName,
    SummaryBlock,
    SummaryBlockTotal, SummaryButton,
    SummaryScoreBlock,
    SummaryScoreBlockInfo,
    SummaryScoreBlockInfoWhite,
    SummaryScoreBlockInner,
    SummaryScoreBlockText, SummaryTable, SummaryTableCall, SummaryTableLvl, SummaryTableRow,
    SummaryWrapper
} from "./Summary.styled";

export const SummaryPage = () => {
    return (
        <SummaryWrapper>
            <SummaryBlock>
                <SummaryBlockTotal>
                    <AllUsers>
                        Всего пользователей:
                        <AllUsersScore>
                            35 221
                        </AllUsersScore>
                    </AllUsers>
                    <AllUserApp>
                        приложение:
                    </AllUserApp>
                    <AllUserInstallBlock>
                        <AllUserInstall>
                            УСТАНОВЛЕНО
                        </AllUserInstall>
                        <AllUserInstallScore>
                            23 688
                        </AllUserInstallScore>
                    </AllUserInstallBlock>
                    <AllUserInstallBlock>
                        <AllUserInstall>
                            НЕ УСТАНОВЛЕНО
                        </AllUserInstall>
                        <AllUserInstallScore>
                            11 533
                        </AllUserInstallScore>
                    </AllUserInstallBlock>
                    <AllDownload>
                        Всего скачиваний моб. приложения
                    </AllDownload>
                    <AllDownloadScore>
                        14791 / iOS / 62%
                        8879 / Androi  d / 38%
                    </AllDownloadScore>
                    <ActiveUser>
                        Активных пользователей моб.приложения
                    </ActiveUser>
                    <ActiveUserWrap>
                        <ActiveUserScore>
                            7243
                        </ActiveUserScore>
                        <ActiveUserInfo>
                            Заходили хотя бы 1 раз за 5 дней
                        </ActiveUserInfo>
                    </ActiveUserWrap>
                </SummaryBlockTotal>
                <SummaryScoreBlock>
                    <SummaryScoreBlockText>
                        Всего сессий:
                    </SummaryScoreBlockText>

                    <SummaryScoreBlockInfo>
                        58358
                    </SummaryScoreBlockInfo>
                </SummaryScoreBlock>
                <SummaryScoreBlock>
                    <SummaryScoreBlockText>
                        Всего времени проведено в VR:
                    </SummaryScoreBlockText>

                    <SummaryScoreBlockInfo>
                        19425 Час.
                    </SummaryScoreBlockInfo>
                </SummaryScoreBlock>
                <SummaryScoreBlock>
                    <SummaryScoreBlockText>
                        Среднее время пользователя в игре:
                    </SummaryScoreBlockText>
                    <SummaryScoreBlockInfoWhite>
                        20 Мин.
                    </SummaryScoreBlockInfoWhite>
                </SummaryScoreBlock>
                <SummaryScoreBlock>
                    <SummaryScoreBlockText>
                        Среднее количество пройденных тренингов у одного пользователя:
                    </SummaryScoreBlockText>
                    <SummaryScoreBlockInfoWhite>
                        32
                    </SummaryScoreBlockInfoWhite>
                </SummaryScoreBlock>
                <SummaryScoreBlock>
                    <SummaryScoreBlockInner>
                        <SummaryScoreBlockText>
                            Запуски Challenge Mode:
                        </SummaryScoreBlockText>
                        <SummaryScoreBlockInfoWhite>
                            23539 / 40%
                        </SummaryScoreBlockInfoWhite>
                    </SummaryScoreBlockInner>
                    <SummaryScoreBlockInner>
                        <SummaryScoreBlockText>
                            Запуски Training Mode:
                        </SummaryScoreBlockText>
                        <SummaryScoreBlockInfoWhite>
                            34819 / 60%
                        </SummaryScoreBlockInfoWhite>
                    </SummaryScoreBlockInner>

                </SummaryScoreBlock>
            </SummaryBlock>

            <SummaryBlock>
                <SummaryTable>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            Название тренинга
                        </SummaryTableCall>
                        <SummaryTableCall>
                            кол-во сессий
                        </SummaryTableCall>
                        <SummaryTableCall>
                            всего проведено времени в тренинге
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            Focusing
                        </SummaryTableCall>
                        <SummaryTableCall>
                            21 432
                        </SummaryTableCall>
                        <SummaryTableCall>
                            7144 Час.
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            Memory
                        </SummaryTableCall>
                        <SummaryTableCall>
                            16 548
                        </SummaryTableCall>
                        <SummaryTableCall>
                            5516 Час.
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            Reaction
                        </SummaryTableCall>
                        <SummaryTableCall>
                            10 522
                        </SummaryTableCall>
                        <SummaryTableCall>
                            3507 Час.
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            Spatial orientation
                        </SummaryTableCall>
                        <SummaryTableCall>
                            9856
                        </SummaryTableCall>
                        <SummaryTableCall>
                            3258 Час.
                        </SummaryTableCall>
                    </SummaryTableRow>
                </SummaryTable>

                <SummaryTableLvl>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            Название тренинга
                        </SummaryTableCall>
                        <SummaryTableCall>
                            кол-во сессий
                        </SummaryTableCall>
                        <SummaryTableCall>
                            всего проведено времени в тренинге
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                    <SummaryTableRow>
                        <SummaryTableCall>
                            1
                        </SummaryTableCall>
                        <SummaryTableCall>
                            50
                        </SummaryTableCall>
                        <SummaryTableCall>
                            2456
                        </SummaryTableCall>
                    </SummaryTableRow>
                </SummaryTableLvl>

            </SummaryBlock>

            <SummaryBlock>
                <SummaryButton>
                    ПЕРЕЙТИ В AppStore Connect
                </SummaryButton>
                <SummaryButton>
                    ПЕРЕЙТИ В AppStore Connect
                </SummaryButton>
                <SummaryButton>
                    ПЕРЕЙТИ В Google play console
                </SummaryButton>
                <SummaryButton>
                    ПЕРЕЙТИ В Google Analytics
                </SummaryButton>
                <SummaryAppInfo>
                    <SummaryAppInfoName>
                        ПРИЛОЖЕНИЕ APP STORE
                    </SummaryAppInfoName>
                    <SummaryAppInfoName>
                        ПРИЛОЖЕНИЕ GOOGLE PLAY
                    </SummaryAppInfoName>
                    <SummaryAppInfoName>
                        СТРАНИЦА ИГРЫ В STEAM
                    </SummaryAppInfoName>
                </SummaryAppInfo>
            </SummaryBlock>

        </SummaryWrapper>
    )
}