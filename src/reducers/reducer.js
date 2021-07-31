import {transformBooks} from '../libs/functions';

const initialState = {
    books: [],
    book: {},
    loading: false,
    searchValues: {},
    searchError:false,
    totalItems:0,
    fetching: false,
    fetchError: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BOOKS_LOADED' :
            if (!action.payload) {
                return {
                    ...state,
                    loading: false,
                    searchError: true
                }
            }
            return {
                ...state,
                books:[...state.books, ...action.payload.items.map(item => transformBooks(item))],
                totalItems: action.payload.totalItems,
                loading:false,
                fetching:false,
                fetchError:false
            }
        case 'BOOK_LOADED':
            return {
                ...state,
                loading:false,
                book: transformBooks(action.payload)
            }
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                loading: true,
                searchError:false
            }
        case 'SET_SEARCH_VALUES' : 
            return {
                ...state,
                searchValues:action.payload,
                fetching:true,
                books:[]
            }
        case 'FETCH_DATA' :
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_ERROR' :
            return {
                loading: false,
                fetchError: true
            }
        default:
            return state;
    }
}

export default reducer;