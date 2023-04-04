import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    padding: 2em 0 3em 3em;

    @media screen and (max-width: 768px) {
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        padding: 2em 3em 3em 3em;
    }
`
export const Top = styled.div`
    max-width: 90%;
    padding: 2em 0 0 3em;
`

export const CoinName = styled.span`
`
export const CoinInfo = styled.span`

`
export const Name = styled.span`
    font-size: 40px;
    font-weight: 700;
`
export const Symbol = styled.span`
    font-size: 12px;
    color: #A7B1C2;
    padding: 8px 10px;
    background-color: #EFF2F5;
`
export const Classification = styled.p`
    padding: 8px;
    text-align: center;
    background-color: #80899C;
    border-radius: 8px;
    font-weight: 500;
    color: #FFFFFF;
    font-size: 16px;
`
export const NameSymbol = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #A7B1C2;
`
export const Price = styled.span`
    font-size: 40px;
    font-weight: 700;
    text-align: right;
`
export const Percentage = styled.span`
    margin-left: 5px;
    background-color: #16C784;
    padding: 1px 12px;
    border-radius: 8px;
    color: #F8FAFD;
`

export const Estatistic = styled.p`
    color: #A7B1C2;
    font-weight: 400;
`

export const EstatisticPer = styled.span`
    color: #16C784;
    margin: 0 0 0 4em;
`

export const FinalContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Followers = styled.span`
    display: flex;
    flex-direction: column;
    color:  #A7B1C2;
    margin: 0 1em 0 0;
    padding: 2px;
    height: 118px;
    width: 319px;
    border-radius: 8px;
    border: 1px solid #E5E5E5;
    background-color: #FFFFFF;
`
export const GitFol = styled.p`
    margin: 1em 0 1em .6em;
`
export const GitStar = styled.p`
    margin: 1em 0 1em .6em;
`
export const GitFork = styled.p`
    margin: 1em 0 1em .6em;
`
export const FolSp = styled.span`
    color: #1E3146;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin: 5px 0 0 .6em;
`
export const StarSp = styled.span`
    color: #1E3146;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin: 5px 0 0 .6em;
`
export const ForkSp = styled.span`
    color: #1E3146;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin: 5px 0 0 .6em;
`
export const Stars = styled.span`
    display: flex;
    flex-direction: column;
    color:  #A7B1C2;
    margin: 0 1em 0 0;
    padding: 2px;
    height: 118px;
    width: 319px;
    border-radius: 8px;
    border: 1px solid #E5E5E5;
    background-color: #FFFFFF;

    p{
        margin: 1em 0 1em .6em;
    }

    span{
        color: #1E3146;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        margin: 5px 0 0 .6em;
    }
`
export const Forks = styled.span`
    display: flex;
    flex-direction: column;
    color:  #A7B1C2;
    margin: 0 1em 0 0;
    padding: 2px;
    height: 118px;
    width: 319px;
    border-radius: 8px;
    border: 1px solid #E5E5E5;
    background-color: #FFFFFF;

    p{
        margin: 1em 0 1em .6em;
    }

    span{
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #1E3146;
        margin: 5px 0 0 .6em;
    }
`
