import React from "react"
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => (<div>
<Header course={course.name} />
<Content parts={course.parts} />
<Total
  exercises={course.parts.map(part => part.exercises)} />
</div>)


export default Course