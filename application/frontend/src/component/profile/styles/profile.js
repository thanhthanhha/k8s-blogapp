import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 100px;
`;

export const Column = styled.div`
    padding: ${({Padding}) => Padding || "10px"};
    min-width: ${({Width}) => Width || "200px"};
    min-height: 300px;
    margin: ${({Margin}) => Margin || "40px 70px"};
    display: flex;
    align-items: center;
    justify-content: ${({Start}) => Start ? "flex-start" : "center"};
    flex-direction: column;
`;

export const ProfileUser = styled.div`
    margin-bottom: 50px;
    margin-bottom: 20px;
    word-wrap: break-word;
`;

export const Text = styled.div`
    ${({ Bold }) => Bold && `font-weight: bold`};
    ${({ Color }) => Color && `color: ${Color}`};
    ${({ Margin }) => Margin && `margin: ${Margin}`};
    font-size: ${({ FontSize }) => (FontSize || `24px`)};
    line-height: normal;
    word-wrap: break-word;   
`;

export const ImageCrop = styled.div`
    width: ${({ Width }) => (Width || `50px`)};
    height: ${({ Height }) => (Height || `50px`)};
    ${({ Margin }) => Margin && `margin: ${Margin}`};
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
`;

export const Image = styled.img`
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
`;
