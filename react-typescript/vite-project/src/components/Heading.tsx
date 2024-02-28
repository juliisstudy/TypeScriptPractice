import { ReactElement } from "react"

//define heading props
type HeadingProps = {title:string}

const Heading = ({title}:HeadingProps):ReactElement=>{
    return(
        <div>{title}</div>
    )
}
export default Heading