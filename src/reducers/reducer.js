import { transformBooks } from "../libs/functions"
const initialState = {
    books: [],
    book: {},
    loading: false,
    searchValues: {},
    searchError:false,
    totalItems:null,
    fetching: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BOOKS_LOADED' :
            if (action.payload) {
                return {
                    ...state,
                    books:[...state.books, ...action.payload.items.map(item => transformBooks(item))],
                    loading:false,
                    totalItems: action.payload.totalItems,
                    fetching:false
                }
            }
            return {
                ...state,
                loading: false,
                searchError: true
            }
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                loading: true,
                searchError:false,
                
            }
        case 'BOOK_LOADED':
            return {
                ...state,
                loading:false,
                book: transformBooks(action.payload)
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
                fetching: action.payload
            }
        default:
            return state;
    }
}

export default reducer;