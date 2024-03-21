import React from 'react'
import { useEffect,useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import axios from 'axios';

function Read() {
    const [book, setBook] = useState({
        bookName: "",
        authorName: ""
      });
    
 
      const{ bookId } = useParams();
    
      useEffect(() => {
        loadBook();
      }, []);
    
      const loadBook= async () => {
        const result = await axios.get(`http://localhost:8080/book/${bookId}`);
        setBook(result.data);
      };
    
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">Book Details</h2>
    
              <div className="card">
                <div className="card-header">
                 <h5> Details of Book having id : {book.bookId}</h5>
                  <ul className="list-group">
                  <li className=" list-group-item ">
                      <b>Book Id:</b>
                      {book.bookId}
                    </li>
                    <li className="list-group-item ">
                      <b >Book Name:</b>
                      {book.bookName}
                    </li>
                    <li className=" list-group-item ">
                      <b>Author Name:</b>
                      {book.authorName}
                    </li>
                  </ul>
                </div>
              </div>
              <Link className="btn btn-primary my-2" to={"/"}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
  )
}

export default Read