import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 15px 0 0;
  width: 100%;
  flex-direction: row;
  align-items: left;
  align-self: flex-end;
  border-top: 1px solid #888888;
  ${({ Transform }) => Transform && `transform: ${Transform}`};

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Line =  styled.div`
  border-top: 1px solid #888888;
  height: 10px;
  width: 90%;
  align-self: center;
`;
export const Tooltip = styled.span`
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  position: relative;
  padding: 5px 5px;
  z-index: 1;
  bottom: 140%;
  left: 80%;
  margin-left: -70px;
  margin-right: 10px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  &:hover {
    visibility: visible;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #696969;
  margin-bottom: 5px;
  font-size: 13px;
  text-decoration: none;
  align-self: right;
  padding: 0 0;
  width: 35px;
  &:hover ${Tooltip} {
    visibility: visible;
  }
  &:first-of-type {
    margin-left: 20px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
