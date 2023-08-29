import UseState from './topic/01-useState/useState'
import UseUseStateArray from './topic/01-useState/UseUseStateArray'
import UseUseStateObject from './topic/01-useState/UseUseStateObject'
import UseUseEffectBasic from './topic/02-useEffect/UseUseEffectBasic'
import UseUseEffectMultiple from './topic/02-useEffect/UseUseEffectMultiple'
import MultipleInputs from './topic/03-form/MultipleInputs'
import './App.css'

function App() {
   return (
    <>
      <h1>Advanced React</h1>
      <UseState/>
      <UseUseStateArray/>
      <UseUseStateObject/>
      <UseUseEffectBasic/>
      <UseUseEffectMultiple/>
      <MultipleInputs/>
    </>
  )
}

export default App
