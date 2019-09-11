import styled from "styled-components/macro";

const randomHeight = () => {
    const x = Math.floor(Math.random()*10) *10 + 55
    console.log(x)
    return x
};

const ComponentContainer = styled.div`
  box-sizing: border-box;
  background: white;
  border-top: 1px solid #DCDFE4;
  min-height: 40px;
  height: ${randomHeight()}px;
`;

const ComponentContainerHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  padding: 8px;
`;

export {
    ComponentContainer,
    ComponentContainerHeader
}
