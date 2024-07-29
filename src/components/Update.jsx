import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
const Update = () => {
  const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [Age, setAge] = useState(0)
const [error,setError]=useState("")
const navigate=useNavigate()

const {id}=useParams();
const getSingleUser=async()=>{

  const response=await fetch(`http://localhost:5000/${id}`);
  const result=await response.json()
  if(!response.ok)
    {
      console.log(result.error)
      setError(result.error)

    }
    if(response.ok)
    {
      
       setError("")
       console.log("uPDATED user ",result);
       setName(result.name)
       setEmail(result.email)
       setAge(result.Age)

      

    }

}
useEffect(() => {
  getSingleUser()
}, [])

const handleUpdate=async(e)=>{
    //console.log("atleast here")
    e.preventDefault()
    const updatedUser={name,email,Age}

    //console.log(addUser)
    const response=await fetch(`http://localhost:5000/${id}`,{
        method:"PATCH",
        body:JSON.stringify(updatedUser),
        headers:{
            "Content-Type":"application/json",
        }
    });
    const result= await response.json()
    if(!response.ok)
    {
     console.log(result.error)
     setError(result.error)
    }
   if(response.ok)
   {
  setError("")
    navigate("/all")
   }
}



  return (
    <div className='container my-2'>
      {error && <div class="alert alert-danger" >
  {error}
</div>}

        <h2 className='text-Center'>Edit Data

        </h2>

        <form  onSubmit={handleUpdate}>

        <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control"  value={name} onChange={(e)=>setName(e.target.value)}/>

  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="Number" className="form-control" value={Age} onChange={(e)=>setAge(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary" > Submit</button>
</form>


    </div>
  )
}

export default Update