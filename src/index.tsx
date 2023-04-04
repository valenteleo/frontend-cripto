import ReactDOM from 'react-dom/client'
import App from './App'
import { CustomThemeProvider } from './context/custom-theme.context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(

  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
)
