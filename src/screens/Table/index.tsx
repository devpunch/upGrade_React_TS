import {Inner,InputSearch,MenuUp,Trash} from './Tabel.styled';
import {BoardWrapper} from "./TableBoard.styled";
import {Row, Cell} from "./TableItem.styled";
import {useRef, useState} from "react";
import {TableRow} from "./components/TableRow";
import CheckBox from "./components/CheckBox";

import {ArrowDown, Shadow} from "./TableBoard.styled";

const DATA_TABLE = [
    {
        id: 95832,
        date: "13-01-2021",
        active: "13-01-2020",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95822,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95812,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95836,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95839,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95849,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95859,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95869,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95879,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95889,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95899,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
    {
        id: 95831,
        date: "13-01-2021",
        active: "13-01-2021",
        lvl: 87,
        session: 1245,
        hourVR: 452,
        platform: "Steam",
        deviceVR: "HTC Vive Pro",
        deviceMobile: "iOS"
    },
]


const TablePage = () => {
    const [show, setShow] = useState(true);
    const [data, setDate] = useState(() => DATA_TABLE.map(item => ({...item, active: false})));
    const listInnerRef:any = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setShow(false)
            } else {
                setShow(true)
            }
        }
    };

    const handleTableRowClick = (item: any) => {
        console.log("####: item", item);
    }

    const handleAllRowClick = (check: boolean) => {
        setDate(prevState => prevState.map(item => ({...item, check: true})))
    }

    const handleArrowDownClick = () => {
        const { clientHeight } = listInnerRef.current;
        listInnerRef.current.scrollIntoView({ behavior: "smooth" });
        console.dir(listInnerRef.current);
        listInnerRef.current.scrollTop = clientHeight;


    }

    return (
        <>
            <Inner
                justify={"space-between"}
                marginTop="62px"
            >
                <InputSearch placeholder={"Поиск"}/>
                <Inner>
                    <MenuUp>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 8L19 3L15 8H18V20H20V8H23ZM14 20V18H3V20H14ZM14 11V13H3V11H14ZM12 6V4H3V6H12Z"
                                  fill="white"/>
                        </svg>

                    </MenuUp>
                    <Trash>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 4.8H18V1.2C18 0.537258 17.4627 0 16.8 0H7.2C6.53726 0 6 0.537258 6 1.2V4.8H0V7.2H2.4V22.8C2.4 23.4627 2.93726 24 3.6 24H20.4C21.0627 24 21.6 23.4627 21.6 22.8V7.2H24V4.8ZM4.8 7.2H19.2V21.6H4.8V7.2ZM13.6968 14.4L15.8184 16.5216L14.1216 18.2184L12 16.0968L9.8784 18.2184L8.1816 16.5216L10.3032 14.4L8.1816 12.2784L9.8784 10.5816L12 12.7032L14.1216 10.5816L15.8184 12.2784L13.6968 14.4ZM8.4 4.8V2.4H15.6V4.8H8.4Z"
                                fill="#fff"/>
                        </svg>
                    </Trash>
                </Inner>
            </Inner>
            <BoardWrapper
                onScroll={() => onScroll()} ref={listInnerRef}
            >
                <Row>
                    <Cell>
                        <CheckBox
                            onChange={handleAllRowClick}
                        />
                    </Cell>
                    <Cell>
                        ID
                    </Cell>
                    <Cell>
                        Дата регистрации
                    </Cell>
                    <Cell>
                        Последняя
                        активность
                    </Cell>
                    <Cell>
                        LvL
                    </Cell>
                    <Cell>
                        Кол-во
                        сессий
                    </Cell>
                    <Cell>
                        Суммарное
                        время в VR
                    </Cell>
                    <Cell>
                        VR Платформа
                    </Cell>
                    <Cell>
                        VR Устройство
                    </Cell>
                    <Cell>
                        Мобильное
                        приложение
                    </Cell>
                    <Cell>

                    </Cell>
                </Row>
                {
                    data.map(item =>
                        <TableRow
                            selected={item.active}
                            key={item.id}
                            item={item}
                            onClick={handleTableRowClick}/>)
                }

            </BoardWrapper>
            <Shadow show={show}/>
            <ArrowDown 
                show={show}
                onClick={handleArrowDownClick}
            />
        </>
    )
}

export default TablePage;