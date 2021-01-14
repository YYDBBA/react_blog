import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import App from './../views/App'
const Router: React.FC = () => {
  return (
    <HashRouter>
      <Route path='/' component={App} />
    </HashRouter>
  )
}
export default Router;