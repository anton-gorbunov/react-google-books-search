import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import BooksService from '../../../services/booksService';
import BooksItem from '../../booksItem/booksItem';
import {booksLoaded, booksRequested, setFetchData} from '../../../actions/actions';
import Spinner from '../../spinner/spinner';

import './booksListPage.scss';

const BookSListPage = ({booksLoaded, booksRequested,setFetchData, search, books, fetching, loading, searchError, totalItems}) => {
    const [booksIndex, setBooksIndex] = useState(0);
    
    function onHandleClick() {
        setBooksIndex(books.length);
        setFetchData(true);
    }
    useEffect(() => {
        if (fetching) {
            booksRequested();
            new BooksService().getBooks(search, booksIndex)
            .then((res) => booksLoaded(res));
        }
    }, [search, booksRequested, booksLoaded, booksIndex, fetching]);
    const booksList = books.map((item, i) => {
        return (
            <BooksItem 
                key={i}
                data={item}
            />
        );
    });
    
    const button = (
        <button className="booksList__button button"onClick={onHandleClick}>Load more books</button>
    )
    if (searchError) {
        return (
            <div className="container">
                <h2 className="booksList__error">{`There are no search results for "${search.searchValue}"`}</h2>
            </div>
        )   
    }
    return (
        <section className="booksList">
            <div className="container">
                <h2 className="booksList__title">
                    {books.length !== 0 ? `Found ${totalItems} results` : null}
                </h2>
                <div className="booksList__wrapper">
                    {booksList}
                </div>
                {loading ? <Spinner/>: null}
                {books.length === 0 || books.length === +totalItems ? null : button}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        search: state.searchValues,
        books: state.books,
        loading: state.loading,
        searchError: state.searchError,
        totalItems: state.totalItems,
        fetching: state.fetching

    }
}
const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    setFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(BookSListPage);


