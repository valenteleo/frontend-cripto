import styled from 'styled-components'

export const Header = styled.header`
    height: 75px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFFFFF;

    @media screen and (max-width: 768px) {
        width: 100%;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        position: fixed;
        z-index: 99;
    }
`

export const SideMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        margin-left: -3.5em;
    }
`

export const Logo = styled.img`
    height: 58px;
    width: 243px;
    top: 15px;
`

export const Anchors = styled.div`
    display: flex;
`

export const ListTop = styled.li`
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

    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const Paragraph = styled.p`
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const FirstImage = styled.img`
    width: 22.5px;
    height: 20px;
    margin: 0 .7em 0 0;
`

export const PrimaryButton = styled.button`
    margin: 0 0 0 1em;
    padding: 11px 16px;
    border: none;
    border-radius: 8px;
    background: #3C67F7;
    color: #FFFFFF;
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const FieldInput = styled.div`
    margin: 0 0 0 1em;
    display: flex;
    padding: 11px 16px;
    border: none;
    border-radius: 8px;
    background: #EFF2F5;

    @media screen and (max-width: 768px) {
        width: 4em;
        margin-left: -4em;
    }
`

export const InputSearch = styled.input`
    border: none;
    background-color: transparent;

    &:focus-within{
        outline: none;
    }

    @media screen and (max-width: 768px) {
        width: 3em;
    }
`

export const SearchImage = styled.img`
    height: 16px;
    margin: 0 5px 0 0;
`

export const Text = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: #A7B1C2;
    color: #FFF;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const FieldRight = styled.div`
    display: flex;
    align-items: center;
`

export const MenuDivider = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0 0 1.5em;
        max-width: 75%;
    }
`
