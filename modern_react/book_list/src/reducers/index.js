import { combineReducers } from 'redux';
import BooksReduect from './reducers/reducer_books.js'

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
