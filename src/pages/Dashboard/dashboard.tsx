import styled from 'styled-components'

export const Container = styled.div`
    font-weight: bold;
`
export const Info = styled.p`
    height: 16px;
    width: 16px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: #A6B0C3;
    text-align: center;
    font-family: Times New Roman;
    font-style: italic;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        margin-left: -1em;
    }
`
export const Symbol = styled.span`
    color: #A7B1C2;
    margin: 0 0 0 5px;
    font-weight: 400 !important;
`
export const Favorite = styled.div`
    display: inline-block;
    padding: 10px 0 0 1em;
    max-width: 91%;
`
export const Card = styled.span`
    display: flex;
    margin: 0 1em 0 0;
    padding: 2px;
    height: 118px;
    width: 232px;
    border-radius: 8px;
    border: 1px solid #E5E5E5;
    background-color: #FFFFFF;

    &:first-child{
        margin: 0 -3em 0 4em;
    }
`
export const FavoriteTitle = styled.p`
    padding: 0 5em;
`
export const Left = styled.div`
    margin-top: 10px;
    padding: 0 0 0 .1em;
    text-align: center;
    font-size: 60px;
    font-weight: 700;
    color: #1E3146;
`
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em 0 1em 1.4em;    
`

export const TypeCoin = styled.span`
    font-size: 28px;
    line-height: 36.4px;
    color: #1E3146;
`
export const Money = styled.span`
    font-size: 16px;
    color: #A7B1C2;
    font-weight: 400;
    margin-bottom: 5px;
`
export const Variant = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #16C784;
`
export const FavoriteImg = styled.img`
    margin-bottom: 10px;
`
export const Buy = styled.span`
    padding: 8px 10px;
    border-radius: 8px;
    gap: 16px;
    background-color: #E7F0FF;
    color: #3C67F7;
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
`
