import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReduser from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer, 
  activeBook: ActiveBookReduser
});

export default rootReducer;
