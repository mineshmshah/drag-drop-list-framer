import React, { useState } from 'react';
import { ExpandableHeader, ExpandableContainer, SubCard } from './styles'

interface ExpandableComponentProps {
    title: string
}

const ExpandableComponent = ({title} : ExpandableComponentProps) => {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [isSubCardOpen, setIsSubCardOpen] = useState(false)

    const onSubCardClick = (e : React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsSubCardOpen(!isSubCardOpen)
    };

    return (
        <ExpandableContainer isCardOpen={isCardOpen} onClick={() => setIsCardOpen(!isCardOpen)}>
            <ExpandableHeader>
                {title}
            </ExpandableHeader>
            {isCardOpen && <SubCard isCardOpen={isSubCardOpen} onClick={e => onSubCardClick(e)}/>}
        </ExpandableContainer>
    );
};

export default ExpandableComponent;
