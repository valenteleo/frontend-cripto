import React, { useEffect, useState } from 'react'

import {
  Header,
  SideMenu,
  Logo,
  Anchors,
  ListTop,
  FirstImage,
  Paragraph,
  PrimaryButton,
  InputSearch,
  FieldInput,
  SearchImage,
  Text,
  FieldRight
} from './header'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { useCoinDataContext } from '../../context/coin-data.context'
import { useDebounce } from '../../utils/useDebounce'

export default function PrimaryHeader () {
  const [search, setSearch] = useState('')
  const coinDataContext = useCoinDataContext()

  const optionsList = [
    { id: 1, name: 'Cryptocurrencies' },
    { id: 2, name: 'Exchanges' },
    { id: 3, name: 'NFT' },
    { id: 4, name: 'Cryptown' },
    { id: 5, name: 'Portfolio' },
    { id: 6, name: 'Watchlist' },
    { id: 7, name: 'Products' }
  ]

  const debouncer = useDebounce((newTerm) => { coinDataContext.setSearchTerm(newTerm) })

  type Anchor = 'left'

  const [state, setState] = React.useState({
    left: false
  })

  useEffect(() => {
    debouncer.setCurrentInput(search)
  }, [debouncer, search])

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return
        }

        setState({ ...state, [anchor]: open })
      }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'left' ? 250 : 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {optionsList.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Paragraph style={{ display: 'flex', margin: '1em' }}>
          <FirstImage src={require('../../assets/diamond.png')} alt="Diamond"/>
            Log In
        </Paragraph>
        <PrimaryButton style={{ display: 'flex', margin: '0 0 0 1em' }}>Sing Up</PrimaryButton>
      </List>
    </Box>
  )

  const handleClean = () => {
    setSearch('')
  }

  return (
        <Header>
            <SideMenu>
              {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: '#DC0032' }}/></Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </SideMenu>
            <Logo src={require('../../assets/Marca com fundo.png')} alt="Coin Market Cap" style={{ cursor: 'pointer' }} onClick={() => { window.location.href = window.location.origin }}/>
            <Anchors>
                {
                    optionsList.map(l => {
                      return (
                            <ListTop key={l.id} id={`${l.id}`}>{l.name}</ListTop>
                      )
                    })
                }
            </Anchors>
            <FieldRight>
            <Paragraph>
                <FirstImage src={require('../../assets/diamond.png')} alt="Diamond"/>
                    Log In
            </Paragraph>

            <PrimaryButton>Sing Up</PrimaryButton>

            <FieldInput>
                <SearchImage src={require('../../assets/Search icon.png')} alt="Search"/>
                <InputSearch
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                    name={search}
                />
                <Text onClick={handleClean}>/</Text>
            </FieldInput>

            </FieldRight>
          </Header>
  )
}
