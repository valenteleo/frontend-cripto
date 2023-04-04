import { createGlobalStyle } from 'styled-components'
import { type CustomThemeColor } from './context/custom-theme.context'
interface Props {
  theme: CustomThemeColor
}

export default createGlobalStyle<Props>`
    body {
        background-color: ${(props) => props.theme === 'DARK' ? '#0f0f0f' : '#EFF2F5'} ;
        font-weight: bold;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;

        @media screen and (max-width: 768px) {
            &::-webkit-scrollbar{
            display: none;
            }
        }
    } 
`
