import
{
  Container,
  Info,
  Symbol,
  Favorite,
  Card,
  FavoriteTitle,
  Left,
  Right,
  TypeCoin,
  Money,
  Variant,
  FavoriteImg,
  Buy
} from './dashboard'
import
{
  Switch,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import PageTitle from '../../components/Title'
import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { makeStyles } from '@material-ui/core/styles'
import { useCustomTheme } from '../../context/custom-theme.context'
import { type Coin } from '../../services/coingecko/interfaces/coins'
import { useCoinDataContext } from '../../context/coin-data.context'
import { USDollar } from '../../utils/formatters'
import { useNavigate } from 'react-router-dom'

export default function Dashboard (props: any) {
  const { coins } = useCoinDataContext()
  const [favoriteList, setFavoriteList] = useState<Coin[]>([])
  const [dark, setDark] = useState<boolean>(false)
  const customTheme = useCustomTheme()
  const navigate = useNavigate()

  useEffect(() => {
    customTheme.setTheme(dark ? 'DARK' : 'LIGHT')
  }, [customTheme, dark])

  useEffect(() => {
    const getStorage = localStorage.getItem('@favorites_coins')
    if (getStorage !== null) {
      const favoritesCoins = JSON.parse(getStorage)
      setFavoriteList(favoritesCoins)
    }
  }, [])

  const idsFavorited = new Set<string>(favoriteList.map(item => item.id))

  const handleAddFavorite = useCallback((row: Coin) => {
    const has = favoriteList.some(f => f.id === row.id)
    if (has) {
      toast.warn('Esse item já está favoritado.')
    } else {
      const newList = [...favoriteList, row]
      setFavoriteList(newList)
      localStorage.setItem('@favorites_coins', JSON.stringify(newList))
      toast.success('Adicionado aos favoritos.')
    }
  }, [favoriteList])

  const useStyles = makeStyles({
    rootGreen: {
      color: '#16C784',
      fontWeight: 600
    },

    rootRed: {
      color: '#EA3943',
      fontWeight: 600
    }
  })

  const classes = useStyles()

  const handleChecked = () => {
    if (dark) {
      setDark(false)
    } else {
      setDark(true)
    }
  }

  return (
    <Container>
      <PageTitle name="Preço das criptomoedas por valor de mercado">
        <FormControlLabel
          style={{ color: '#A7B1C2', fontWeight: '400' }}
          value="start"
          control={<Switch onClick={handleChecked} color="primary" checked={dark} />}
          label="Hightlights"
          labelPlacement="start"
        />
      </PageTitle>

      {
        favoriteList.length === 0
          ? <FavoriteTitle style={{ fontWeight: '600' }}>Selecione itens abaixo para adicionar à sua lista de favoritos</FavoriteTitle>
          : <FavoriteTitle>Favoritos</FavoriteTitle>
      }
      {favoriteList.map(f => {
        return (
          <>
            <Favorite>
              <Card>
                <Left> {f.market_cap_rank}
                  <FavoriteImg src={require('../../assets/Favorito ativo.png')} alt="Favorito Ativo" />
                </Left>
                <Right>
                  <TypeCoin>{f.symbol.toUpperCase()} </TypeCoin>
                  <Money>R$ {f.market_cap}</Money>
                  <Variant>{f.price_change_percentage_24h}</Variant>
                </Right>
              </Card>
            </Favorite>
          </>
        )
      })}

      <TableContainer style={{ maxWidth: '90%', padding: '10px 4em', marginTop: '1.5em' }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: '700' }} align="center">#</TableCell>
              <TableCell style={{ fontWeight: '700' }}>Nome</TableCell>
              <TableCell style={{ fontWeight: '700' }} align="right">Preço</TableCell>
              <TableCell style={{ fontWeight: '700' }} align="right">24h %</TableCell>
              <TableCell style={{ fontWeight: '700' }} align="right">7d %</TableCell>
              <TableCell style={{ fontWeight: '700' }} align="center">Valor de mercado</TableCell>
              <Info>i</Info>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((row: Coin) => (
              <TableRow key={row.id}>
                <TableCell align="center"> <StarBorderIcon style={{ border: '1px solid #A7B1C2', borderRadius: '8px', fontSize: '20px', color: idsFavorited.has(row.id) ? '#FAAB00' : '#A7B1C2', cursor: 'pointer' }} onClick={() => { handleAddFavorite(row) }} /> {row.market_cap_rank}</TableCell>
                <TableCell style={{ fontWeight: '600', cursor: 'pointer' }} component="th" scope="row"
                onClick={() => {
                  navigate(`/details?id=${row.id}`)
                }}>
                  {row.name} <Symbol>{row.symbol.toUpperCase()} {row.price_change_percentage_24h < row.market_cap_change_percentage_24h ? <Buy>Buy</Buy> : ''}</Symbol>
                </TableCell>
                <TableCell style={{ fontWeight: '600' }} align="right">{USDollar.format(row.market_cap)}</TableCell>
                <TableCell className={row.price_change_percentage_24h < row.market_cap_change_percentage_24h ? classes.rootRed : classes.rootGreen} align="right">{row.price_change_percentage_24h.toFixed(2)}%</TableCell>
                <TableCell className={row.price_change_percentage_24h > row.market_cap_change_percentage_24h ? classes.rootRed : classes.rootGreen} align="right">{row.market_cap_change_percentage_24h.toFixed(2)}%</TableCell>
                <TableCell style={{ fontWeight: '600', ...(row.market_cap_change_24h < 0 ? { color: '#FF0000' } : {}) }} align="center">{USDollar.format(row.market_cap_change_24h)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
