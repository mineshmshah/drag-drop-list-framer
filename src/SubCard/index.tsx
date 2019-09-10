import React, { useState } from 'react';
import { SubCardContainer, SubCardHeader } from './styles'

interface ExpandableComponentProps {
    title: string
}

const ExpandableComponent = ({title} : ExpandableComponentProps) => {
    const [isSubCardOpen, setIsSubCardOpen] = useState(false)

    const onSubCardClick = (e : React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsSubCardOpen(!isSubCardOpen)
    };

    return (
        <SubCardContainer isCardOpen={isSubCardOpen} onClick={(e) => onSubCardClick(e)}>
            <SubCardHeader>
                {title}
            </SubCardHeader>
        </SubCardContainer>
    );
};

export default ExpandableComponent;
