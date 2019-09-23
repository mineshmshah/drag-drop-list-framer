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
    const onTap = (e : Event) => {
        e.stopImmediatePropagation();
        setIsSubCardOpen(!isSubCardOpen)
    };

    return (
        <SubCardContainer
            isCardOpen={isSubCardOpen}
            onTap={onTap}
        >
            <SubCardHeader>
                {title}
            </SubCardHeader>
            {isSubCardOpen && <ComponentContainer title={'Some content'}/>}
        </SubCardContainer>
    );
};

export default SubCardComponent;
