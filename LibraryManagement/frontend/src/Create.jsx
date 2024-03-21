import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'



function Create() {

    let navigate = useNavigate()
    

    const [book,setBook]=useState({
        bookName:"",
        authorName:""
    })

    const{bookName,authorName} = book

    const onInputChange=(e)=>{
        setBook({...book,[e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/book",book)
        navigate("/")

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-3 mt-2 shadow'>
                <h2  className='mb-4'>New Book Entry</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className='form-label'>Book Name</label>
                    <input type={'text'} className='form-control' placeholder='Enter Book Name' name="bookName" value={bookName}
                    onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className='form-label'>Author Name</label>
                    <input type={'text'} className='form-control' placeholder='Enter Author Name' name="authorName" value={authorName} 
                    onChange={(e)=> onInputChange(e)}/>
                </div>
                <button type="submit" className='btn btn-primary '>Submit</button>
                <Link className='btn btn-danger mx-2' to="/">Cancel</Link>
                
                </form>
            </div>

        </div>
    </div>

  )
}

export default Create