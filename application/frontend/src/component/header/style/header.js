import styled, {keyframes}from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction : column;
    background: rgb(255,255,255);
    background: linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,204,1) 99%);
    
    @media (max-width: 1100px) {
      ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && `background: none;`}
    }

`;

export const Container = styled.div`
      display: flex; 
      margin: 0 60px;
      height: 150px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 5px solid #900;
      padding: 0 30px 0;
      margin-bottom: 30px;
      

      a {
        display: flex;
      }
    

      @media (max-width: 1000px) {
        margin: 0 30px;
      }
`;

export const Textlink = styled.p`
    color: #000000;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;
    user-select: none;
    transition: 400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) text-shadow,
    400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) letter-spacing;

    &:hover {
      text-shadow: 1px 1px 1px #000;
      letter-spacing: 3px;
    }
    &:hover:before {
      transform: scaleX(1);
    }
    
    &:before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: #fff;
      box-shadow: 1px 1px 1px #000;
      transform: scaleX(0);
      transition: 400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) transform;
    }

    &:last-of-type {
        margin-right: 0;
      }
`;

export const TextAccLink = styled.p`
    color: #000000;
    text-decoration: none;
    margin-right: 30px;
    font-size: 16px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
      }
`;

export const Link = styled(ReactRouterLink)`
    color: #000000;
    text-decoration: none;
    margin-right: 30px;
    font-size: 14px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
      }
`;


export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    min-width: ${({ Width }) => Width || "calc(70% - 20px)"};
`;



export const Dropdown = styled.div`
display: none;
position: absolute;
background-color: white;
padding: 10px;
width: 7rem;
top: 40px;
right: ${({ Right }) => Right || "73%"};
transition: all 0.3s ease-in-out;

${Group}:last-of-type ${Link} {
  cursor: pointer;
}

${Group} {
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${Link} {
    cursor: pointer;
  }

}

button {
  margin-right: 10px;
}

p {
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 0;
}
`;

export const DropdownGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;

    &:hover ${Dropdown} {
      display: grid;
      place-items: center;;
    }
`;

export const Profile = styled.div`
      display:flex;
      align-items: center;
      position: relative;
    
      button {
        cursor: pointer;
      }

      &:hover > ${Link} {
        font-weight: bold;
      }
`;

export const Account = styled.div`
      display:flex;
      align-items: flex-end;
      margin-left: 20px;
      position: relative;
      justify-content: flex-start;
    
      button {
        cursor: pointer;
      }
      &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
      }

      &:hover > ${Link} {
        font-weight: bold;
      }
`;

export const Icon = styled.img`
height: 40px;
width: 60px;
margin-right: 40px;
border-style: solid;

@media (min-width: 1000px) {
  height: 40px;
  width: 60px;
}
`;

export const Logo = styled.img`
height: 40px;
width: 60px;
margin-right: 40px;

@media (min-width: 1449px) {
  height: 40px;
  width: 60px;
}
`;

const ShineAni = keyframes`
to {
    background-position: 200% center;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background: #900;
  width: 90px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  justify-content: flex-start;
`;

export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  bottom: 5px;
`;

export const User = styled.img`
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
    
`;