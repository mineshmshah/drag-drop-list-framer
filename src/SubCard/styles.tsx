import styled from "styled-components/macro";
import { motion } from "framer-motion";

interface CardProps {
    isCardOpen: boolean
}

const SubCardContainer = styled(motion.div)<CardProps>`
  min-height: 40px;
  height: ${({isCardOpen}) => isCardOpen ? 'auto': '40px'};
  box-sizing: border-box;
  border-radius: 4px;
  background: ${({isCardOpen}) => isCardOpen ? '#D309E1': 'white'};
  margin-bottom: 8px;
`;

const SubCardHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  padding: 8px;
`;

export {
    SubCardContainer,
    SubCardHeader
}
