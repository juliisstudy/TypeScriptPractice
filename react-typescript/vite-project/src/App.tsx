import Heading from './components/Heading'
import {Section} from './components/Section'
import './App.css'
import Counter from "./components/Counter"
import List from './components/List'

import {useState} from 'react'

function App() {

  const [count,setCount] = useState<number>(1)

  return (
    <>
    <Heading title={"Hello"} />
    <Section >This is my Section.</Section>
    <Counter setCount = {setCount}>Counter is {count}</Counter>
    <List items={["coffee","milk","bread"]} render={(item:string)=><span className="gold">{item}</span>} />
    </>
  )
}

export default App
