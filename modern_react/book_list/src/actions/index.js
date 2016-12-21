export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  console.log('index.js action firing with ' + book.title);
  
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
