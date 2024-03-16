import styled, {keyframes}from 'styled-components/macro';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0px;
    margin: 30px 0 60px 0;
    min-height: 340px;
    background-color: #808080;
`;

export const GridChild = styled.div`
  background-color: #f2f2f2;
  padding: ${({ Padding }) => Padding || "20px"};
  ${({ BackGround }) => BackGround && `background-image: url(${`${process.env.PUBLIC_URL}/images/map.png`})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
    text-align: left;
    color: #000000;
    font-weight: bold;
    font-family: "Arial";
    font-size: 20px;
`;

export const Line = styled.p`
    text-align: left;
    color: #000000;
    font-family: "Arial";
    font-size: 15px;
    ${({ Margin }) => Margin && `margin: ${Margin}`};
`;