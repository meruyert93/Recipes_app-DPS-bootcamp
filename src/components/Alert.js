import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, ingredient, description}) => {
    useEffect(() => {
        const timeout = setTimeout(()=>{
            removeAlert()
        },3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [ingredient, description])
    return (
        <h2 className={`alert alert-${type}`}>
            {msg}
        </h2>
    )
}

export default Alert
