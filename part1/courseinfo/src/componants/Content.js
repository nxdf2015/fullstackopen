import React from "react"


import Part from "./Part"

const Content = ({parts}) => <div>{parts.map(item => <Part   part={item.name} exercise={item.exercises}/>)}

</div>
 



export default Content