import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ExpandableHeader, ExpandableContainer } from './styles'
import SubCard from '../SubCard'

interface ExpandableComponentProps {
    title: string,
    isDragging: boolean
}

const ExpandableComponent = ({title, isDragging} : ExpandableComponentProps) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [hasDragged, setHasDragged] = useState(false)

    const onPointerDown = (e : React.TouchEvent<HTMLElement>| React.PointerEvent<HTMLElement>) => setHasDragged(false);
    const onPointerMove = (e : React.TouchEvent<HTMLElement> | React.PointerEvent<HTMLElement>) => {
        if(isDragging) setHasDragged(true)
    };
    const onPointerUp = (e : React.TouchEvent<HTMLElement>| React.PointerEvent<HTMLElement> ) => {
        if(!hasDragged) {
            e.stopPropagation();
            setIsCardOpen(!isCardOpen)
        }
    };
    //
    //  const onCardClick = (e : React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    //      console.log(isDragging)
    //      if(true) {
    //          e.stopPropagation();
    //          setIsCardOpen(!isCardOpen)
    //      }
    // };

    return (
        <ExpandableContainer
            isCardOpen={isCardOpen}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={e => onPointerUp(e)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={e => onPointerUp(e)}
        >
            <ExpandableHeader>
                {title}
            </ExpandableHeader>
            {isCardOpen && <SubCard title={'SubCard Example'} isDragging={isDragging}/>}
        </ExpandableContainer>
    );
};

export default ExpandableComponent;
