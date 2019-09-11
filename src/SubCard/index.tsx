import React, { useState } from 'react';
import { SubCardContainer, SubCardHeader } from './styles'
import { ComponentContainer } from "../ComponentContainer/styles";

interface SubCardComponentProps {
    title: string
}

const SubCardComponent = ({title} : SubCardComponentProps) => {
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
            {isSubCardOpen && <ComponentContainer title={'Some content'}/>}
        </SubCardContainer>
    );
};

export default SubCardComponent;
