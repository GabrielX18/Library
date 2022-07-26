export const  TYPES={
    ADD_BOOK:"ADD_BOOK",
    DELETE_BOOK:"DELETE_BOOK",
    EDIT_BOOK:"EDIT_BOOK"
}

const reducer=(state,action)=>{
    if(action.type===TYPES.ADD_BOOK){
        const temp=[...state]
        temp.push(action.payload)
        state=[...temp]
    }

    return state;
}

export default reducer;