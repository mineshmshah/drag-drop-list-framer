import React, { useState } from 'react';
import { SubCardContainer, SubCardHeader } from './styles'
import { ComponentContainer } from "../ComponentContainer/styles";
import {ExpandableContainer} from "../Card/styles";

interface SubCardComponentProps {
    title: string,
    isDragging: boolean
}

const SubCardComponent = ({title, isDragging} : SubCardComponentProps) => {
    const [isSubCardOpen, setIsSubCardOpen] = useState(false);
    const [hasDragged, setHasDragged] = useState(false)

    const onPointerDown = (e : React.PointerEvent<HTMLElement>) => setHasDragged(false);
    const onPointerMove = (e : React.PointerEvent<HTMLElement>) => {
        if(isDragging) setHasDragged(true)
    };
    const onPointerUp = (e : React.PointerEvent<HTMLElement>) => {
        if(!hasDragged) {
            e.stopPropagation();
            setIsSubCardOpen(!isSubCardOpen)
        }
    };
    // const onSubCardClick = (e : React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    //     e.stopPropagation();
    //     setIsSubCardOpen(!isSubCardOpen)
    // };

    return (
        <SubCardContainer
            isCardOpen={isSubCardOpen}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={e => onPointerUp(e)}
        >
            <SubCardHeader>
                {title}
            </SubCardHeader>
            {isSubCardOpen && <ComponentContainer title={'Some content'}/>}
        </SubCardContainer>
    );
};

export default SubCardComponent;
