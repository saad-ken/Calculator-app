import React from 'react'

const Keys = ({lable,click}) => {
    return (
       <input className='keys' type="button" value={lable}  onClick={click} />
    )
}

export default Keys
