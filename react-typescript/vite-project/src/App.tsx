import {useState,useEffect,useCallback,MouseEvent,KeyboardEvent} from 'react'


interface User {
  id:number,
  username:string,
}

function App() {

  const [count,setCount] = useState<number>(0)
  const [users,setUsers] = useState<User[]|null>(null)

  useEffect(()=>{
    console.log('mounting')

    return ()=>console.log('unmounting')
  },[users])

  // const addTwo = useCallback((e:MouseEvent<HTMLButtonElement>|
  //   KeyboardEvent<HTMLButtonElement>):void =>setCount(prev=>prev+1),[])
  return (
    <>
    <div>
      <h1>{count}</h1>
      {/* <button onClick={addTwo}>add</button> */}
    </div>
    </>
  )
}

export default App
