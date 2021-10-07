import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import NavigationProvider from './contexts/Navigation'

import Workspace from './components/Workspace/Workspace'
import Navigation from './components/Navigation/Navigation'

const Main = () => (
  <div id='Main'>
    <NavigationProvider>
      <Workspace/>
      <Navigation/>
    </NavigationProvider>
  </div>
)

ReactDOM.render(<Main/>, document.getElementById('root'))