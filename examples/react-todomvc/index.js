import React, { options } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import App from './containers/App'
import 'todomvc-app-css/index.css'

window._instMap = new Map()
React.options.afterMount = (inst) => {
  window._instMap.set(inst.dom, inst)
  window._instMap.set(inst, inst.dom)
  console.log(inst)
}

const render = Component => {
  window.ComponentRoot = ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

render(App)

// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./containers/App', () => {
//     render(App);
//   });
// }
