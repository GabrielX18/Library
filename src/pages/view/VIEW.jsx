import { useContext,useState } from "react"
import { useParams } from "react-router"
import { ThemeContext } from "../../context/MainContext"
import "./styles/VIEW.css"

function VIEW() {

    const[state,dispatch]=useContext(ThemeContext)
    // const [book,setBook]=useState([])
    const {bookId}= useParams()

    const book= state.find(book=> book.id===bookId)
    console.log(book)
    
    

  return (
    <div className="viewBook_content">
      <div className="book_cover">
          <img src={book.cover} alt=""  width="400px" height="500px" />
      </div>

      <div className="book_details">
          <h1>{book.title}</h1>
          <b>{book.author}</b>
          <p>{book.introduction}</p>

      </div>
    </div>
  )
}

export default VIEW
