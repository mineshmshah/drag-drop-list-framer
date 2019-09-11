import React, { useState } from 'react';
import { ExpandableHeader, ExpandableContainer } from './styles'
import SubCard from '../SubCard'

interface ExpandableComponentProps {
    title: string,
}

const ExpandableComponent = ({title} : ExpandableComponentProps) => {
    const [isCardOpen, setIsCardOpen] = useState(false);

     const onCardClick = (e : React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsCardOpen(!isCardOpen)
    };

    return (
        <ExpandableContainer isCardOpen={isCardOpen} onClick={e => onCardClick(e)} onTouchStart={e => onCardClick(e)}>
            <ExpandableHeader>
                {title}
            </ExpandableHeader>
            {isCardOpen && <SubCard title={'SubCard Example'}/>}
        </ExpandableContainer>
    );
};

export default ExpandableComponent;
