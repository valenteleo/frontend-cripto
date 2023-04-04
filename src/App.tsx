import PrimaryHeader from './components/Header'
import AppRouter from './routes/routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './styles'
import { useCustomTheme } from './context/custom-theme.context'
import { CoinProvider } from './context/coin-data.context'

function App () {
  const customTheme = useCustomTheme()
  return (
    <>
      <CoinProvider>
        <GlobalStyle theme={customTheme.theme} />
        <ToastContainer autoClose={3000} />
        <PrimaryHeader />
        <AppRouter />
      </CoinProvider>
    </>
  )
}

export default App
