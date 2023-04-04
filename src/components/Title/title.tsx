import styled from 'styled-components'

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    padding: 10px;
    margin: 26px auto;

    @media screen and (max-width: 768px) {
        margin-top: 5em;
    }
    
`

export const Message = styled.span`
    font-size: 24px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`
