import React from 'react'
import { HomeContainer } from './pages/home'
import { Route, Switch } from 'react-router-dom'
import { CharactersContainer } from './pages/characters'
import { FavouritesContainer } from './pages/favourites'
import { Header } from './pages/common'

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/characters" component={CharactersContainer} />
        <Route path="/favourites" component={FavouritesContainer} />
        {/* <Route path="/characters/:id" component={CharacterDetails} /> */}
      </Switch>
      {/* <Footer /> */}
    </>
  )
}
