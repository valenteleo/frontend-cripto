import styled from "styled-components";

export const Header = styled.header`
    height: 75px;
    max-width: 100%;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFFFFF;
`;

export const Logo = styled.img`
    height: 58px;
    width: 243px;
    top: 15px;
    
`;

export const Anchors = styled.div`
    display: flex;
`;

export const List = styled.li`
    list-style: none;
    cursor: pointer;
    margin: 0 10px;
    font-size: 14px;
    
    &:last-child{
        margin-right: 3em;
    }

    &:hover{
        text-decoration: underline;
    }

`;

export const Paragraph = styled.p`

`;

export const FirstImage = styled.img`
    width: 22.5px;
    height: 20px;
    margin: 0 .7em 0 0;
`;

export const PrimaryButton = styled.button`
    padding: 11px 16px;
    border: none;
    border-radius: 8px;
    background: #3C67F7;
    color: #FFFFFF;
    cursor: pointer;
    text-align: center;
`;
export const FieldInput = styled.div`
    display: flex;
    padding: 11px 16px;
    border: none;
    border-radius: 8px;
    background: #EFF2F5;
`;

export const InputSearch = styled.input`
    border: none;
    background-color: transparent;
`;


export const SearchImage = styled.img`
    height: 16px;
    margin: 0 5px 0 0;
`;

export const Text = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: #A7B1C2;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
`;