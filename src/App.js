import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './containers/PrivateRoute'
import LoginContainer from './containers/LoginContainer'
import LinkBtn from './components/LinkBtn'
import Home from './components/Home'
import ProfileContainer from './containers/ProfileContainer'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => (
  <CssBaseline>
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkBtn to="/" label={'Главная'} />
          <LinkBtn to="/login" label={'Логин'} />
          <LinkBtn to="/profile" label={'Профиль'} />
         
        </div>
      </header>

      <hr />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
        </Switch>
      </div>
    </div>
  </CssBaseline>
)



export default App;
