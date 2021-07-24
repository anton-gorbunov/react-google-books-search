const booksLoaded = (booksData) => {
    return {
        type:'BOOKS_LOADED',
        payload:booksData
    }
}
const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
}
const bookLoaded = (book) => {
    return {
        type: 'BOOK_LOADED',
        payload:book
    }
}
const setSearchValues = (search) => {
    return {
        type: 'SET_SEARCH_VALUES',
        payload:search
    }
}
const setFetchData = (bool) => {
    return {
        type: 'FETCH_DATA',
        payload: bool
    }
}

export {
    booksLoaded,
    booksRequested,
    bookLoaded,
    setSearchValues,
    setFetchData
}