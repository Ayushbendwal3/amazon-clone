import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StateProvider } from './Components/StateProvider'
import reducer, { intialState } from './Components/Reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={intialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
