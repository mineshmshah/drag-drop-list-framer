import styled from "styled-components/macro";
import { motion } from "framer-motion";


interface CardProps {
    isCardOpen: boolean
}

const ExpandableContainer = styled(motion.div)<CardProps>`
  min-height: 40px;
  height: ${({isCardOpen}) => isCardOpen ? 'auto': '40px'};
  //max-height: ${({isCardOpen}) => isCardOpen ? 'auto': '40px'};
  box-sizing: border-box;
  width: 350px;
  border-radius: 4px;
  background: ${({isCardOpen}) => isCardOpen ? '#ffc591': '#FFF'};
  padding: 8px;
`;

const ExpandableHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  padding-bottom: 8px;
`;

const SubCard = styled.div<CardProps>`
  min-height: 40px;
  height: 40px;
  border-radius: 4px;
  background: ${({isCardOpen}) => isCardOpen ? '#D309E1': 'white'};
`;

export {
    ExpandableContainer,
    ExpandableHeader,
    SubCard
}
