import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import App from './../views/App'
import Home from './../views/Home'
import Set from './../views/Set'
const Router: React.FC = () => {
  return (
    <HashRouter>
      <Route path='/' component={App}></Route>
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/set' component={Set}></Route>
      </Switch>
    </HashRouter>
  )
}
export default Router;