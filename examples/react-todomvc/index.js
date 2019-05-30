import React, { options } from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import 'todomvc-app-css/index.css'

// Nerv Component Inspector
import ComponentInspector from '../../index'
ComponentInspector.init(React)

const render = Component => {
  window.ComponentRoot = ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
