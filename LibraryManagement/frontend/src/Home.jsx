import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Home() {
    const [books, setBooks] = useState([]);

    const {bookId} = useParams();

    useEffect(() => {
        loadBooks();
      }, []);
   
      const loadBooks = async ()=>{
        const result=await axios.get("http://localhost:8080/books");
        setBooks(result.data);
        };

    const deleteBook = async (bookId) =>{
           
        await axios.delete(`http:localhost:8080/book/${bookId}`);
        loadBooks();
      
    }

  
    return (
        <div className="container">
            <table className="table table-hover shadow">
                <thead>
                    <tr>
                        <th scope="col">Book Id</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.bookId}</td>
                            <td>{book.bookName}</td>
                            <td>{book.authorName}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/Read/${book.bookId}`}>Read</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/Update/${book.bookId}`}>Update</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteBook(book.bookId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link className="btn btn-outline-dark position-absolute mt-5 start-50 translate-middle " to="/Create">Add New Book</Link>
        </div>
    );
}
export default Home;