export function selectBook(book) {
    // this is action creator - so it should return action(an object that contains type and payload)
    return {
        type: 'BOOK_SELECTED', // usualy value of enum
        payload: book
    }
}