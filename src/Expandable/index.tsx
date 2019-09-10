import React from 'react';
import { ExpandableHeader, ExpandableContainer } from './styles'

interface ExpandableComponentProps {
    title: string
}

const ExpandableComponent = ({title} : ExpandableComponentProps) => (
    <ExpandableContainer>
        <ExpandableHeader>
            {title}
        </ExpandableHeader>
    </ExpandableContainer>
);

export default ExpandableComponent;
