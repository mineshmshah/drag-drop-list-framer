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
    const onTap = (e : Event) => {
        e.stopImmediatePropagation();
        setIsCardOpen(!isCardOpen)
    };

    return (
        <ExpandableContainer
            onMouseDown={()=>console.log('hello')}
            isCardOpen={isCardOpen}
            onTap={onTap}
        >
            <ExpandableHeader>
                {title}
            </ExpandableHeader>
            {isCardOpen && <SubCard title={'SubCard Example'} isDragging={isDragging}/>}
        </ExpandableContainer>
    );
};

export default ExpandableComponent;
