import React, { useState } from 'react';
import { SubCardContainer, SubCardHeader } from './styles'
import { ComponentContainer } from "../ComponentContainer/styles";
import {ExpandableContainer} from "../Card/styles";

interface SubCardComponentProps {
    title: string,
}

const SubCardComponent = ({title} : SubCardComponentProps) => {
    const [isSubCardOpen, setIsSubCardOpen] = useState(false);
    const onTap = (e : Event) => {
        e.stopImmediatePropagation();
        setIsSubCardOpen(true)
    };

    return (
        <SubCardContainer
            isCardOpen={isSubCardOpen}
            onTap={onTap}
            onDragEnd={event => event.stopImmediatePropagation()}
            onDrag={event => event.stopImmediatePropagation()}
            onDragStart={event => event.stopImmediatePropagation()}
        >
            <SubCardHeader>
                {title}
            </SubCardHeader>
            {isSubCardOpen && <ComponentContainer title={'Some content'}/>}
        </SubCardContainer>
    );
};

export default SubCardComponent;
