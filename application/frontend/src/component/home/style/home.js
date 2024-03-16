import styled, {keyframes}from 'styled-components/macro';

export const Container = styled.div`
    max-height: 1500px;
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`;

export const PicCon = styled.div`
    display: flex;
    min-height: 500px;
    margin-top: 100px;
    width: 100%;
    aligned-item: center;
    justify-content: center;
`;

export const PicLeft = styled.img`
    width: 30%;
    object-fit: cover;
    height: 300px;
    transform: translate(20px,120px);
    z-index: 10;
`;

export const PicRight = styled.img`
    width: 30%;
    object-fit: cover;
    max-width: 500px;
    height: 300px;
    transform: translateX(-20px);
`;

export const Title = styled.p`
  text-align: center;
  color: #000000;
  font-weight: bold;
  font-family: Arvo-Bold;
  font-size: ${({FontSize}) => FontSize || "34px"};
  max-width: 350px;
  align-self: ${({Align}) => Align || "center"};
  ${({ Margin }) => Margin && `margin: ${Margin}`};
`;

export const TextBlock = styled.p`
  text-align: center;
  font-size: 16px;
  max-width: 700px;
  align-self:center;
  ${({ Margin }) => Margin && `margin: ${Margin}`};
`;

export const ProfileContainer  = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 300px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 145px;
  border: red;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px #888888;
  }
`
export const Link = styled.a`
  width: 170px;
  text-align: center;
  cursor: pointer;
  aligned-item: flex-start;
  color: #FFFFFF;
  text-decoration: none;
  background: #900;
  padding-top: 5px;
  height: 30px;
`
export const Image = styled.img`
  width: 170px;
  padding: 10px 10px;
  overflow: hidden;
  padding: 19px 23px;
  display: inline;
  background: #ACC8E5;
`
export const Background = styled.div`
  min-height: 500px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-image: url(${`${process.env.PUBLIC_URL}/images/backgroun.jpg`});
  background-repeat: no-repeat;
  background-size: cover;
  over-flow: hidden;
  transition: background-image 0.7s ease-in-out;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to top, white 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0) 70%);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 1;
  }

  &:hover::before {
    opacity: 0.5;
  }
`
