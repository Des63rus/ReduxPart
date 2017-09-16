// state argument is not application state - its only state this reduser responsible for.
// so its basicly preveous result ov reducer work
export default function(state = null, action){
    // state=null means if state is undefined, set it to null
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
            //state.title = book.title    
            // return state  -BAD , never do like this 
    }
    return state;
}