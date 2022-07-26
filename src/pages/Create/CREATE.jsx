import {useState,useContext} from 'react'
import { ThemeContext } from '../../context/MainContext'
import { TYPES } from '../../context/reducer'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import "./styles/CREATE.css"

function CREATE() {

    const[state,dispatch]=useContext(ThemeContext)

    const[titleState,setTitleState]=useState("")
    const[authorState,setAuthorState]=useState("")
    const[coverState,setCoverState]=useState("")
    const[introductionState,setIntroductionState]=useState("")
    const[completedState,setCompletedState]=useState(false)
    const[reviewState,setReviewState]=useState("")


    const handleChanges=(e)=>{
        const name= e.target.name;
        const value= e.target.value

        switch (name) {
            case "title":
                setTitleState(value)
            break;

            case "author":
                setAuthorState(value)
            break

            case "introduction":
                setIntroductionState(value)
            break

            case "completed":
                setCompletedState(!e.target.checked)
            break

            case "review":
                setReviewState(value)
            break
            
            
            default:
                break;
        }
    }

    const handleFile=(e)=>{
        const item= e.target.files[0];
        const reader= new FileReader();

        reader.readAsDataURL(item)

        reader.addEventListener("load",e=>{
            setCoverState(reader.result.toString())
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        

       const Book={ 
           id: uuidv4(),
           title: titleState,
           author: authorState,
           cover: coverState,
           introduction: introductionState,
           isCompleted: completedState,
           review: reviewState
       }

       dispatch({type: TYPES.ADD_BOOK, payload: Book})
    }


  return (

    <div className="create_content">
        <form onSubmit={handleSubmit} className="form_content">
          <p>Titulo</p>
          <input type="text" name='title' onChange={handleChanges} value={titleState}/>
          <p>Autor</p>
          <input type="text" name='author' onChange={handleChanges} value={authorState}/>
          <p>Cover</p>
          <input type="file" name='cover' onChange={handleFile} />
          {coverState? <img src={coverState} width="100px" height="150px"/>:""}
          <p>Introducion</p>
          <input type="text" name='introduction' onChange={handleChanges} value={introductionState}/>
          <p>Completed</p>
          <input type="checkbox" name='completed' onChange={handleChanges} value={completedState} />
          <p>Review</p>
          <input type="text" name='review' onChange={handleChanges} value={reviewState} />
          <input type="submit" value="Registrar Libro" />
      </form>

    </div>
      
  )
}

export default CREATE;
