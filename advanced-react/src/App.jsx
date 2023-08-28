import UseState from './topic/01-useState/useState'
import UseUseStateArray from './topic/01-useState/UseUseStateArray'
import UseUseStateObject from './topic/01-useState/UseUseStateObject'
import UseUseEffectBasic from './topic/02-useEffect/UseUseEffectBasic'
import './App.css'

function App() {
   return (
    <>
      <h1>Advanced React</h1>
      <UseState/>
      <UseUseStateArray/>
      <UseUseStateObject/>
      <UseUseEffectBasic/>
    </>
  )
}

export default App
