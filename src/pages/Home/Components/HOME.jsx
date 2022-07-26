import {useContext, useEffect} from 'react'
import { ThemeContext } from '../../../context/MainContext'
import { Link} from 'react-router-dom'
import Book from './Book'
import "../styles/HOME.css"


function HOME() {

  const context=useContext(ThemeContext)



  useEffect(()=>{
    console.log(context)
  },[context])

  return (
      <div className="home_content">
          {
            context[0].map((book,index)=>{
             return(
               <div key={index} className="book_content">
               <Link to={`view/${book.id}`}><img src={book.cover} className="book_content-img"/> </Link>
               <h2>{book.title}</h2>
               </div>
             )
            })
          }
      </div>
  )
}

export default HOME
