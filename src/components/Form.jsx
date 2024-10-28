import React, { useState } from 'react'

const FormData = () => {
    const [formData , setFormData] = useState({name : '' , email : ''}) 

    const handleS = (e) => {
        const {name , value} = e.target; 
        setFormData((dataA) => ({
            ...dataA , 
            [name] : value 
        }))
    }
  return (
    <>
      <div className="flex justify-center p-3 mt-3 shadow-md rounded-md">
        <div className="">
         <div className="">
        <input type="text" className='border mt-3' 
        onChange={handleS}
        value={formData.name}
        
        placeholder='Name ...' />
        </div>
         <div className="">
         <input type="text" className='border mt-3' 
         value={formData.email}
        
         onChange={handleS}
         placeholder='Email ...' />
         </div>
         <button className='py-3 px-5 bg-red-400  mt-3'>Save</button>
         </div>
      </div>
    </>
  )
}

export default FormData


 