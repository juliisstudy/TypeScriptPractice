import {ReactNode} from 'react'

type CounterProps = {
    setCount:React.Dispatch<React.SetStateAction<number>>,
    children:ReactNode,
}
const Counter = ({setCount,children}:CounterProps) =>{
    return(
        <>
        <div>{children}</div>
        <button onClick ={()=>setCount(prev=>prev+1)}>+</button>
        <button onClick ={()=>setCount(prev=>prev-1)}>-</button>

        </>
    )
}
export default Counter