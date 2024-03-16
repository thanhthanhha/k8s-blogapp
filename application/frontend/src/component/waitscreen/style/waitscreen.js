import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(100px);
    height: ${({ Height }) => (Height || `600px`)};;
`
export const Bigtext = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: red;
    justify-content: center;
    align-items: center;
`

export const LoadingGif = styled.img`
    height: ${({ Height }) => (Height || `400px`)};
    width: 400px;
    margin-top: ${({ Margin }) => (Margin || `100px`)};;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1000px) {
    height: 400px;
    width: 400px;
`


