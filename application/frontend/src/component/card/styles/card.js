import styled from 'styled-components/macro';

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  min-height: 700px;
  align-self: flex-start;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-left: 40px;
`;

export const Meta = styled.div`
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`;

export const Text = styled.div`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  margin-left: 100px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    margin-left: 30px;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-top: 30px;
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const Background = styled.div`
min-height: 700px;
position: relative;
width: 100%;
display: flex;
align-items: flex-end;
flex-direction: column;
background-image: url(${`${process.env.PUBLIC_URL}/images/landscape.jpeg`});
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
  background-image: linear-gradient(to right, white 0%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0) 90%);
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 1;
}

&:hover::before {
  opacity: 0.5;
}
`;