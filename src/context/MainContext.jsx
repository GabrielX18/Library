import { createContext,useReducer } from 'react'
import reducer from './reducer'

export const ThemeContext= createContext([{
  items:[],
  createItem:(item)=>{},
}]);

function MainContext({children}) {

    const[state,dispatch]=useReducer(reducer,[])

  return (
    <ThemeContext.Provider value={[state,dispatch]}>
        {children}
    </ThemeContext.Provider>
  )
}

export default MainContext;


