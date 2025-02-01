import React from 'react'

function Counter({title, ...obj}) {
    return (
        <div>
            <h1>{title} {obj.count} {obj.place}</h1>
        </div>
    )
}
const Employee = (props) => {
    return (
        <div>
<h1>Name: {props.Name} , Age: {props.age}</h1>
        </div>
    )
}
export default Employee
