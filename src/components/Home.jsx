import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [Books , setBook] = useState([]);
  const [searchValue , setSearchValue] = useState('');
  
   const filterData = Books.filter((book) => book.title.toLowerCase().includes(searchValue.toLowerCase()));
  const dataReciever =() => {
    axios.get('http://localhost:3000/books').then(res => setBook(res.data)
    ).catch(err => console.log(err)
    )
  }
  useEffect(() => {
    dataReciever()
  } , [])

  return (
   <>
   <div className="container">
     <div className="row">
        <div className="col-md-4">
          <div className="">
          <input type="text" name="" onChange={(e) => setSearchValue(e.target.value)} className='form-control' id="" placeholder='Search Book'/>
          </div>
        </div>
        <div className="col-md-8">
         <h4>Book Lists</h4>
          <p>{searchValue}</p>
         <div className="row d-flex justify-between">
          {
           filterData.length > 0 ? filterData.map((book) => (
            <div className="col-md-4 mt-3" key={book.id}>
            <div className="card">
              <div className="card-header">
                Title : {book.title}
              </div>
              <div className="card-body">
              <p>Price : {book.price}</p>
              <p>Views : {book.views}</p>
              <input type="button" value="Share" className='btn btn-primary' />
              </div>
            </div>
          </div>
          )) :
          <p>No More Book Foundx`</p>
          }
         </div>
        </div>
     </div>
   </div>
   </>
  )
}

export default Home