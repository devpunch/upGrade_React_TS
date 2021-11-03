import {
    ItemLvlBlock,
    ItemLvl,
    ItemLvlInner,
    Items,
    Lvl,
    LvlNum,
    User,
    UserId,
    ItemLvlScore,
    ItemLvlInfo,
    ItemLvlNum,
    ItemLvlInfoBox,
    Attainment,
    ItemInfoBlock,
    ItemsInner,
    InnerLeftSide,
    AttainmentTitle,
    AchievedTitle,
    AchievedList,
    AchievedItem,
    NotAchievedTitle,
    NotAchievedItem,
    ItemInfoBlockScore,
    ItemInfoBlockScoreNum
} from "./UserPage.style";

import spatialImg from '../../assets/img/icon/spatial.png';
import handEyeImg from '../../assets/img/icon/handEye.png';
import attentionImg from '../../assets/img/icon/attention.png';
import memoryImg from '../../assets/img/icon/memory.png';

const ACHIEVE_LIST = [
    {
        title: "Welcome!"
    },
    {
        title: "Coordination"
    },
    {
        title: "Concentration"
    },
    {
        title: "Speed"
    },
    {
        title: "Memory"
    },
    {
        title: "Coordination Training mode"
    },
    {
        title: "Concentration Training mode"
    },
    {
        title: "Speed Training mode"
    },
    {
        title: "Memory Training mode"
    },
    {
        title: "It's only beginning"
    },
    {
        title: "5 Level (10 Level, ...)"
    },
]

const NOT_ACHIEVE_LIST = [
    {
        title: "5 Level - Coordination"
    },
    {
        title: "5 Level - Concentration"
    },
    {
        title: "5 Level - Speed"
    },
    {
        title: "5 Level - Memory"
    },
    {
        title: "Every day!"
    },
    {
        title: "Don’t stop"
    },
    {
        title: "Share for friends"
    }
]

const SCORE = [
    {
        title: "Focusing",
        session: "Сессий:",
        time: "Суммарное время:",
        difficultyLvl: "Уровень сложности:",
        scoreSession: 24,
        scoreTime: `5 час`,
        scoreLvl: 9
    },
    {
        title: "Reaction",
        session: "Сессий:",
        time: "Суммарное время:",
        difficultyLvl: "Уровень сложности:",
        scoreSession: 42,
        scoreTime: `7 час`,
        scoreLvl: 23
    },
    {
        title: "Memory",
        session: "Сессий:",
        time: "Суммарное время:",
        difficultyLvl: "Уровень сложности:",
        scoreSession: 12,
        scoreTime: `2 час`,
        scoreLvl: 4
    },
    {
        title: "Spatial orientation",
        session: "Сессий:",
        time: "Суммарное время:",
        difficultyLvl: "Уровень сложности:",
        scoreSession: 3,
        scoreTime: `1 час`,
        scoreLvl: 2
    },
]

export const UserPage = () => {
    return (
        <>
            <User>
                Пользователь:
            </User>
            <UserId>
                id52352
            </UserId>
            <Items>
                <InnerLeftSide>


                    <ItemLvlBlock>
                        <Lvl>
                            LVL: <LvlNum>21</LvlNum>
                        </Lvl>
                        <ItemLvlInner>
                            <ItemLvl>
                                <img src={spatialImg} alt=""/>
                                <ItemLvlInfoBox>
                                    <ItemLvlInfo
                                        color="#4EFF60"
                                    >
                                        Spatial abilitieS
                                    </ItemLvlInfo>
                                    <ItemLvlNum
                                        color="#4EFF60"
                                    >
                                        921
                                    </ItemLvlNum>
                                </ItemLvlInfoBox>
                            </ItemLvl>
                            <ItemLvl>
                                <img src={handEyeImg} alt=""/>
                                <ItemLvlInfoBox>
                                    <ItemLvlInfo
                                        color="#FDC70D"
                                    >
                                        HAND-EYE COORDINATION
                                    </ItemLvlInfo>
                                    <ItemLvlNum
                                        color="#FDC70D"
                                    >
                                        921
                                    </ItemLvlNum>
                                </ItemLvlInfoBox>
                            </ItemLvl>
                            <ItemLvl>
                                <img src={attentionImg} alt=""/>
                                <ItemLvlInfoBox>
                                    <ItemLvlInfo
                                        color="#AE7FFF"
                                    >
                                        HAND-EYE COORDINATION
                                    </ItemLvlInfo>
                                    <ItemLvlNum
                                        color="#AE7FFF"
                                    >
                                        921
                                    </ItemLvlNum>
                                </ItemLvlInfoBox>
                            </ItemLvl>
                            <ItemLvl>
                                <img src={memoryImg} alt=""/>
                                <ItemLvlInfoBox>
                                    <ItemLvlInfo
                                        color="#FB6E41"
                                    >
                                        HAND-EYE COORDINATION
                                    </ItemLvlInfo>
                                    <ItemLvlNum
                                        color="#FB6E41"
                                    >
                                        921
                                    </ItemLvlNum>
                                </ItemLvlInfoBox>
                            </ItemLvl>
                        </ItemLvlInner>
                        <ItemLvlScore>
                            НЕЙРО-БАЛЛЫ
                        </ItemLvlScore>
                    </ItemLvlBlock>
                    <ItemsInner>
                        {
                            SCORE.map(({title, session, scoreSession, scoreLvl, scoreTime, time, difficultyLvl}, index) => (
                                <ItemInfoBlock key={index}>
                                    <ItemInfoBlockScore>
                                        {title}
                                    </ItemInfoBlockScore>
                                    <ItemInfoBlockScore>
                                        {session}
                                        <ItemInfoBlockScoreNum>
                                            {scoreSession}
                                        </ItemInfoBlockScoreNum>
                                    </ItemInfoBlockScore>
                                    <ItemInfoBlockScore>
                                        {time}
                                        <ItemInfoBlockScoreNum>
                                            {scoreTime}
                                        </ItemInfoBlockScoreNum>
                                    </ItemInfoBlockScore>
                                    <ItemInfoBlockScore>
                                        {difficultyLvl}
                                        <ItemInfoBlockScoreNum>
                                            {scoreLvl}
                                        </ItemInfoBlockScoreNum>
                                    </ItemInfoBlockScore>
                                </ItemInfoBlock>
                            ))
                        }
                    </ItemsInner>

                </InnerLeftSide>
                <Attainment>
                    <AttainmentTitle>
                        ДОСТИЖЕНИЯ
                    </AttainmentTitle>

                    <AchievedTitle>
                        ПОЛУЧЕНО
                    </AchievedTitle>
                    <AchievedList>
                        {
                            ACHIEVE_LIST.map((item, index) => <AchievedItem key={index}>{item.title}</AchievedItem>)
                        }
                    </AchievedList>
                    <NotAchievedTitle>
                        НЕ ДОСТИГНУТО
                    </NotAchievedTitle>
                    <AchievedList>
                        {
                            NOT_ACHIEVE_LIST.map((item, index) => <NotAchievedItem key={index}>{item.title}</NotAchievedItem>)
                        }
                    </AchievedList>
                </Attainment>
            </Items>
        </>
    )
}
