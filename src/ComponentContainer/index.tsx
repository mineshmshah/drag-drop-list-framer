import React, { useState } from 'react';
import { ComponentContainerHeader, ComponentContainer } from './styles'

interface ExpandableComponentProps {
    title: string
}

const ContainerComponent = ({title} : ExpandableComponentProps) => {
    const onContainerClick = (e : React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    };

    return (
        <ComponentContainer onClick={e => onContainerClick(e)}>
            <ComponentContainerHeader>
                {title}
            </ComponentContainerHeader>
        </ComponentContainer>
    );
};

export default ContainerComponent;
