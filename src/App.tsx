import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  About,
  CharactersContainer,
  FavouritesContainer,
  Footer,
  Header,
  HomePageContainer,
} from './components'

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/characters" component={CharactersContainer} />
        <Route path="/favourites" component={FavouritesContainer} />
        <Route path="/about" component={About} />
        {/* <Route path="/characters/:id" component={CharacterDetails} /> */}
      </Switch>
      <Footer />
    </>
  )
}
