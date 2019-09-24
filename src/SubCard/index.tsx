import React, { useState } from 'react';
import { SubCardContainer, SubCardHeader } from './styles'
import { ComponentContainer } from "../ComponentContainer/styles";

interface SubCardComponentProps {
    title: string,
    anyDragging: boolean,
    setAnyDragging: any,

}

const SubCardComponent = ({title, anyDragging, setAnyDragging} : SubCardComponentProps) => {
    const [isSubCardOpen, setIsSubCardOpen] = useState(false);
    const onTap = (e : Event) => {
        if(!anyDragging){
            setIsSubCardOpen(!isSubCardOpen)
        }
        setAnyDragging(false)
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
