import React from "react"


const Total = ({exercises}) =>   <p>total of {exercises.reduce((acc,value)=>acc+value,0)} exercises </p>


export default Total