import React, {useMemo} from 'react';
import {Row, Cell, Arrow} from '../../TableItem.styled';

import ArrowRight from "../../../../assets/img/icon/arrow-right-fill.svg";
import CheckBox from "../CheckBox";
import {InfoToolTip} from "../../../../components/InfoToolTip";

export const TableRow: React.FC<any> = ({item}) => {

    const column = useMemo(() => {
        return [
            item.id,
            item.date,
            item.active,
            item.lvl,
            item.session,
            `${item.hourVR} час.`,
            item.platform,
            item.deviceVR,
            item.deviceMobile,
        ];
    }, [item]);

    const handleCheckBoxClick = () => {

    }

    return (
        <Row>
            <Cell>
                <CheckBox
                    onChange={handleCheckBoxClick}
                />
            </Cell>
            {
                column.map((item, index) => {
                    if ( index === 3 ) {
                        return <Cell key={index}> {item} <InfoToolTip/> </Cell>
                    }
                    return (<Cell key={index}>{item}</Cell>)
                })
            }
            <Cell>
                <Arrow>
                    <img src={ArrowRight} alt="arrow icon"/>
                </Arrow>
            </Cell>
        </Row>
    )
}