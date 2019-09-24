import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ExpandableHeader, ExpandableContainer } from './styles'
import SubCard from '../SubCard'

interface ExpandableComponentProps {
    title: string,
    children?: any
}

const ExpandableComponent = ({title, children} : ExpandableComponentProps) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const onTap = (e : Event) => {
        e.stopImmediatePropagation();
        setIsCardOpen(true)
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
            {isCardOpen && children}
        </ExpandableContainer>
    );
};

export default ExpandableComponent;
