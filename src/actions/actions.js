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
const fetchData = () => {
    return {
        type: 'FETCH_DATA'
    }
}
const fetchError = () => {
    return {
        type: 'FETCH_ERROR'
    }
}

export {
    booksLoaded,
    booksRequested,
    bookLoaded,
    setSearchValues,
    fetchData,
    fetchError
}