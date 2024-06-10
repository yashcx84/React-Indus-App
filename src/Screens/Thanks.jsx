import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
function Thanks() {
    const contactData = useSelector(state => state.contact.contactData)
    return (
        <div className='myContainer'>
            <h1 className='text-center'>Thanks! <span>{contactData.name}</span> </h1>
            <p className='text-center'>For Contacting Us</p>
        </div>
    )
}

export default Thanks