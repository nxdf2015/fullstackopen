import React from "react"


import Part from "./Part"

const Content = ({parts}) => <div>{parts.map(item => <Part key={item.id} part={item.part} exercise={item.exercise}/>)}

</div>
 



export default Content