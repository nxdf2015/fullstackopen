import React from 'react'

const Notification = ({message,type}) => {
    
    if (message === ""  ){
        return null
    }
    else {
        return <div className={`notification ${type === "success" ? "notification-success" : "notification-error"}`} >{message}</div>
    }
}


export default Notification