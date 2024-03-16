import styled, {keyframes}from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';


export const Title = styled.p`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-left: 56px;
  justify-content: center;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Link = styled(ReactRouterLink)`
      color: #000000;
      text-decoration: none;

  margin-right: 56px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
      }
`;

export const Text = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #000000;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
`;

export const BorderCon = styled.div`
  border: 1px solid #ccc;
  padding: 0.01em 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 900px;
`;

export const Meta = styled.div`
  bottom: 0;
  padding: 10px;
  margin-bottom: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;

`;

export const ChapterHeader = styled.h3`

`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const HeaderCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
`

export const PageButton = styled.div`
  background: #900;
  color: white;
  border-radius: 3px;
  margin-left: 15px;
  padding: 0.3em;
  text-align: center;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-left: 0;
  }
`;

export const Select = styled.select`
  height: 35px;
  width: 150px;
  background: white;
  color: gray;

  font-size: 14px;
  border: none;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const Option = styled.option`
  color: black;
  background: white;
  width: inherit;
  overflow: hidden;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
  &:hover {
    font-weight: bold;
  }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;    
`;

export const Dropdown = styled.div`
display: ${({ useclick }) => (useclick ? 'flex' : 'none')};
flex-direction: column;
background-color: white;
padding: 10px;
width: 200px;
top: 32px;
right: 10px;
align-items: center;


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






