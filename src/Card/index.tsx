import React, { useState } from 'react';
import { ExpandableHeader, ExpandableContainer } from './styles'

interface ExpandableComponentProps {
    title: string,
    children?: any,
    anyDragging? : boolean,
    setAnyDragging: any,
}

const ExpandableComponent = ({title, children, anyDragging, setAnyDragging} : ExpandableComponentProps) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const onTap = (e : Event) => {
        if(!anyDragging){
            setIsCardOpen(!isCardOpen)
        }
        setAnyDragging(false)
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
