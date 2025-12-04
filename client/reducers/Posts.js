function posts(state=[], action){
    switch(action.type){
        case 'INCREMENT_LIKES':
              const id = action.index;
              console.log(id);
              return [
                ...state.slice(0,id),
                {...state[id], likes:state[id].likes+1},
                ...state.slice(id+1)
              ];
        default : 
            return state;
    }
}


export default posts;