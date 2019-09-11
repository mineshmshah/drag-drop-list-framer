import React, { useState } from 'react';
import { ExpandableHeader, ExpandableContainer } from './styles'
import SubCard from '../SubCard'

interface ExpandableComponentProps {
    title: string,
}

const ExpandableComponent = ({title} : ExpandableComponentProps) => {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [isSubCardOpen, setIsSubCardOpen] = useState(false)

    const onSubCardClick = (e : React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsSubCardOpen(!isSubCardOpen)
    };

    return (
        <ExpandableContainer isCardOpen={isCardOpen} onTouchStart={(e) => onSubCardClick(e)} onClick={() => setIsCardOpen(!isCardOpen)}>
            <ExpandableHeader>
                {title}
            </ExpandableHeader>
            {isCardOpen && <SubCard title={'SubCard Example'}/>}
        </ExpandableContainer>
    );
};

export default ExpandableComponent;
