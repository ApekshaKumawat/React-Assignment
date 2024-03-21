import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams} from 'react-router-dom'

function Update() {

    let navigate = useNavigate()
    

    useEffect(()=>{
        loadBook();
    }, []);

    const [book,setBooks]=useState({
        bookName:"",
        authorName:""
    })
  

    const {bookId}=useParams()

    const{bookName,authorName} = book

    const onInputChange=(e)=>{
        setBooks({...book,[e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/book/${bookId}`,book)
        navigate("/")
     
    }

    const loadBook = async ()=>{
            const result=await axios.get(`http://localhost:8080/book/${bookId}`)
            setBooks(result.data)
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-3 mt-2 shadow'>
            <h2  className='mb-4'>Edit Book Details</h2>
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


export default Update