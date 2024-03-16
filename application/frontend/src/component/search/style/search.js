import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({Justify}) => Justify || "center"};
    width: 100%;
    height: 70vh;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

export const SearchTitle = styled.div`
    font-family: Arvo;
    font-size: 27px;
    margin: 0 0 50px 0;
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    width: ${({Width}) => Width || "50%"};
    margin: 0 auto;
`;

export const SearchBar = styled.input`
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 30px;
    border: none;
    font-size: 20px;
    transition: all 0.5s ease;
    box-shadow: 0 0 10px #d9d9d9;
    &:focus {
        outline: none;
        box-shadow: 0 0 50px #d9d9d9;
    }
    &:hover{
        box-shadow: 0 0 30px #d9d9d9;
    }
`;

export const SearchButton = styled.button`
    position: absolute;
    right: ${({Right}) => Right || "15px"};
    border: none;
    background-color: transparent;
    font-size: 2rem;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const Line = styled.span`
    width: 0;
    height: 30px;
    border-left: 1px solid #5f6368;
    right: ${({Right}) => Right || "54px"};
    position: relative;
`;

export const TopSearchCon = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    height: 90px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 2rem;
    padding: 0 0 50px 0;
    border-bottom: solid 1px #808080;
`;

export const ButtonContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ResultCon = styled.div`
    height: 100%;
    width: 100%;
    padding: 10px 30px;
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const TextResult =styled.div`
    margin: 30px 0 50px 80px;
    color: #9aa0a6;
    text-align: right;
    font-size: 15px;
    min-width: 200px;
`;

