import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Loader } from '../src'

const App = () => {
  return (
    <div>
      <Loader></Loader>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
